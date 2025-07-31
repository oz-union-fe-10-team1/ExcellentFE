export const BUTTON_VARIANTS = {
  VARIANT1: [
    'w-[600px]',
    'h-[72px]',
    'bg-[#f2544b]',
    'rounded-[8px]',
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
    'rounded-[8px]',
    'text-[#ffffff]',
    'bg-[#f2544b]',
  ].join(' '),

  //장바구니
  VARIANT3: [
    'w-70',
    'h-18',
    'text-lg',
    'tracking-[0.05em]',
    'rounded-[8px]',
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
    'rounded-[6px]',
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
    'rounded-[6px]',
  ].join(' '),

  //후기 남기기
  VARIANT6: [
    'w-35',
    'h-12',
    'bg-[#f2f2f2]',
    'text-[#333333]',
    'text-lg',
    'rounded-[6px]',
    'tracking-[0.05em]',
  ].join(' '),

  //나만의 패키지 구성하기
  VARIANT7: [
    'w-44',
    'h-10',
    'rounded-[6px]',
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
    'rounded-[6px]',
    'font-medium',
  ].join(' '),
} as const

export const DEFAULT_BUTTON_VARIANT = 'VARIANT1'

export type ButtonVariant = keyof typeof BUTTON_VARIANTS
