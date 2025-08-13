// components/detail/ProductImage.tsx
import { cn } from '@/utils/cn'

interface ProductImageProps {
  imageUrl?: string
  name: string
  className?: string
}

const ProductImage = ({
  imageUrl,
  name,
  className = '',
}: ProductImageProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-[10px] bg-[#F5F5F5]',
        className
      )}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full rounded-[10px] object-cover"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded bg-gray-200">
          <span className="text-lg text-gray-500">이미지 없음</span>
        </div>
      )}
    </div>
  )
}

export default ProductImage
