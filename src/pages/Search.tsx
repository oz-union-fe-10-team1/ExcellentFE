import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { useState } from 'react'
import Slider from '@/components/common/Slider'
import { Check } from 'lucide-react'
import CardList from '@/components/common/card/CardList.tsx'
import Pagination from '@/components/common/Pagination'
import { usePagination } from '@/hooks/usePagination'
import useProductSearch from '@/hooks/useProductSearch'

const PAGE_SIZE = 4

const Search = () => {
  const [keyword, setKeyword] = useState('')

  const options = [
    { id: 1, label: '선물용' },
    { id: 2, label: '지역 특산주' },
    { id: 3, label: '주류 대상 수상' },
    { id: 4, label: '리미티드 에디션' },
  ]
  const [sweetness, setSweetness] = useState([0])
  const [acidity, setAcidity] = useState([0])
  const [body, setBody] = useState([0])
  const [carnobation, setCarbonation] = useState([0])
  const [bitter, setBitter] = useState([0])
  const [zest, setZest] = useState([0])

  type SliderVariant =
    | 'sweetness'
    | 'acidity'
    | 'body'
    | 'carbonation'
    | 'bitter'
    | 'zest'

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
      value: carnobation,
      setter: setCarbonation,
    },
    {
      id: 'bitter',
      label: '쓴\u00A0\u00A0\u00A0\u00A0맛',
      value: bitter,
      setter: setBitter,
    },
    {
      id: 'zest',
      label: '풍\u00A0\u00A0\u00A0\u00A0미',
      value: zest,
      setter: setZest,
    },
  ]

  const leftSliders = sliders.filter(
    (s) => s.id === 'sweetness' || s.id === 'acidity' || s.id === 'body'
  )

  const rightSliders = sliders.filter(
    (s) => s.id === 'carbonation' || s.id === 'bitter' || s.id === 'zest'
  )

  const { data, isLoading, isError } = useProductSearch()

  const { currentPage, totalPages, paginatedData, handlePageChange } =
    usePagination({
      items: data?.results ?? [],
      pageSize: PAGE_SIZE,
    })
  if (isLoading) return <div>로딩 중...</div>
  if (isError) return <div>에러가 발생했습니다.</div>

  return (
    <div>
      <div className="flex flex-col items-center gap-[50px]">
        <h1 className="mt-25 text-[40px] font-bold text-[#333]">제품 검색</h1>
        <Input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          variant="search"
          onSearch={() => {
            console.log('검색어:', keyword)
          }}
          placeholder="검색어를 입력하세요."
        />
      </div>
      <div className="mb-25 flex flex-col items-center">
        <div className="mb-[17px] flex w-320 items-center justify-between">
          <h2 className="text-[24px] font-bold text-[#333333]">상세 검색</h2>
          <Button variant="VARIANT7" className="h-[39px] w-[117px]">
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
          <div className="flex gap-[59px]">
            <div className="flex h-[181px] flex-col justify-between gap-[30px]">
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

            <div className="flex h-[181px] flex-col justify-between gap-[30px]">
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
