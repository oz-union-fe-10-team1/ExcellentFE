import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { useEffect, useState } from 'react'
import Slider from '@/components/common/Slider'
import { Check } from 'lucide-react'
import CardList from '@/components/common/cards/CardList.tsx'
import Pagination from '@/components/common/Pagination'
import { usePagination } from '@/hooks/usePagination'
import useProductSearch from '@/hooks/useProductSearch'
import { useSearchParams, useNavigate } from 'react-router-dom'

const PAGE_SIZE = 16

const Search = () => {
  const [keyword, setKeyword] = useState('')
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  const handleFeatureChange = (label: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    )
  }

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const queryParams = Object.fromEntries(searchParams.entries())

  useEffect(() => {
    const urlKeyword = queryParams.q || ''
    setKeyword(urlKeyword)

    const featuresMap: Record<string, string> = {
      is_gift_suitable: '선물용',
      is_regional_specialty: '지역 특산주',
      is_award_winning: '주류 대상 수상',
      is_limited_edition: '리미티드 에디션',
    }

    const urlFeatures = searchParams.getAll('feature[]')
    const selectedLabels = urlFeatures
      .map((feature) => featuresMap[feature])
      .filter(Boolean)
    setSelectedFeatures(selectedLabels)

    setSweetness([Number(queryParams.sweetness) || 0])
    setAcidity([Number(queryParams.acidity) || 0])
    setBody([Number(queryParams.body) || 0])
    setCarbonation([Number(queryParams.carbonation) || 0])
    setBitter([Number(queryParams.bitterness) || 0])
    setAroma([Number(queryParams.aroma) || 0])

    if (Object.keys(queryParams).length === 0) {
      setKeyword('')
      setSelectedFeatures([])
      setSweetness([0])
      setAcidity([0])
      setBody([0])
      setCarbonation([0])
      setBitter([0])
      setAroma([0])
    }
  }, [searchParams])

  const handleSearch = (e?: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault()
    const featuresMap: Record<string, string> = {
      선물용: 'is_gift_suitable',
      '지역 특산주': 'is_regional_specialty',
      '주류 대상 수상': 'is_award_winning',
      '리미티드 에디션': 'is_limited_edition',
    }

    const selectedFeatureParams = selectedFeatures.map(
      (label) => featuresMap[label]
    )

    const params: Record<string, any> = {}
    if (keyword) params.q = keyword
    if (selectedFeatureParams.length > 0) {
      params['feature[]'] = selectedFeatureParams
    }

    params.sweetness = sweetness[0]
    params.acidity = acidity[0]
    params.body = body[0]
    params.carbonation = carbonation[0]
    params.bitterness = bitter[0]
    params.aroma = aroma[0]

    params.page = '1'
    params.page_size = '12'

    const queryString = new URLSearchParams(params).toString()
    navigate(`/search?${queryString.toString()}`)
  }

  const options = [
    { id: 1, label: '선물용' },
    { id: 2, label: '지역 특산주' },
    { id: 3, label: '주류 대상 수상' },
    { id: 4, label: '리미티드 에디션' },
  ]
  const [sweetness, setSweetness] = useState([0])
  const [acidity, setAcidity] = useState([0])
  const [body, setBody] = useState([0])
  const [carbonation, setCarbonation] = useState([0])
  const [bitter, setBitter] = useState([0])
  const [aroma, setAroma] = useState([0])

  type SliderVariant =
    | 'sweetness'
    | 'acidity'
    | 'body'
    | 'carbonation'
    | 'bitter'
    | 'aroma'

  const sliders: {
    id: SliderVariant
    label: string
    value: number[]
    setter: React.Dispatch<React.SetStateAction<number[]>>
  }[] = [
    {
      id: 'sweetness',
      label: '단\u00A0\u00A0\u00A0\u00A0맛',
      value: sweetness,
      setter: setSweetness,
    },
    {
      id: 'acidity',
      label: '산\u00A0\u00A0\u00A0\u00A0미',
      value: acidity,
      setter: setAcidity,
    },
    { id: 'body', label: '바디감', value: body, setter: setBody },
    {
      id: 'carbonation',
      label: '탄산감',
      value: carbonation,
      setter: setCarbonation,
    },
    {
      id: 'bitter',
      label: '쓴\u00A0\u00A0\u00A0\u00A0맛',
      value: bitter,
      setter: setBitter,
    },
    {
      id: 'aroma',
      label: '풍\u00A0\u00A0\u00A0\u00A0미',
      value: aroma,
      setter: setAroma,
    },
  ]

  const leftSliders = sliders.filter(
    (s) => s.id === 'sweetness' || s.id === 'acidity' || s.id === 'body'
  )

  const rightSliders = sliders.filter(
    (s) => s.id === 'carbonation' || s.id === 'bitter' || s.id === 'aroma'
  )
  const hasQuery = Object.keys(queryParams).length > 0

  const { data, isLoading, isError } = useProductSearch(
    hasQuery ? queryParams : null
  )

  const { currentPage, totalPages, paginatedData, handlePageChange } =
    usePagination({
      items: data?.results ?? [],
      pageSize: PAGE_SIZE,
    })

  return (
    <div>
      <div className="flex flex-col items-center gap-[50px]">
        <h1 className="mt-25 text-[40px] font-bold text-[#333]">제품 검색</h1>
        <Input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          variant="search"
          onSearch={handleSearch}
          placeholder="검색어를 입력하세요."
        />
      </div>
      <div className="mb-25 flex flex-col items-center">
        <div className="mb-[17px] flex w-320 items-center justify-between">
          <h2 className="text-[24px] font-bold text-[#333333]">상세 검색</h2>
          <Button
            onClick={handleSearch}
            variant="VARIANT7"
            className="h-[39px] w-[117px]"
          >
            필터 적용하기
          </Button>
        </div>
        <div className="flex h-[266px] w-320 items-center justify-center gap-[59px] rounded-[6px] bg-[#F2F2F2]">
          <ul className="flex h-[180px] flex-col justify-between gap-3">
            {options.map(({ id, label }) => (
              <li key={id}>
                <label className="inline-flex cursor-pointer items-center gap-[14px]">
                  <div className="relative h-[30px] w-[30px]">
                    <input
                      type="checkbox"
                      className="peer h-full w-full appearance-none rounded-[6px] border border-[#D9D9D9] bg-white checked:bg-blue-500"
                      checked={selectedFeatures.includes(label)}
                      onChange={() => handleFeatureChange(label)}
                    />
                    <Check className="pointer-events-none absolute inset-0 m-auto h-[20px] w-[20px] text-white opacity-0 peer-checked:opacity-100" />
                  </div>
                  <span className="text-[18px] text-[#333333] select-none">
                    {label}
                  </span>
                </label>
              </li>
            ))}
          </ul>
          <div className="flex gap-8">
            <div className="flex h-[181px] w-[480px] flex-col justify-between gap-[30px]">
              {leftSliders.map(({ id, label, value, setter }) => (
                <Slider
                  key={id}
                  variant={id}
                  label={label}
                  value={value}
                  onValueChange={setter}
                />
              ))}
            </div>

            <div className="flex h-[181px] w-[480px] flex-col justify-between gap-[30px]">
              {rightSliders.map(({ id, label, value, setter }) => (
                <Slider
                  key={id}
                  variant={id}
                  label={label}
                  value={value}
                  onValueChange={setter}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <h2 className="mb-[19px] text-[24px] font-bold text-[#333333]">
            검색 결과
          </h2>
          <hr className="mb-5 w-[1280px] border-2 border-[#000000]" />
        </div>
        <div className="mb-25 flex flex-col gap-20">
          <CardList
            type="default"
            cards={paginatedData.map((product) => ({
              imgSrc: product.main_image_url,
              imgAlt: product.name,
              title: product.name,
              subtitle: product.short_description,
              price: product.price,
            }))}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}

export default Search
