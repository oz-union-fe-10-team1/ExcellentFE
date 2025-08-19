import TestButton from '@/components/test/TestButton.tsx'
import { useEffect, useState } from 'react'
import type { AnswerType, TasteTestResult, TestType } from '@/types/tasteTypes'

import { useAuthStore } from '@/stores/authStore'
import {
  useTasteTestProfile,
  useTasteTestQuestion,
  useTasteTestResult,
  useTasteTestRetake,
} from '@/hooks/taste-test/useTasteTest'

export interface ProgressStepProps {
  step: TestType
  setStep: React.Dispatch<React.SetStateAction<TestType>>
  testStep: number
  setTestStep: React.Dispatch<React.SetStateAction<number>>
  testResult: TasteTestResult | undefined
  setTestResult: React.Dispatch<
    React.SetStateAction<TasteTestResult | undefined>
  >
}

const ProgressStep = ({
  setStep,
  testStep,
  setTestStep,
  testResult,
  setTestResult,
}: ProgressStepProps) => {
  // 회원 / 비회원 분기 처리를 위한 로그인 정보 꺼내오기
  const { isLoggedIn } = useAuthStore()

  //테스트 문항
  const { data, isLoading, isError } = useTasteTestQuestion()

  // 점수 계산
  const [answers, setAnswers] = useState<{ [key: string]: 'A' | 'B' }>({})

  //점수 계산 함수
  const handlerAnswer = (option: 'A' | 'B') => {
    setAnswers((prev) => ({
      ...prev,
      [`Q${testStep + 1}`]: option,
    }))
  }

  //로컬 저장 함수 (유틸로 분리하기)
  const saveResultToLocal = (resultData: AnswerType) => {
    try {
      localStorage.setItem('selectedAnswers', JSON.stringify(resultData))
      console.log('로컬 저장 성공')
    } catch (error) {
      console.error('로컬 저장에 실패 했습니다. :', error)
    }
  }
  //서버에 유저 정보 확인용
  const { data: server } = useTasteTestProfile()

  //결과 보내는 함수 및 응답 (Post로 첫 응시)
  const { mutate: postResult } = useTasteTestResult()

  //결과 보내는 함수 및 응답 (Put으로 재 응시)

  const { mutate: putResult } = useTasteTestRetake()

  //결과 보내고 응답 받아오기
  const handleResult = () => {
    if (isLoggedIn) {
      //로그인 true라면 서버에 put 또는 post로 보내기 및 결과 저장 후 이동
      if (server) {
        //서버에 기록까지 있다면, put으로 업데이트
        putResult(answers, {
          onSuccess: (res) => {
            setTestResult(res)
            setStep('result')
          },
        })
      } else {
        //첫 응시는 post
        postResult(answers, {
          onSuccess: (res) => {
            setTestResult(res)
            setStep('result')
          },
        })
      }
      setStep('result')
    } else {
      // 로컬 저장 (결과 확인을 위해 계산용으로 api 호출)
      postResult(answers, {
        onSuccess: (res) => {
          saveResultToLocal(answers)
          setTestResult(res)
          setStep('result')
        },
      })
    }
  }

  //클릭에 따른 버튼 색 변경을 위한 상태
  const [isClicked, setIsClicked] = useState<'A' | 'B' | null>(null)

  //스텝 바뀔 때 클릭 상태 초기화
  useEffect(() => {
    setIsClicked(null)
  }, [testStep])

  if (isLoading) {
    return <div>로딩 중...</div>
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>
  }

  return (
    <div className="flex w-full flex-col items-center">
      {data?.map((question, index) => {
        if (index !== testStep) return null
        const buttons = [
          {
            condition: index === 0,
            text: '처음으로 돌아가기',
            onclick: () => setStep('main'),
          },
          {
            condition: index > 0 && index < data.length - 1,
            text: '이전으로 돌아가기',
            onclick: () => setTestStep(testStep - 1),
          },
          {
            condition: index === data.length - 1,
            text: '결과 확인 하기',
            onclick: handleResult,
          },
        ]
        return (
          <div key={question?.id} className="flex w-full flex-col items-center">
            <p className="mt-[80px] mb-[127px] text-[#666666]">
              {index + 1} / {data.length}
            </p>
            <p className="mb-3.5 text-[26px] font-bold">{question?.id}.</p>
            <p className="mb-[60px] text-[26px]">{question?.question}</p>
            <TestButton
              className={
                isClicked === 'A'
                  ? 'mb-[14px] border border-[#F2544B] bg-[#F2544B] text-[#FFFFFF]'
                  : 'mb-[14px] border border-[#F2544B] bg-[#FFFFFF] text-[#F2544B]'
              }
              onClick={() => {
                handlerAnswer('A')
                setIsClicked('A')
                setTimeout(() => {
                  if (testStep < data.length - 1) {
                    setTestStep(testStep + 1)
                  }
                }, 100)
              }}
            >
              A. {question?.options?.A}
            </TestButton>
            <TestButton
              className={
                isClicked === 'B'
                  ? 'mb-[168px] border border-[#F2544B] bg-[#F2544B] text-[#FFFFFF]'
                  : 'mb-[168px] border border-[#F2544B] bg-[#FFFFFF] text-[#F2544B]'
              }
              onClick={() => {
                handlerAnswer('B')
                setIsClicked('B')
                setTimeout(() => {
                  if (testStep < data.length - 1) {
                    setTestStep(testStep + 1)
                  }
                }, 100)
              }}
            >
              B. {question?.options?.B}
            </TestButton>

            {buttons.map(
              (btn, index) =>
                btn.condition && (
                  <TestButton
                    key={index}
                    className={`mb-[57px] text-[#FFFFFF] ${
                      btn.text === '결과 확인 하기' && !isClicked
                        ? 'cursor-not-allowed'
                        : 'bg-[#2E2F2F]'
                    }`}
                    onClick={btn.onclick}
                    disabled={btn.text === '결과 확인 하기' && !isClicked}
                  >
                    {btn.text}
                  </TestButton>
                )
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ProgressStep
