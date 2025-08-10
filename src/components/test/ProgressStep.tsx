import TestButton from './TestButton'

const ProgressStep = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="mt-[80px] mb-[127px] text-[#666666]">문항 번호</p>
      <p className="mb-3.5 text-[26px] font-bold">Q문항번호</p>
      <p className="mb-[60px] text-[26px]">문항제목</p>
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
