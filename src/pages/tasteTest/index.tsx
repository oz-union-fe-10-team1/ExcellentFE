import logoTest from '@/assets/logos/logoTest.svg'

import testMain from '@/assets/images/tasteTest/testMain.png'
import arrowUp from '@/assets/icons/tasteTest/arrowUp.svg'
import testTestBg from '@/assets/images/tasteTest/testTestBg.png'

const TestMain = () => {
  return (
    <div className="min-h-screen overflow-y-scroll bg-[#F2F2F2]">
      <div className="mt-[100px] flex flex-col items-center">
        {/* 빨간 박스 */}
        <div className="relative flex h-[70px] w-[560px] items-center justify-center rounded-tl-[20px] rounded-tr-[20px] bg-[#F2544B]">
          {/* <img
            src={leftArrow}
            alt="뒤로가기"
            className="absolute left-4 w-[30px]"
          /> */}
          <img src={logoTest} alt="모은" className="h-[26px] w-[54px]" />
        </div>
        {/* 메인 박스 */}
        <div
          className="mb-[100px] flex w-[560px] flex-col items-center rounded-bl-[20px] bg-contain"
          style={{ backgroundImage: `url(${testTestBg})` }}
        >
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
            <img
              src={arrowUp}
              alt="공유하기"
              className="mr-5 h-[20px] w-[18px]"
            />
            <p>공유하기</p>
          </div>
        </div>
      </div>
      {/* 푸터와의 여백용 파트 */}

      <div className="h-[255px]" />
    </div>
  )
}

export default TestMain
