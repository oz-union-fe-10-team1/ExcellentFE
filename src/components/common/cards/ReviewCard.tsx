import type { ReviewCardProps } from '@/types/cardProps'
import maskingUserId from '@/utils/masking'
import HeartButton from '@/components/common/HeartButton.tsx'
import { useState } from 'react'
import StarRating from '@/components/common/StarRating'
import Modal from '@/components/common/Modal'
import Button from '@/components/common/Button'
import { Link } from 'react-router-dom'

const ReviewCard = ({
  id,
  imgSrc,
  imgAlt,
  userId,
  review,
  defaultRating,
  date,
  modalTitle,
}: ReviewCardProps) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div
      className="flex w-[300px] cursor-pointer flex-col"
      onClick={() => {
        if (!isModalOpen) setIsModalOpen(true)
      }}
    >
      <div className="relative mb-5 flex h-[290px] w-full items-center justify-center overflow-hidden rounded-[6px] border border-[#D9D9D9] bg-gray-200">
        <img src={imgSrc} alt={imgAlt} className="h-full w-full object-cover" />
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-2 bottom-2"
        >
          <HeartButton
            isLiked={isLiked}
            onClick={() => setIsLiked((prev) => !prev)}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <StarRating
          readOnly
          size={17}
          showRatingValue={false}
          defaultRating={defaultRating}
        />
        <p className="text-[#666666]">
          {userId ? maskingUserId(userId) : 'Unknown User'}
        </p>
      </div>
      <p className="text-[15px] break-words text-[#666666]"> {review}</p>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      >
        <div>
          <img
            src={imgSrc}
            alt={imgAlt}
            className="mt-14 mb-[34px] h-119 w-150 rounded-[10px] border border-[#333333]"
          />
          <StarRating
            totalStars={5}
            readOnly
            defaultRating={defaultRating}
            size={25}
            showRatingValue={false}
            className="mb-[23px]"
          />
          <p className="mb-15 w-140 text-[22px] text-[#333333]">{review}</p>
          <div className="mb-[101px] flex w-[250px] justify-between text-[22px] text-[#666666]">
            <p> {userId ? maskingUserId(userId) : 'Unknown User'}</p>
            <p>{date ? date.slice(0, 10) : ''}</p>
          </div>
          <Link to={`/product/${id}`}>
            <Button>제품 상세보기</Button>
          </Link>
        </div>
      </Modal>
    </div>
  )
}

export default ReviewCard
