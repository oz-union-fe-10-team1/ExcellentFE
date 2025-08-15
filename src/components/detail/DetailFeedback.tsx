import StarRating from '../common/StarRating'

const DetailFeedback = () => {
  return (
    <div className="mb-[100px]">
      <h3 className="border-b pb-5 text-lg font-bold">상품 후기</h3>
      <div className="mt-[35px] flex gap-[31px] border-b border-[#d9d9d9] pb-[30px]">
        <img
          src=""
          alt="임시 이미지"
          className="h-50 w-63 rounded-[10px] border"
        />
        <div className="flex">
          <div className="flex flex-col gap-3">
            <StarRating defaultRating={5} readOnly />
            <div className="w-140 text-[22px] text-[#333333]">
              한 잔 취향에서 테스트 후 구매했는데 너무 달콤하고 맛있어요! 술에
              대해 잘 몰라서 어떤 걸 사야할 지 고민됐었는데 덕분에 제 취향도
              알게 되어서 좋았어요! 그리고 패키지도 예뻐서 선물용으로도 좋을 것
              같아요. 재구매 의사 100% 입니다! 다음에 또 구매할게요.
            </div>
          </div>
          <div className="ml-[180px] flex gap-3">
            <span className="text-[#666666]">abc*****</span>
            <span className="text-[#666666]">2025.08.15</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailFeedback
