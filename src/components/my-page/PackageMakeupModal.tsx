import Modal from '@/components/common/Modal'
import Button from '@/components/common/Button'

interface PackageMakeupModalProps {
  isOpen: boolean
  onClose: () => void
  userName: string
}

const PackageMakeupModal = ({
  isOpen,
  onClose,
  userName,
}: PackageMakeupModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${userName}님 취향에 어울리는\n전통주를 추천해드려요`}
    >
      <p className="mt-6 mb-11 text-center text-[#666]">
        깔끔한 단맛과 적당한 도수를 선호하는 당신에게 어울리는
        <br />
        전통주를 골라패키지를 구성해보세요.
      </p>
      <section className="mb-12 h-100 w-full">
        <h2 className="mb-7 border-b-2 pb-4 text-xl font-bold text-[#333]">
          추천 리스트
        </h2>
      </section>
      <section className="mb-25 w-full">
        <h2 className="mb-7 border-b-2 pb-4 text-xl font-bold text-[#333]">
          패키지
        </h2>
      </section>
      <Button>장바구니에 담기</Button>
    </Modal>
  )
}

export default PackageMakeupModal
