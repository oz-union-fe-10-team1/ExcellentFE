import useTasteTest from '@/hooks/useTasteTest'
import TestButton from '@/components/test/TestButton.tsx'
import { useState } from 'react'
import type { TestType } from '@/types/tasteTypes'

interface ProgressStepProps {
  step: TestType
  setStep: React.Dispatch<React.SetStateAction<TestType>>
}

const ProgressStep = ({ step, setStep }: ProgressStepProps) => {
  const { data, isLoading, isError } = useTasteTest()

  // 테스트 단계
  const [first, setFirst] = useState(true)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  const [fourth, setFourth] = useState(false)
  const [fifth, setFifth] = useState(false)
  const [sixth, setSixth] = useState(false)

  // 점수 계산
  const [firstAnswer, setFirstAnswer] = useState('')
  const [secondAnswer, setSecondAnswer] = useState('')
  const [thirdAnswer, setThirdAnswer] = useState('')
  const [fourthAnswer, setFourthAnswer] = useState('')
  const [fifthAnswer, setFifthAnswer] = useState('')
  const [sixthAnswer, setSixthAnswer] = useState('')

  //빌드오류 해결 위해 우선 값 사용
  console.log(
    firstAnswer,
    secondAnswer,
    thirdAnswer,
    fourthAnswer,
    fifthAnswer,
    sixthAnswer,
    step
  )
  if (isLoading) {
    return <div>로딩 중...</div>
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>
  }

  return (
    <div className="flex flex-col items-center">
      {first && (
        <>
          <p className="mt-[80px] mb-[127px] text-[#666666]">1 / 6</p>
          <p className="mb-3.5 text-[26px] font-bold">{data?.[0]?.id}.</p>
          <p className="mb-[60px] text-[26px]">{data?.[0]?.question}</p>
          <TestButton
            className="mb-3.5 border border-[#F2544B] bg-[#FFFFFF] text-[#F2544B]"
            onClick={() => {
              setFirstAnswer('A')
              setSecond(true)
              setFirst(false)
            }}
          >
            A. {data?.[0]?.options?.A}
          </TestButton>
          <TestButton
            className="mb-[168px] border border-[#F2544B] bg-[#FFFFFF] text-[#F2544B]"
            onClick={() => {
              setFirstAnswer('B')
              setSecond(true)
              setFirst(false)
            }}
          >
            B. {data?.[0]?.options?.B}
          </TestButton>
          <TestButton
            className="mb-[57px] bg-[#2E2F2F] text-[#FFFFFF]"
            onClick={() => setStep('main')}
          >
            처음으로 돌아가기
          </TestButton>
        </>
      )}

      {second && (
        <>
          <p className="mt-[80px] mb-[127px] text-[#666666]">2 / 6</p>
          <p className="mb-3.5 text-[26px] font-bold">{data?.[1]?.id}.</p>
          <p className="mb-[60px] text-[26px]">{data?.[1]?.question}</p>
          <TestButton
            className="mb-3.5 border border-[#F2544B] bg-[#FFFFFF] text-[#F2544B]"
            onClick={() => {
              setSecondAnswer('A')
              setThird(true)
              setSecond(false)
            }}
          >
            A. {data?.[1]?.options?.A}
          </TestButton>
          <TestButton
            className="mb-[168px] border border-[#F2544B] bg-[#FFFFFF] text-[#F2544B]"
            onClick={() => {
              setSecondAnswer('B')
              setThird(true)
              setSecond(false)
            }}
          >
            B. {data?.[1]?.options?.B}
          </TestButton>
          <TestButton
            className="mb-[57px] bg-[#2E2F2F] text-[#FFFFFF]"
            onClick={() => setFirst(true)}
          >
            이전 문항으로 돌아가기
          </TestButton>
        </>
      )}

      {third && (
        <>
          <p className="mt-[80px] mb-[127px] text-[#666666]">3 / 6</p>
          <p className="mb-3.5 text-[26px] font-bold">{data?.[2]?.id}.</p>
          <p className="mb-[60px] text-[26px]">{data?.[2]?.question}</p>
          <TestButton
            className="mb-3.5 border border-[#F2544B] bg-[#FFFFFF] text-[#F2544B]"
            onClick={() => {
              setThirdAnswer('A')
              setFourth(true)
              setThird(false)
            }}
          >
            A. {data?.[2]?.options?.A}
          </TestButton>
          <TestButton
            className="mb-[168px] border border-[#F2544B] bg-[#FFFFFF] text-[#F2544B]"
            onClick={() => {
              setThirdAnswer('B')
              setFourth(true)
              setThird(false)
            }}
          >
            B. {data?.[2]?.options?.B}
          </TestButton>
          <TestButton
            className="mb-[57px] bg-[#2E2F2F] text-[#FFFFFF]"
            onClick={() => setSecond(true)}
          >
            이전 문항으로 돌아가기
          </TestButton>
        </>
      )}

      {fourth && (
        <>
          <p className="mt-[80px] mb-[127px] text-[#666666]">4 / 6</p>
          <p className="mb-3.5 text-[26px] font-bold">{data?.[3]?.id}.</p>
          <p className="mb-[60px] text-[26px]">{data?.[3]?.question}</p>
          <TestButton
            className="mb-3.5 border border-[#F2544B] bg-[#FFFFFF] text-[#F2544B]"
            onClick={() => {
              setFourthAnswer('A')
              setFifth(true)
              setFourth(false)
            }}
          >
            A. {data?.[3]?.options?.A}
          </TestButton>
          <TestButton
            className="mb-[168px] border border-[#F2544B] bg-[#FFFFFF] text-[#F2544B]"
            onClick={() => {
              setFourthAnswer('B')
              setFifth(true)
              setFourth(false)
            }}
          >
            B. {data?.[3]?.options?.B}
          </TestButton>
          <TestButton
            className="mb-[57px] bg-[#2E2F2F] text-[#FFFFFF]"
            onClick={() => setThird(true)}
          >
            이전 문항으로 돌아가기
          </TestButton>
        </>
      )}

      {fifth && (
        <>
          <p className="mt-[80px] mb-[127px] text-[#666666]">5 / 6</p>
          <p className="mb-3.5 text-[26px] font-bold">{data?.[4]?.id}.</p>
          <p className="mb-[60px] text-[26px]">{data?.[4]?.question}</p>
          <TestButton
            className="mb-3.5 border border-[#F2544B] bg-[#FFFFFF] text-[#F2544B]"
            onClick={() => {
              setFifthAnswer('A')
              setSixth(true)
              setFifth(false)
            }}
          >
            A. {data?.[4]?.options?.A}
          </TestButton>
          <TestButton
            className="mb-[168px] border border-[#F2544B] bg-[#FFFFFF] text-[#F2544B]"
            onClick={() => {
              setFifthAnswer('B')
              setSixth(true)
              setFifth(false)
            }}
          >
            B. {data?.[4]?.options?.B}
          </TestButton>
          <TestButton
            className="mb-[57px] bg-[#2E2F2F] text-[#FFFFFF]"
            onClick={() => setFourth(true)}
          >
            이전 문항으로 돌아가기
          </TestButton>
        </>
      )}

      {sixth && (
        <>
          <p className="mt-[80px] mb-[127px] text-[#666666]">6 / 6</p>
          <p className="mb-3.5 text-[26px] font-bold">{data?.[5]?.id}.</p>
          <p className="mb-[60px] text-[26px]">{data?.[5]?.question}</p>
          <TestButton
            className="mb-3.5 border border-[#F2544B] bg-[#FFFFFF] text-[#F2544B]"
            onClick={() => {
              setSixthAnswer('A')
            }}
          >
            A. {data?.[5]?.options?.A}
          </TestButton>
          <TestButton
            className="mb-[168px] border border-[#F2544B] bg-[#FFFFFF] text-[#F2544B]"
            onClick={() => {
              setSixthAnswer('B')
            }}
          >
            B. {data?.[5]?.options?.B}
          </TestButton>
          <TestButton
            className="mb-[57px] bg-[#2E2F2F] text-[#FFFFFF]"
            onClick={() => setStep('result')}
          >
            결과확인 하기
          </TestButton>
        </>
      )}
    </div>
  )
}

export default ProgressStep
