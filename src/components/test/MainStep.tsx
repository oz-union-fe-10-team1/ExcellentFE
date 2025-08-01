import testMain from '@/assets/images/tasteTest/testMain.png'
import arrowUp from '@/assets/icons/tasteTest/arrowUp.svg'

//테스트 시작의 메인 단계
const MainStep = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="mt-[80px] mb-[10px] text-[40px] font-bold text-[#333333]">
        내 입맛에 맞는 전통주는?
      </p>
      <p className="text-lg text-[#666666]">나는 어떤 입맛일까?</p>
      <p className="mb-[50px] text-lg text-[#666666]">
        테스트 후 나만의 전통주를 찾아보세요!
      </p>
      <img
        src={testMain}
        alt="모은 테스트 메인"
        className="mb-[50px] h-[340px] w-[380px]"
      />
      <button className="mb-[57px] h-[59px] w-[460px] rounded-[60px] bg-[#2E2F2F] text-[#FFFFFF]">
        테스트 시작하기
      </button>
      {/* 공유하기 파트 */}
      <div className="mb-[88px] flex">
        <img src={arrowUp} alt="공유하기" className="mr-5 h-[20px] w-[18px]" />
        <p>공유하기</p>
      </div>
    </div>
  )
}

export default MainStep
