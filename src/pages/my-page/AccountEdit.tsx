import Button from '@/components/common/Button'
import Modal from '@/components/common/Modal'
import { ROUTE_PATHS } from '@/constants/routePaths'
import { useDeleteProfile, useUpdateProfile } from '@/hooks/user/useUser'
import { useAuthStore } from '@/stores/authStore'
import type { UserProfile } from '@/types/user'
import { cn } from '@/utils/cn'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AccountEdit = () => {
  const { user } = useAuthStore()
  const { nickname: existingNickname, notification_agreed: existingAgreed } =
    user?.user_info as UserProfile['user_info']
  const [nickname, setNickname] = useState(existingNickname)
  const [isAgreed, setIsAgreed] = useState(existingAgreed)
  const [isNicknameModalOpen, setIsNicknameModalOpen] = useState(false)
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] =
    useState(false)
  const { mutate: updateProfile } = useUpdateProfile()
  const { mutate: deleteProfile } = useDeleteProfile()
  const navigate = useNavigate()
  const { logout } = useAuthStore()

  const handleAgreedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === 'true'
    setIsAgreed(value)
    updateProfile({ notification_agreed: value })
  }

  return (
    <div className="w-320text-[#333333]">
      <h1 className="border-b-2 pb-5 text-2xl font-bold">회원정보 수정</h1>
      <div className="flex flex-col items-center gap-93">
        <ul className="w-full text-lg">
          <li className="flex h-19 items-center gap-3 border-b border-[#E1E1E1] p-5">
            <span className="basis-1/6 font-medium">닉네임</span>
            <span>{nickname}</span>
            <Button
              variant="VARIANT14"
              onClick={() => setIsNicknameModalOpen(true)}
            >
              수정
            </Button>
          </li>
          <li className="flex h-19 items-center gap-3 border-b border-[#E1E1E1] p-5">
            <span className="basis-1/6 font-medium">
              마케팅, 알림 수신 여부
            </span>
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
      </div>
      <Modal
        isOpen={isNicknameModalOpen}
        onClose={() => setIsNicknameModalOpen(false)}
      >
        <div>
          <h2>닉네임 수정</h2>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Button
            variant="VARIANT14"
            onClick={() => {
              updateProfile({ nickname })
            }}
          >
            완료
          </Button>
        </div>
      </Modal>
      <Modal
        isOpen={isDeleteAccountModalOpen}
        onClose={() => setIsDeleteAccountModalOpen(false)}
      >
        <div>
          <h2>회원 탈퇴</h2>
          <Button
            variant="VARIANT14"
            onClick={() => {
              deleteProfile()
              logout()
              navigate(ROUTE_PATHS.HOME)
            }}
          >
            탈퇴
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default AccountEdit
