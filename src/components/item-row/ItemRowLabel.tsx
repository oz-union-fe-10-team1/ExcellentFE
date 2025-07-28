interface ItemRowLabelType {
  type?: 'cart' | 'order' | 'tasting'
  children?: React.ReactNode
  className?: string
}

const ItemRowLabel = ({ type, children, className }: ItemRowLabelType) => {
  return (
    <div className={`mt-26 w-320 ${className}`}>
      <div className="mb-3 border-b-2 pb-5 text-2xl font-bold text-[#333333]">
        {type === 'cart' && <h1>장바구니 상품</h1>}
        {type === 'order' && <h1>주문내역</h1>}
        {type === 'tasting' && <h1>나의 시음 히스토리</h1>}
      </div>

      <table className="w-320 table-fixed">
        <thead className="border-b">
          {type === 'cart' && (
            <tr>
              <th className="pb-3 pl-4 text-left">상품/옵션 정보</th>
              <th className="pb-3">수량</th>
              <th className="pb-3">가격</th>
              <th className="pb-3">수령 장소</th>
            </tr>
          )}
          {type === 'order' && (
            <tr>
              <th className="pb-3">주문일자</th>
              <th className="pb-3">상품/옵션 정보</th>
              <th className="pb-3">수량</th>
              <th className="pb-3">가격</th>
              <th className="pb-3">사용 후기</th>
            </tr>
          )}
          {type === 'tasting' && (
            <tr>
              <th className="pb-3">상품/옵션 정보</th>
              <th className="pb-3">주문일자</th>
              <th className="pb-3">시음 후기 내용</th>
            </tr>
          )}
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

export default ItemRowLabel
