import Button from '@/components/common/Button'
import { ADULT_VERIFICATION_URL } from '@/constants/socialLoginUrl'

const AdultAuthBefore = () => {
  return (
    <div>
      <p>주류 구매를 시작하기 위해 최초 1회 성인 인증이 필요합니다</p>
      <Button
        variant="VARIANT11"
        onClick={() => {
          window.location.replace(ADULT_VERIFICATION_URL)
        }}
      >
        성인인증하러 가기
      </Button>
    </div>
  )
}

export default AdultAuthBefore
