import maskingUserId from '@/utils/masking'
import StarRating from '@/components/common/StarRating'
import Button from '@/components/common/Button'
import { useState } from 'react'
import Modal from '@/components/common/Modal'
import { Link } from 'react-router-dom'
import defaultImg from '@/assets/images/backgrounds/login.jpg'
import type { BestReviewCardProps } from '@/types/cardProps'

const BestReviewCard = ({
  product_name,
  product_id,
  imgSrc,
  imgAlt,
  review,
  userId,
  date,
  defaultRating,
}: BestReviewCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="flex h-123 w-317 items-center justify-center gap-19">
      <img
        src={imgSrc || defaultImg}
        alt={imgAlt || '모은 주류'}
        className="h-123 w-155"
      />
      <div className="flex h-[439px] w-[570px] flex-col">
        <div className="mb-[10px] flex items-center justify-between">
          <p className="pb-[4px] text-[40px]">{product_name}</p>
          <StarRating
            totalStars={5}
            readOnly
            defaultRating={defaultRating}
            size={25}
            showRatingValue={false}
          />
        </div>
        <p className="h-[165px] w-140 text-[22px] text-[#333333]">{review}</p>
        <div className="mt-15 mb-[50px] flex w-[281px] justify-between text-[22px] text-[#666666]">
          <p> {userId ? maskingUserId(userId) : 'Unknown User'}</p>
          <p>{date ? date.slice(0, 10) : ''}</p>
        </div>
        <Button onClick={openModal} className="w-[570px]">
          이 전통주가 궁금하다면?
        </Button>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="한 잔 취향 이 달의 후기"
          className="review-modal-scroll h-[1000px] w-170 overflow-auto"
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
    </div>
  )
}

export default BestReviewCard
