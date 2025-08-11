import { Plus } from 'lucide-react'

interface ReviewSummaryFormProps {
  comment: string
  setComment: (comment: string) => void
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  imagePreviews: string[]
}

const ReviewSummaryForm = ({
  comment,
  setComment,
  handleFileChange,
  imagePreviews,
}: ReviewSummaryFormProps) => {
  return (
    <>
      <div className="mt-12">
        <p className="border-b-2 pb-3 text-xl font-bold text-[#333333]">
          시음 사진 등록하기 <span className="font-normal">(선택)</span>
        </p>
        <div className="mt-7">
          <div className="flex flex-wrap gap-4">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative">
                <img
                  src={preview}
                  alt={`미리보기 ${preview.length - index}`}
                  className="h-[150px] w-[150px] rounded-[10px] object-cover"
                />
              </div>
            ))}

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
                className="ml-5 flex h-[150px] w-[150px] cursor-pointer items-center justify-center rounded-[10px] bg-[#f2f2f2] transition hover:bg-[#e0e0e0]"
                aria-label="사진 등록"
              >
                <Plus size={24} className="text-[#333]" />
              </label>
            </div>
          </div>
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
    </>
  )
}

export default ReviewSummaryForm
