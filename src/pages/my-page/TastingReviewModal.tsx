import Button from '@/components/common/Button'
import Modal from '@/components/common/Modal'
import Slider from '@/components/common/Slider'
import StarRating from '@/components/common/StarRating'
import {
  TASTE_TAGS,
  MAX_SELECTED_TAGS,
  TASTE_SLIDERS,
} from '@/constants/feedbackReview'
import { useTastingReview } from '@/hooks/useTastingReview'
import clsx from 'clsx'
import { Plus } from 'lucide-react'

const TastingReviewModal = ({ name }: { name: string }) => {
  const {
    review,
    comment,
    selectedTags,
    isOpen,
    updateReview,
    handleFileChange,
    handleToggleTag,
    setComment,
    openModal,
    closeModal,
    handleSubmit,
  } = useTastingReview()

  return (
    <>
      <button onClick={openModal}>모달 열기</button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="시음 후기 작성"
        isCloseable
        className="h-[900px] w-170 overflow-y-auto"
      >
        <div className="mt-5 flex flex-col items-center justify-center text-lg text-[#666666]">
          <p>제품이 {name}님의 취향에 맞으셨나요?</p>
          <p>
            시음 후기 작성을 통해 더 적합한 전통주를 추천받고, 나만의 시음
            후기를 통해
          </p>
          <p>나의 맛의 지문 정확도를 높여보세요!</p>
        </div>
        <div className="w-full">
          <p className="border-b-2 pb-3 text-xl font-bold text-[#333333]">
            시음 평가
          </p>
          <div className="mt-7 flex flex-col items-center gap-7">
            {TASTE_SLIDERS.map((slider) => (
              <Slider
                key={slider.key}
                label={slider.label}
                variant={slider.variant}
                value={[review[slider.key]]}
                onValueChange={(vals) => updateReview(slider.key, vals[0] ?? 0)}
              />
            ))}
          </div>
          <div className="mt-12 flex h-43 w-full flex-col justify-center gap-7 bg-[#f2f2f2]">
            <p className="text-center text-xl font-bold text-[#333333]">
              오늘 내 입맛 신뢰도는 몇 %인가요?
            </p>
            <Slider
              variant="trust"
              max={100}
              value={[review.confidence]}
              onValueChange={(vals) => updateReview('confidence', vals[0] ?? 0)}
            />
          </div>
          <div className="mt-12 flex w-full flex-col items-center">
            <p className="text-lg font-bold text-[#333333]">전체 평점</p>
            <StarRating
              size={51}
              showRatingValue={false}
              className="mt-5"
              rating={review.rating}
              onChange={(value) => updateReview('rating', value)}
            />
          </div>
          <div className="mt-12 flex flex-wrap gap-2">
            {TASTE_TAGS.map((tag) => {
              const isSelected = selectedTags.includes(tag.value)
              return (
                <button
                  key={tag.value}
                  type="button"
                  onClick={() => handleToggleTag(tag.value)}
                  className={clsx(
                    'h-6 w-13 rounded-[3px] border text-[11px] transition',
                    isSelected
                      ? 'border-[#f2544b] bg-[#f2544b] text-white'
                      : 'border-[#f2544b] text-[#f2544b] hover:bg-[#fff1f0]'
                  )}
                >
                  {tag.label}
                </button>
              )
            })}
          </div>
          <p className="mt-1 text-xs text-[#888]">
            최대 {MAX_SELECTED_TAGS}개 선택 ({selectedTags.length}/
            {MAX_SELECTED_TAGS})
          </p>

          <div className="mt-12">
            <p className="border-b-2 pb-3 text-xl font-bold text-[#333333]">
              시음 사진 등록하기 <span className="font-normal">(선택)</span>
            </p>
            <div>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="file-upload"
                className="mt-7 ml-5 flex h-[150px] w-[150px] cursor-pointer items-center justify-center rounded-[10px] bg-[#f2f2f2] transition hover:bg-[#e0e0e0]"
              >
                <Plus size={24} className="text-[#333]" />
              </label>
            </div>
          </div>
          <div className="mt-12">
            <p className="border-b-2 pb-3 text-xl font-bold text-[#333333]">
              시음 한 줄 평 <span className="font-normal">(선택)</span>
            </p>
            <div className="flex items-center justify-center">
              <textarea
                placeholder="시음 한 줄 평을 작성해 주세요."
                rows={2}
                maxLength={100}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="mt-8 h-25 w-140 resize-none rounded-[6px] border border-[#d9d9d9] px-4 py-3 text-lg text-[#333333] placeholder-[#666666] outline-none"
              />
            </div>
          </div>
          <Button variant="VARIANT1" onClick={handleSubmit} className="mt-15">
            소중한 시음 후기 등록하고 적립금 받기
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default TastingReviewModal
