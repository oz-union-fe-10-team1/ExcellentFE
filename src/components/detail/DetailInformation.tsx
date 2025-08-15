import type { ProductDetail } from '@/mocks/detailMock'
import { DRINK_INFO_ROWS } from '@/constants/detailPage'

const DetailInformation = ({ data }: { data: ProductDetail }) => {
  const drinkInfoRows = DRINK_INFO_ROWS(data)

  return (
    <div>
      {/* 탭 메뉴 */}
      <div className="border-b">
        <div className="flex w-full">
          <button className="w-[33%] cursor-pointer border-b-2 border-black px-6 py-3 text-lg font-bold text-black">
            상품상세정보
          </button>
          <button className="w-[33%] cursor-pointer px-6 py-3 text-lg text-[#666666]">
            배송/교환/반품 안내
          </button>
          <button className="w-[33%] px-6 py-3 text-lg text-[#666666]">
            상품후기
          </button>
        </div>
      </div>

      {/* 상품 정보 테이블 */}
      <div className="mt-[50px]">
        <table className="w-full border-collapse border-t border-b border-[#d9d9d9]">
          <tbody>
            {drinkInfoRows.map((row, idx) => (
              <tr key={idx} className="h-20 border-b border-[#d9d9d9]">
                <td className="w-95 bg-[#f2f2f2] px-4 py-3 text-center text-lg font-bold">
                  {row.label}
                </td>
                <td className="pl-15 text-lg text-[#666666]">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 상세 이미지 */}
      <div className="mt-[50px]">
        <div className="w-full">
          <img
            src="/api/placeholder/800/600"
            alt="막걸리 브랜드"
            className="h-96 w-full object-cover"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f5f5dc'/%3E%3Ctext x='50%25' y='30%25' font-size='48' font-family='serif' text-anchor='middle' fill='%23333'%3E막걸리%3C/text%3E%3Ctext x='50%25' y='40%25' font-size='18' text-anchor='middle' fill='%23666'%3E우리나라 전통의%3C/text%3E%3Ctext x='50%25' y='45%25' font-size='18' text-anchor='middle' fill='%23666'%3E아름다운 맛%3C/text%3E%3C/svg%3E")`,
              backgroundSize: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default DetailInformation
