import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { useState } from 'react'
import Slider from '@/components/common/Slider'
import { Check } from 'lucide-react'
import CardList from '@/components/common/CardList'
import productSearchMockData from '@/mocks/handlers/product/mocks/productSearchMockData'
import Pagination from '@/components/common/Pagination'
import usePagination from '@/hooks/usePagination'

const PAGE_SIZE = 4

const SearchPage = () => {
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

  type SliderVariant = 'sweetness' | 'acidity' | 'body'

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
  ]

  const data = productSearchMockData()
  const { currentPage, totalPages, paginatedData, handlePageChange } =
    usePagination({
      items: data.results,
      pageSize: PAGE_SIZE,
    })

  const cardData = paginatedData.map((item) => ({
    imgSrc: item.main_image_url,
    imgAlt: item.name,
    title: item.name,
    subtitle: item.short_description,
    price: item.price,
  }))

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
        <div className="flex h-[266px] w-320 items-center justify-center gap-[411px] rounded-[6px] bg-[#F2F2F2]">
          <ul className="flex flex-col gap-[14px]">
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
          <div className="flex flex-col gap-[30px]">
            {sliders.map(({ id, label, value, setter }) => (
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
      <div className="flex flex-col items-center">
        <div>
          <h2 className="mb-[19px] text-[24px] font-bold text-[#333333]">
            검색 결과
          </h2>
          <hr className="mb-5 w-[1280px] border-2 border-[#000000]" />
        </div>
        <div className="flex flex-col gap-20">
          <CardList cards={cardData} />
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

export default SearchPage
