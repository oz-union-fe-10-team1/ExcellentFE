//비회원이 로그인 된 뒤 로컬에서 저장된 값 꺼내오는 함수

import {
  useTasteTestResult,
  useTasteTestRetake,
} from '@/hooks/taste-test/useTasteTest'
import { useTasteTestProfile } from '@/hooks/user/useUser'

const useNonMemberTasteTest = () => {
  const { data: server } = useTasteTestProfile()

  const { mutate: postResult } = useTasteTestResult()
  const { mutate: putResult } = useTasteTestRetake()
  const run = (authType?: string) => {
    if (authType !== 'existing_verified') return

    const localTest = localStorage.getItem('selectedAnswers')
    if (!localTest) return

    const parsedTest = JSON.parse(localTest)

    if (server && server.has_test) {
      putResult(parsedTest)
    } else {
      postResult(parsedTest)
    }

    localStorage.removeItem('selectedAnswers')
  }

  return { run }
}

export default useNonMemberTasteTest
