// useNonMemberTasteTest.ts
import {
  useTasteTestResult,
  useTasteTestRetake,
} from '@/hooks/taste-test/useTasteTest'
import { useTasteTestProfile } from '@/hooks/user/useUser'

const useNonMemberTasteTest = () => {
  const { mutate: postResult } = useTasteTestResult()
  const { mutate: putResult } = useTasteTestRetake()
  const { refetch } = useTasteTestProfile() // 자동 호출 안되게

  const run = async (authType?: string) => {
    if (authType !== 'existing_verified') return

    const { data: server } = await refetch() // 프로필 로딩 완료 시점까지 대기
    if (!server) return

    const localTest = localStorage.getItem('selectedAnswers')
    if (!localTest) return

    const parsedTest = JSON.parse(localTest)
    if (server.has_test) {
      putResult(parsedTest)
    } else {
      postResult(parsedTest)
    }

    localStorage.removeItem('selectedAnswers')
  }

  return { run }
}

export default useNonMemberTasteTest
