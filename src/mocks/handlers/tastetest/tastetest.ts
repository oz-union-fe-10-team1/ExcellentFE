import { http, HttpResponse } from 'msw'
import { tasteTestProfileMockData } from '@/mocks/handlers/tastetest/mocks/tasteTestProfileMockData'
import { tokenStorage } from '@/utils/tokenStorage'

const tasteTestHandlers = [
  http.get('/taste-test/profile', ({ request }) => {
    const authHeader = request.headers.get('Authorization')
    if (!authHeader) {
      return HttpResponse.json(
        {
          error: '인증이 필요합니다.',
          detail: '유효한 access token을 제공해주세요.',
        },
        { status: 401 }
      )
    }

    if (authHeader.replace('Bearer ', '') !== tokenStorage.getAccessToken()) {
      return HttpResponse.json(
        {
          error: '사용자 프로필을 찾을 수 없습니다.',
          detail: '프로필이 생성되지 않았거나 삭제되었습니다.',
        },
        { status: 404 }
      )
    }

    return HttpResponse.json(tasteTestProfileMockData)
  }),
]

export default tasteTestHandlers
