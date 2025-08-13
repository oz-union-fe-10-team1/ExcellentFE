// Detail.tsx (메인 컴포넌트)
import { useDetailPage } from '@/hooks/useDetailPage'
import ProductImage from '@/components/detail/ProductImage'
import PriceInfo from '@/components/detail/PriceInfo'
import OptionsSection from '@/components/detail/OptionSection'
import TabMenu from '@/components/detail/TabMenu'
import ReviewSection from '@/components/detail/ReviewSection'
import HeartButton from '@/components/common/HeartButton'

const Detail = () => {
  const {
    isLoading,
    processedData,
    feedbackData,
    quantity,
    selectedStore,
    selectedRegion,
    selectedDate,
    activeTab,
    isLiked,
    storeOptions,
    regionOptions,
    dateOptions,
    selectedDateInfo,
    handleQuantityChange,
    handleLikeToggle,
    handlePurchase,
    handleAddToCart,
    setSelectedStore,
    setSelectedRegion,
    setSelectedDate,
    setActiveTab,
  } = useDetailPage()

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        로딩 중...
      </div>
    )
  }

  if (!processedData) {
    return (
      <div className="flex h-screen items-center justify-center">
        데이터를 찾을 수 없습니다.
      </div>
    )
  }

  return (
    <div className="w-full bg-white">
      {/* 상품정보 섹션 */}
      <div className="relative mx-auto mt-[190px] h-[560px] w-[1280px]">
        <ProductImage
          imageUrl={processedData.mainImage}
          name={processedData.name}
          className="absolute top-0 left-0 h-[560px] w-[560px]"
        />

        <PriceInfo
          name={processedData.name}
          price={processedData.price}
          originalPrice={processedData.originalPrice}
          discountRate={processedData.discountRate}
          statistics={processedData.statistics}
        />

        <OptionsSection
          quantity={quantity}
          selectedStore={selectedStore}
          selectedRegion={selectedRegion}
          selectedDate={selectedDate}
          totalPrice={processedData.totalPrice}
          storeOptions={storeOptions}
          regionOptions={regionOptions}
          dateOptions={dateOptions}
          selectedDateInfo={selectedDateInfo}
          onQuantityChange={handleQuantityChange}
          onStoreChange={setSelectedStore}
          onRegionChange={setSelectedRegion}
          onDateChange={setSelectedDate}
          onAddToCart={handleAddToCart}
          onPurchase={handlePurchase}
        />

        <div className="absolute top-[490px] left-[490px]">
          <HeartButton isLiked={isLiked} onClick={handleLikeToggle} />
        </div>
      </div>

      {/* 상세페이지 탭 */}
      <TabMenu
        activeTab={activeTab}
        onTabChange={setActiveTab}
        productInfo={{
          alcoholType: processedData.alcoholType,
          alcoholContent: processedData.alcoholContent,
          flavorNotes: processedData.flavorNotes,
        }}
      />

      {/* 수령방식 */}
      <div className="relative mx-auto mt-[200px] h-[238px] w-[1280px]">
        <h2 className="text-[18px] font-bold text-black">구매 및 수령 방식</h2>
        <div className="absolute top-[43px] h-[2px] w-full bg-black" />
        <div className="absolute top-[78px] left-[14px] flex h-[160px] w-[1252px] items-center justify-center rounded-[10px] bg-[#F2F2F2]">
          <div className="text-center">
            <span className="block text-[16px] font-medium text-[#333333]">
              수도권에서 픽업 가능한 상품입니다.
            </span>
            {selectedDateInfo && (
              <span className="mt-1 block text-[14px] text-[#F2544B]">
                선택된 픽업일: {selectedDateInfo.label}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 상품후기 */}
      <ReviewSection feedbackData={feedbackData} />
    </div>
  )
}

export default Detail
