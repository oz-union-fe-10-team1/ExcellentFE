import logoTest from '@/assets/logos/logoTest.svg'

import testTestBg from '@/assets/images/tasteTest/testTestBg.png'

// import { useState } from 'react'
// import MainStep from './MainStep'

//분기 처리를 위한 테스트 페이지의 가장 큰 컴포넌트
const TestContainer = () => {
  // const [step, setStep] = useState<'main' | 'question' | 'result'>('main')

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
          className="mb-[100px] w-[560px] rounded-bl-[20px] bg-contain"
          style={{ backgroundImage: `url(${testTestBg})` }}
        >
          {/* 분기처리 */}

          {/* {step === 'main' && <MainStep />} */}
          {/* {step === 'question' && <QuestionStep />}
        {step === 'result' && <ResultStep />} */}
        </div>
      </div>
      {/* 푸터와의 여백용 파트 */}

      <div className="h-[255px]" />
    </div>
  )
}

export default TestContainer
