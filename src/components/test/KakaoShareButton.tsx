// src/components/KakaoShareButton.tsx

import { useEffect } from 'react'

const KAKAO_APP_KEY = import.meta.env.VITE_KAKAO_APP_KEY

const KakaoShareButton = () => {
  useEffect(() => {
    // 컴포넌트가 마운트될 때 SDK 초기화
    if (window.Kakao) {
      const kakao = window.Kakao
      if (!kakao.isInitialized()) {
        kakao.init(KAKAO_APP_KEY)
      }
    }
  }, [])

  const shareKakao = () => {
    // 공유하기 버튼 클릭 시 실행될 함수
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '우리 사이트',
          description: '#멋진 #사이트 #구경하세요',
          imageUrl: 'https://example.com/image.jpg', // 공유할 이미지 URL
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '웹으로 이동',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      })
    }
  }

  return <button onClick={shareKakao}>카카오톡 공유하기</button>
}

export default KakaoShareButton
