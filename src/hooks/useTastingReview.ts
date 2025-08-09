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

export const useTastingReview = () => {
  const [review, setReview] = useState<TastingReview>(INITIAL_REVIEW_STATE)
  const [files, setFiles] = useState<FileList | null>(null)
  const [comment, setComment] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const mutation = useSubmitFeedback()

  const updateReview = (field: keyof TastingReview, value: number) => {
    setReview((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files)
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
      review.sweetness > 0 &&
      review.acidity > 0 &&
      review.body > 0 &&
      review.confidence > 0 &&
      review.rating > 0
    )
  }

  const createSubmitData = (): TastingSubmitData => {
    return {
      order_item_id: 123, // TODO: 실제 order_item_id로 교체
      sweetness: review.sweetness,
      acidity: review.acidity,
      body: review.body,
      confidence: review.confidence,
      overall_rating: review.rating,
      taste_tag: selectedTags,
      comment,
      files,
    }
  }

  const resetForm = () => {
    setReview(INITIAL_REVIEW_STATE)
    setFiles(null)
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
      alert('필수 부분을 모두 입력해주세요.')
      return false
    }

    const submitData = createSubmitData()
    mutation.mutate(submitData as FeedbackRequest)
    resetForm()
    closeModal()
    return true
  }

  return {
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
    validateReview,
    resetForm,
    submitError: mutation.error,
  }
}
