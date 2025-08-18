import { http, HttpResponse } from 'msw'
import { tasteTestProfileMockData } from '@/mocks/handlers/tastetest/mocks/tasteTestProfileMockData'
import { tokenStorage } from '@/utils/tokenStorage'
import testQuestion from './mocks/testQuestion'

const tasteTestHandlers = [
  // 프로필 조회
  // http.get('/taste-test/profile', ({ request }) => {
  //   const authHeader = request.headers.get('Authorization')

  //   if (!authHeader) {
  //     return HttpResponse.json(
  //       {
  //         error: '인증이 필요합니다.',
  //         detail: '유효한 access token을 제공해주세요.',
  //       },
  //       { status: 401 }
  //     )
  //   }

  //   if (authHeader.replace('Bearer ', '') !== tokenStorage.getAccessToken()) {
  //     return HttpResponse.json(
  //       {
  //         error: '사용자 프로필을 찾을 수 없습니다.',
  //         detail: '프로필이 생성되지 않았거나 삭제되었습니다.',
  //       },
  //       { status: 404 }
  //     )
  //   }

  //   return HttpResponse.json(tasteTestProfileMockData)
  // }),

  // 테스트 질문 조회
  http.get('/api/v1/taste-test/questions', () => {
    return HttpResponse.json(testQuestion)
  }),

  // 추후 POST 핸들러도 추가 가능
]

export default tasteTestHandlers
