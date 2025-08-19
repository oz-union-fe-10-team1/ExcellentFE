import Button from '@/components/common/Button'
import Modal from '@/components/common/Modal'
import ReviewSummaryForm from '@/components/common/review-modal/ReviewSummaryForm'
import useTastingReview from '@/hooks/order/useTastingReview'
import ReviewSlider from '@/components/common/review-modal/ReviewSlider'
import ReviewStarTag from '@/components/common/review-modal/ReviewStarTag'

interface TastingReviewModalProps {
  name: string
  isOpen: boolean
  onClose: () => void
  orderItemId?: number
}

const TastingReviewModal = ({
  name,
  isOpen,
  onClose,
  orderItemId,
}: TastingReviewModalProps) => {
  const {
    review,
    updateReview,
    selectedTags,
    handleToggleTag,
    comment,
    setComment,
    handleFileChange,
    imagePreviews,
    handleSubmitAndClose,
  } = useTastingReview(orderItemId, onClose)

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="시음 후기 작성"
      isCloseable
      className="review-modal-scroll h-[900px] w-170 overflow-auto"
    >
      <div className="mt-5 flex flex-col items-center justify-center text-lg text-[#666666]">
        <p>제품이 {name}님의 취향에 맞으셨나요?</p>
        <p>
          시음 후기 작성을 통해 더 적합한 전통주를 추천받고, 나만의 시음 후기를
          통해
        </p>
        <p>나의 맛의 지문 정확도를 높여보세요!</p>
      </div>
      <div className="w-full">
        <ReviewSlider review={review} updateReview={updateReview} />
        <ReviewStarTag
          review={review}
          updateReview={updateReview}
          selectedTags={selectedTags}
          handleToggleTag={handleToggleTag}
        />
        <ReviewSummaryForm
          comment={comment}
          setComment={setComment}
          handleFileChange={handleFileChange}
          imagePreviews={imagePreviews}
        />
        <Button
          variant="VARIANT1"
          onClick={handleSubmitAndClose}
          className="mt-15"
        >
          소중한 시음 후기 등록하고 적립금 받기
        </Button>
      </div>
    </Modal>
  )
}

export default TastingReviewModal
