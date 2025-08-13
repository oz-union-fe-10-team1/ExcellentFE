import { DETAIL_PAGE_CONSTANTS } from '@/constants/detailOptions'
import { ProductInfoTable } from '@/components/detail/Productinfo'
interface ProductDetailTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
  productInfo: {
    alcoholType?: string
    alcoholContent?: number | null
    flavorNotes?: string
  }
}

const TabMenu = ({
  activeTab,
  onTabChange,
  productInfo,
}: ProductDetailTabsProps) => {
  const { TABS } = DETAIL_PAGE_CONSTANTS

  return (
    <div className="relative mx-auto mt-[100px] w-[1280px]">
      {/* 탭 메뉴 */}
      <div className="relative h-[43px] w-full">
        <div className="flex w-full items-center">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex w-1/3 justify-center py-2 text-[18px] ${
                activeTab === tab.id
                  ? 'font-bold text-black'
                  : 'font-medium text-[#666666]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="absolute bottom-0 h-[2px] w-full bg-[#DDDDDD]" />
        <div
          className="absolute bottom-0 h-[2px] bg-black transition-all duration-300"
          style={{
            width: '33.3333%',
            left: `${TABS.findIndex((tab) => tab.id === activeTab) * 33.3333}%`,
          }}
        />
      </div>

      {/* 탭 컨텐츠 */}
      {activeTab === 'detail' && <ProductInfoTable productInfo={productInfo} />}
    </div>
  )
}

export default TabMenu
