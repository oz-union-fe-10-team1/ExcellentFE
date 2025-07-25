import CloseIcon from '@/assets/icons/modal/close.svg'
import Portal from '@/components/common/Portal'
import PORTAL_CONTAINER_ID from '@/constants/portalContainerId'
import { cn } from '@/utils/cn'
import { useEffect, type ReactNode } from 'react'
import FocusLock from 'react-focus-lock'

type ModalProps = {
  isOpen: boolean // 모달 열림 여부
  onClose: () => void // 모달 닫기 함수
  title?: string // 모달 제목
  children: ReactNode // 모달 내부 콘텐츠
  className?: string // 모달 스타일 변경
}

const Modal = ({ isOpen, onClose, title, children, className }: ModalProps) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  useEffect(() => {
    // 모달 닫힌 경우: body 스타일 초기화 후 종료
    if (!isOpen) {
      document.body.style.overflow = '' // 스크롤 초기화
      return
    }

    // ESC 키 눌렀을 때 모달 닫기 핸들러
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden' // 모달 열린 경우: 배경 스크롤 숨김
    document.addEventListener('keydown', handleEsc)

    // Cleanup: 이벤트리스너 제거, body 스타일 초기화
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <Portal containerId={PORTAL_CONTAINER_ID.MODAL}>
      <div
        onClick={handleOverlayClick}
        className={cn(
          'fixed inset-0 z-40 flex items-center justify-center bg-black/25'
        )}
      >
        <FocusLock>
          <div
            role="dialog"
            aria-modal="true"
            {...(title && { 'aria-labelledby': 'modal-title' })}
            className={cn(
              'relative z-50 flex w-[690px] flex-col rounded-[20px] bg-white px-[40px] py-[100px]',
              className
            )}
          >
            {title && <h2 id="modal-title">{title}</h2>}
            {children}
            <button
              onClick={onClose}
              className="absolute top-10 right-8 flex h-[20px] w-[20px] cursor-pointer items-center justify-center text-center"
            >
              <img src={CloseIcon} alt="닫기 버튼" />
            </button>
          </div>
        </FocusLock>
      </div>
    </Portal>
  )
}

export default Modal
