import type { ReviewCardProps } from '@/types/cardProps'
import maskingUserId from '@/utils/masking'
import HeartButton from '@/components/common/HeartButton.tsx'
import { useState } from 'react'
import StarRating from '@/components/common/StarRating'
import Modal from '@/components/common/Modal'
import Button from '@/components/common/Button'
import { Link } from 'react-router-dom'
import defaultImg from '@/assets/images/backgrounds/login.jpg'

const ReviewCard = ({
  product_id,
  product_name,
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
      <div className="relative mb-5 flex h-[290px] w-full items-center justify-center overflow-hidden rounded-[6px] border border-[#D9D9D9]">
        <img
          src={imgSrc || defaultImg}
          alt={imgAlt || '모은 주류'}
          className="h-full w-full object-cover"
        />

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
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full items-center justify-between">
          <p className="font-bold">{product_name}</p>
          <StarRating
            readOnly
            size={17}
            showRatingValue={false}
            defaultRating={defaultRating}
          />
        </div>
        <p className="line-clamp-3 text-[15px] text-[#666666]"> {review}</p>
        <p className="text-[#666666]">
          {userId ? maskingUserId(userId) : 'Unknown User'}
        </p>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        className="review-modal-scroll h-[900px] w-170 overflow-x-hidden overflow-y-auto"
      >
        <div>
          <img
            src={imgSrc || defaultImg}
            alt={imgAlt || '모은 주류'}
            className="mt-14 mb-[34px] h-119 w-150 rounded-[10px] border border-[#333333]"
          />
          <p className="pb-[4px] text-[40px]">{product_name}</p>
          <StarRating
            totalStars={5}
            readOnly
            defaultRating={defaultRating}
            size={25}
            showRatingValue={false}
            className="my-[23px]"
          />
          <p className="mb-15 w-140 text-[22px] text-[#333333]">{review}</p>
          <div className="mb-[101px] flex w-[250px] justify-between text-[22px] text-[#666666]">
            <p> {userId ? maskingUserId(userId) : 'Unknown User'}</p>
            <p>{date ? date.slice(0, 10) : ''}</p>
          </div>
          <Link to={`/product/${String(product_id)}`}>
            <Button>제품 상세보기</Button>
          </Link>
        </div>
      </Modal>
    </div>
  )
}

export default ReviewCard
