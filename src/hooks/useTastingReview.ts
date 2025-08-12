import { useState } from 'react'
import useSubmitFeedback from '@/hooks/useSubmitFeedback'
import type { TastingReview, TastingSubmitData } from '@/types/feedback'
import { MAX_SELECTED_TAGS } from '@/constants/feedbackReview'
import type { FeedbackRequest } from '@/api/feedback/types'

const INITIAL_REVIEW_STATE: TastingReview = {
  sweetness: 0,
  acidity: 0,
  body: 0,
  confidence: 0,
  rating: 0,
}

const MAX_IMAGES = 3

const useTastingReview = (orderItemId?: number, onClose?: () => void) => {
  const [review, setReview] = useState<TastingReview>(INITIAL_REVIEW_STATE)
  const [files, setFiles] = useState<File[]>([])
  const [imagePreviews, setImagePreviews] = useState<string[]>([])
  const [comment, setComment] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const mutation = useSubmitFeedback()

  const updateReview = (field: keyof TastingReview, value: number) => {
    setReview((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files
    if (!selectedFiles) return

    const fileArray = Array.from(selectedFiles)
    const totalCount = imagePreviews.length + fileArray.length

    if (totalCount > MAX_IMAGES) {
      alert(`최대 ${MAX_IMAGES}개의 이미지만 업로드할 수 있습니다.`)
      return
    }

    setFiles((prevFiles) => {
      const newFiles = [...prevFiles, ...fileArray]
      return newFiles
    })

    fileArray.forEach((file) => {
      const reader = new FileReader()
      reader.onload = () => {
        setImagePreviews((prev) => [...prev, reader.result as string])
      }
      reader.readAsDataURL(file)
    })
    e.target.value = ''
  }

  const handleToggleTag = (tagValue: string) => {
    setSelectedTags((prev) => {
      const hasTag = prev.includes(tagValue)
      if (hasTag) return prev.filter((v) => v !== tagValue)
      if (prev.length >= MAX_SELECTED_TAGS) return prev
      return [...prev, tagValue]
    })
  }

  const validateReview = (): boolean => {
    return (
      review.sweetness >= 0 &&
      review.acidity >= 0 &&
      review.body >= 0 &&
      review.confidence >= 0 &&
      review.rating > 0 &&
      selectedTags.length > 2
    )
  }

  const createSubmitData = (): TastingSubmitData => {
    return {
      order_item_id: Number(orderItemId ?? 0),
      sweetness: review.sweetness,
      acidity: review.acidity,
      body: review.body,
      confidence: review.confidence,
      overall_rating: review.rating,
      taste_tag: selectedTags,
      comment,
      files: files.length > 0 ? files : null,
    }
  }

  const resetForm = () => {
    setReview(INITIAL_REVIEW_STATE)
    setFiles([])
    setImagePreviews([])
    setComment('')
    setSelectedTags([])
  }

  const openModal = () => setIsOpen(true)

  const closeModal = () => {
    setIsOpen(false)
    resetForm()
  }

  const handleSubmit = () => {
    if (!validateReview()) {
      /* TODO: ux적으로 좋지 않음 추후 개선 필요 */
      alert('필수 부분을 모두 입력해주세요.')
      return false
    }

    if (!orderItemId) {
      alert('유효하지 않은 주문 항목입니다.')
      return false
    }

    const submitData = createSubmitData()
    mutation.mutate(submitData as FeedbackRequest)
    resetForm()
    closeModal()
    return true
  }

  const handleSubmitAndClose = () => {
    if (handleSubmit()) {
      onClose?.()
    }
  }

  return {
    review,
    comment,
    selectedTags,
    isOpen,
    imagePreviews,
    maxImages: MAX_IMAGES,
    updateReview,
    handleFileChange,
    handleToggleTag,
    setComment,
    openModal,
    closeModal,
    handleSubmit,
    handleSubmitAndClose,
  }
}

export default useTastingReview
