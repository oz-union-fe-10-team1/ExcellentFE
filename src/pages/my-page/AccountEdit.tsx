import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import Modal from '@/components/common/Modal'
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@/constants/message'
import { ROUTE_PATHS } from '@/constants/routePaths'
import { useDeleteProfile, useUpdateProfile } from '@/hooks/user/useUser'
import { useAuthStore } from '@/stores/authStore'
import type { UserProfile } from '@/types/user'
import { cn } from '@/utils/cn'
import { showError, showSuccess } from '@/utils/feedbackUtils'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AccountEdit = () => {
  const { user } = useAuthStore()
  const { nickname: existingNickname, notification_agreed: existingAgreed } =
    user?.user_info as UserProfile['user_info']
  const [nickname, setNickname] = useState(existingNickname)
  const [isAgreed, setIsAgreed] = useState(existingAgreed)
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] =
    useState(false)
  const { mutate: updateProfile, isSuccess } = useUpdateProfile()
  const { mutate: deleteProfile } = useDeleteProfile()
  const navigate = useNavigate()
  const { logout } = useAuthStore()

  const handleAgreedChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === 'true'
    setIsAgreed(value)
    updateProfile({ notification_agreed: value })
    if (isSuccess) {
      showSuccess(SUCCESS_MESSAGE.UPDATE_NOTIFICATION)
    } else {
      showError(ERROR_MESSAGE.NOTIFICATION)
    }
  }

  const handleNicknameChange = () => {
    if (nickname.length > 15) {
      showError(ERROR_MESSAGE.NICKNAME_LENGTH)
      return
    }
    updateProfile({ nickname })
    if (isSuccess) {
      showSuccess(SUCCESS_MESSAGE.UPDATE_NICKNAME)
    } else {
      showError(ERROR_MESSAGE.NICKNAME_EXIST)
    }
  }

  return (
    <div className="w-320text-[#333333]">
      <h1 className="border-b-2 pb-5 text-2xl font-bold">회원정보 수정</h1>
      <div className="flex flex-col items-center gap-93">
        <ul className="w-full text-lg">
          <li className="flex h-19 items-center gap-4 border-b border-[#E1E1E1] p-5">
            <span className="basis-1/6 font-medium">닉네임</span>
            <Input
              onChange={(e) => setNickname(e.target.value)}
              value={nickname}
              type="text"
              className="h-10 w-70 rounded-sm"
            />
            <Button variant="VARIANT14" onClick={handleNicknameChange}>
              수정
            </Button>
          </li>
          <li className="flex h-19 items-center gap-4 border-b border-[#E1E1E1] p-5">
            <span className="basis-1/6 font-medium">마케팅 알림 설정</span>
            <input
              type="radio"
              id="notification_agreed"
              name="notification"
              value="true"
              checked={isAgreed}
              onChange={handleAgreedChange}
              className={cn('h-5 w-5 cursor-pointer', {
                'appearance-none rounded-full border-4 border-white bg-[#F2544B] outline outline-[#F2544B]':
                  isAgreed,
              })}
            />
            <label htmlFor="notification_agreed" className="mr-12">
              동의
            </label>
            <input
              type="radio"
              id="notification_disagreed"
              name="notification"
              value="false"
              checked={!isAgreed}
              onChange={handleAgreedChange}
              className={cn('h-5 w-5 cursor-pointer', {
                'appearance-none rounded-full border-4 border-white bg-[#F2544B] outline outline-[#F2544B]':
                  !isAgreed,
              })}
            />
            <label htmlFor="notification_disagreed">미동의</label>
          </li>
        </ul>
        <button
          type="button"
          onClick={() => {
            setIsDeleteAccountModalOpen(true)
          }}
        >
          <span className="cursor-pointer text-lg font-medium text-[#666666] underline underline-offset-3">
            회원 탈퇴
          </span>
        </button>
        <Modal
          isOpen={isDeleteAccountModalOpen}
          onClose={() => setIsDeleteAccountModalOpen(false)}
          className="w-160"
        >
          <h2 className="mb-3 text-2xl font-bold">
            모은을 정말로 탈퇴하시겠습니까?
          </h2>
          <p className="mb-10 text-lg text-[#666666]">
            탈퇴 시 모은 회원 정보가 삭제되며, 복구가 불가능합니다.
          </p>
          <Button
            variant="VARIANT1"
            onClick={() => {
              deleteProfile()
            }}
            className="w-125"
          >
            탈퇴하기
          </Button>
        </Modal>
      </div>
    </div>
  )
}

export default AccountEdit
