// src/types/kakao.d.ts

interface KakaoShareOptions {
  objectType: 'feed' | 'list' | 'location' | 'commerce' | 'text' | 'link'
  content?: {
    title: string
    description: string
    imageUrl: string
    link: {
      mobileWebUrl: string
      webUrl: string
    }
  }
  buttons?: Array<{
    title: string
    link: {
      mobileWebUrl: string
      webUrl: string
    }
  }>
}

interface KakaoSDK {
  init(appKey: string): void
  isInitialized(): boolean
  Share: {
    sendDefault(options: KakaoShareOptions): void
  }
}

interface Window {
  Kakao: KakaoSDK
}

declare let Kakao: KakaoSDK
