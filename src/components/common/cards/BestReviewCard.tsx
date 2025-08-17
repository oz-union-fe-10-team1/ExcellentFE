import maskingUserId from '@/utils/masking'
import StarRating from '../StarRating'
import Button from '../Button'
import { useState } from 'react'
import Modal from '@/components/common/Modal'

interface BestReviewCardProps {
  imgSrc: string
  imgAlt: string
  review: string
  userId: string
  defaultRating: number
  date: string
}

const BestReviewCard = ({
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
    <div className="flex h-123 w-316 items-center justify-center gap-19">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="h-123 w-155 border border-[#333333]"
      />
      <div className="flex h-[439px] w-[570px] flex-col">
        <StarRating
          totalStars={5}
          readOnly
          defaultRating={defaultRating}
          size={25}
          showRatingValue={false}
          className="mb-[23px]"
        />
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
            <Button>제품 상세보기</Button>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default BestReviewCard
