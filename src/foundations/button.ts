export const BUTTON_VARIANTS = {
  VARIANT1: [
    'w-[600px]',
    'h-[72px]',
    'bg-[#f2544b]',
    'rounded-lg',
    'text-2xl',
    'font-bold',
    'text-[#ffffff]',
    'tracking-[-0.02em]',
  ].join(' '),

  //구매하기
  VARIANT2: [
    'w-70',
    'h-18',
    'text-lg',
    'tracking-[0.05em]',
    'rounded-lg',
    'text-[#ffffff]',
    'bg-[#f2544b]',
  ].join(' '),

  //장바구니
  VARIANT3: [
    'w-70',
    'h-18',
    'text-lg',
    'tracking-[0.05em]',
    'rounded-lg',
    'text-[#666666]',
    'bg-[#ffffff]',
    'border',
    'border-[#666666]',
  ].join(' '),

  //결제하기
  VARIANT4: [
    'w-35',
    'h-13',
    'bg-[#2e2f2f]',
    'rounded-md',
    'text-lg',
    'font-semibold',
    'text-[#ffffff]',
    'tracking-[-0.02em]',
  ].join(' '),

  //본품 구매하기
  VARIANT5: [
    'w-36',
    'h-12',
    'bg-[#000000]',
    'text-[#ffffff]',
    'tracking-[0.05em]',
    'rounded-md',
  ].join(' '),

  //후기 남기기
  VARIANT6: [
    'w-35',
    'h-12',
    'bg-[#f2f2f2]',
    'text-[#333333]',
    'text-lg',
    'rounded-md',
    'tracking-[0.05em]',
  ].join(' '),

  //나만의 패키지 구성하기
  VARIANT7: [
    'w-44',
    'h-10',
    'rounded-md',
    'border',
    'border-[#d9d9d9]',
    'bg-[#333333]',
    'text-[#ffffff]',
    'font-medium',
    'tracking-[-0.02em]',
  ].join(' '),

  // 소셜 로그인
  VARIANT8: [
    'flex',
    'items-center',
    'w-[440px]',
    'h-[56px]',
    'pl-6',
    'pr-10',
    'rounded-xl',
    'font-bold',
  ].join(' '),

  // 테스트 하러가기
  VARIANT9: [
    'w-[197px]',
    'h-[55px]',
    'bg-[#2F2F2F]',
    'rounded-md',
    'font-semibold',
    'text-[#FFFFFF]',
    'text-lg',
  ].join(' '),

  /* 모달 태그 버튼 */
  VARIANT10: [
    'h-6',
    'w-13',
    'cursor-pointer',
    'rounded-[3px]',
    'border',
    'text-[11px]',
    'transition',
  ].join(' '),

  // 테스트 다시하기/펼쳐보기 (입맛 프로필 페이지)
  VARIANT11: [
    'w-44',
    'h-10',
    'rounded-full',
    'bg-white',
    'text-[#F2544B]',
    'tracking-[-0.02em]',
    'flex',
    'items-center',
    'justify-center',
    'gap-2',
  ].join(' '),

  //상세페이지 장바구니
  VARIANT12: [
    'w-[280px]',
    'h-[72px]',
    'bg-[#ffffff]',
    'rounded-[8px]',
    'text-[#666666]',
    'font-bold',
    'text-lg',
    'border',
    'border-[#666666]',
  ].join(' '),

  //상세페이지 구매하기
  VARIANT13: [
    'w-[280px]',
    'h-[72px]',
    'bg-[#f2544b]',
    'rounded-[8px]',
    'text-[#ffffff]',
    'font-bold',
    'text-lg',
    'border',
    'border-[#f2544b]',
  ].join(' '),
} as const

export const DEFAULT_BUTTON_VARIANT = 'VARIANT1'

export type ButtonVariant = keyof typeof BUTTON_VARIANTS
