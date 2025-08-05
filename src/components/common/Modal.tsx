import CloseIcon from '@/assets/icons/modal/close.svg?react'
import Icon from '@/components/common/Icon'
import Portal from '@/components/common/Portal'
import PORTAL_CONTAINER_ID from '@/constants/portalContainerId'
import { useModal } from '@/hooks/useModal'
import { cn } from '@/utils/cn'
import { type ReactNode } from 'react'
import FocusLock from 'react-focus-lock'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  isCloseable?: boolean
  className?: string
}

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  isCloseable = true,
  className,
}: ModalProps) => {
  const { handleOverlayClick, handleClose } = useModal({
    isOpen,
    onClose,
    isCloseable,
  })

  if (!isOpen) return null

  return (
    <Portal containerId={PORTAL_CONTAINER_ID.MODAL}>
      <div
        onClick={handleOverlayClick}
        className="fixed inset-0 z-40 flex items-center justify-center bg-black/25"
      >
        <FocusLock>
          <div
            role="dialog"
            aria-modal="true"
            {...(title && { 'aria-labelledby': 'modal-title' })}
            className={cn(
              'relative z-50 flex w-[690px] flex-col items-center rounded-[20px] bg-white px-[40px] py-[100px]',
              className
            )}
          >
            {title && (
              <h2
                id="modal-title"
                className="text-[32px] font-bold text-[#333]"
              >
                {title}
              </h2>
            )}
            {children}
            {isCloseable && (
              <button
                type="button"
                aria-label="닫기"
                onClick={handleClose}
                className="absolute top-10 right-8"
              >
                <Icon icon={CloseIcon} size={24} />
              </button>
            )}
          </div>
        </FocusLock>
      </div>
    </Portal>
  )
}

export default Modal
