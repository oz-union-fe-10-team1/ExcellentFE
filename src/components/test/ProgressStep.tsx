import useTasteTest from '@/hooks/useTasteTest'
import TestButton from './TestButton'
import { useState } from 'react'

const ProgressStep = () => {
  const { data, isLoading, isError } = useTasteTest()
  // const [testNum, setTestNum] = useState(1)

  //테스트 단계
  const [first, setFirst] = useState(true)

  return (
    <div className="flex flex-col items-center">
      {first && (
        <>
          <p className="mt-[80px] mb-[127px] text-[#666666]">
            {data?.questions[0].id}/ 6
          </p>
          <p className="mb-3.5 text-[26px] font-bold">
            Q{data.questions[0].id}.
          </p>
          <p className="mb-[60px] text-[26px]">
            {data?.questions[0].question_text}
          </p>
        </>
      )}

      <TestButton className="mb-3.5 border border-[#F2544B] bg-[#FFFFFF] text-[#F2544B]">
        문항 답변A
      </TestButton>
      <TestButton className="mb-[168px] border border-[#F2544B] bg-[#FFFFFF] text-[#F2544B]">
        문항 답변B
      </TestButton>
      <TestButton className="mb-[57px] bg-[#2E2F2F] text-[#FFFFFF]">
        이전 문항으로 돌아가기
      </TestButton>
    </div>
  )
}

export default ProgressStep
