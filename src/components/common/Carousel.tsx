import { useState, useEffect } from 'react'
import Card from '@/components/common/cards/CardBase.tsx'
import Icon from '@/components/common/Icon'
import ArrowLeftIcon from '@/assets/icons/carousel/arrow_left.svg?react'
import ArrowRightIcon from '@/assets/icons/carousel/arrow_right.svg?react'
import type { BestReviewCardProps, CardBaseProps } from '@/types/cardProps'

interface CarouselProps {
  cards: CardBaseProps[] | BestReviewCardProps[]
  slidesToShow?: number // 한번에 보여줄 카드 수 (기본 4개)
  gap?: string // 카드 간의 간격 (기본 '27px')
  className?: string
  containerClassName?: string
  responsive?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  renderCard?: (
    item: BestReviewCardProps | CardBaseProps
  ) => React.ReactElement | null
}

const Carousel = ({
  cards,
  slidesToShow = 4,
  gap = '27px',
  className = '',
  containerClassName = '',
  responsive,
  renderCard,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentSlidesToShow, setCurrentSlidesToShow] = useState(slidesToShow)

  // 반응형 처리
  useEffect(() => {
    if (!responsive) return

    const handleResize = () => {
      const width = window.innerWidth

      if (width < 768 && responsive.mobile) {
        setCurrentSlidesToShow(responsive.mobile)
      } else if (width < 1024 && responsive.tablet) {
        setCurrentSlidesToShow(responsive.tablet)
      } else if (responsive.desktop) {
        setCurrentSlidesToShow(responsive.desktop)
      } else {
        setCurrentSlidesToShow(slidesToShow)
      }
    }

    handleResize() // 초기 실행
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [responsive, slidesToShow])

  // 전체 슬라이드 그룹 수 계산
  const totalSlides = Math.ceil(cards.length / currentSlidesToShow)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  // 슬라이드가 1개 이하면 화살표 숨김
  const showArrows = totalSlides > 1

  return (
    <div className={`relative w-full px-20 ${className}`}>
      {/* 왼쪽 화살표 */}
      {showArrows && (
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 z-10 flex -translate-y-1/2 items-center justify-center transition-all duration-200 hover:scale-105"
          aria-label="이전 슬라이드"
        >
          <Icon icon={ArrowLeftIcon} size={40} color="#000" />
        </button>
      )}

      {/* 슬라이더 컨테이너 - CardList 스타일과 일치 */}
      <div
        className={`mx-auto w-full max-w-[1281px] overflow-hidden ${containerClassName}`}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {/* 각 슬라이드 그룹 */}
          {Array.from({ length: totalSlides }, (_, slideIndex) => {
            const startIndex = slideIndex * currentSlidesToShow
            const endIndex = Math.min(
              startIndex + currentSlidesToShow,
              cards.length
            )
            const slideCards = cards.slice(startIndex, endIndex)

            return (
              <div
                key={slideIndex}
                className={`grid w-full shrink-0 grid-cols-${currentSlidesToShow}`}
                style={{
                  gap: gap,
                  width: '100%', // 명시적으로 100% 너비 설정
                }}
              >
                {slideCards.map((item, cardIndex) => (
                  <div key={`${slideIndex}-${cardIndex}`}>
                    {renderCard ? (
                      renderCard(item)
                    ) : (
                      <Card {...(item as CardBaseProps)} />
                    )}
                  </div>
                ))}
                {/* 빈 공간을 채우기 위한 더미 div들 */}
                {Array.from(
                  { length: currentSlidesToShow - slideCards.length },
                  (_, emptyIndex) => (
                    <div key={`empty-${slideIndex}-${emptyIndex}`} />
                  )
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* 오른쪽 화살표 */}
      {showArrows && (
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 z-10 flex -translate-y-1/2 items-center justify-center transition-all duration-200 hover:scale-105"
          aria-label="다음 슬라이드"
        >
          <Icon icon={ArrowRightIcon} size={40} color="#000" />
        </button>
      )}
    </div>
  )
}

export default Carousel
