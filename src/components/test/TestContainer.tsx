import logoTest from '@/assets/logos/logoTest.svg'

import testTestBg from '@/assets/images/tasteTest/testTestBg.png'
import leftArrow from '@/assets/icons/tasteTest/leftArrow.svg?react'

import { useState } from 'react'
import MainStep from '@/components/test/MainStep.tsx'
import ProgressStep from '@/components/test/ProgressStep.tsx'
import Icon from '@/components/common/Icon'
import ResultStep from '@/components/test/ResultStep.tsx'
import type { TasteTestResult } from '@/types/tasteTypes'

//분기 처리를 위한 테스트 페이지의 가장 큰 컴포넌트
const TestContainer = () => {
  const [step, setStep] = useState<'main' | 'question' | 'result'>('main')

  // 테스트 단계
  const [testStep, setTestStep] = useState(0)

  //테스트 결과 : 진행, 결과 페이지에서 사용
  const [testResult, setTestResult] = useState('')

  return (
    <div className="min-h-screen overflow-y-scroll bg-[#F2F2F2]">
      <div className="mt-[100px] flex flex-col items-center">
        {/* 빨간 박스 */}
        <div className="relative flex h-[70px] w-[560px] items-center justify-center rounded-tl-[20px] rounded-tr-[20px] bg-[#F2544B]">
          {step === 'question' && (
            <Icon
              icon={leftArrow}
              size={30}
              className="absolute left-4 w-[30px]"
              onClick={() => setTestStep((prev) => Math.max(prev - 1, 0))}
            />
          )}
          <img src={logoTest} alt="모은" className="h-[26px] w-[54px]" />
        </div>
        {/* 메인 박스 */}
        <div
          className="mb-[100px] w-[560px] rounded-bl-[20px] bg-contain"
          style={{ backgroundImage: `url(${testTestBg})` }}
        >
          {/* 분기처리 */}

          {step === 'main' && <MainStep step={step} setStep={setStep} />}
          {step === 'question' && (
            <ProgressStep
              step={step}
              setStep={setStep}
              testStep={testStep}
              setTestStep={setTestStep}
              testResult={testResult}
              setTestResult={setTestResult}
            />
          )}
          {step === 'result' && (
            <ResultStep
              step={step}
              setStep={setStep}
              testStep={testStep}
              setTestStep={setTestStep}
              testResult={testResult}
              setTestResult={setTestResult}
            />
          )}
        </div>
      </div>
      {/* 푸터와의 여백용 파트 */}

      <div className="h-[255px]" />
    </div>
  )
}

export default TestContainer
