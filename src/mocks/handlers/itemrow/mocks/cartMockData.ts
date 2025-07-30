interface Product {
  id: number
  name: string
  price: string
  main_image_url: string
}

interface CartItem {
  id: number
  product: Product
  quantity: number
  subtotal: string
  pickup?: string
}

interface CartPackageItem {
  id: string
  name: string
  pickup?: string
}

interface CartPackage {
  cart_package_id: number
  quantity: number
  package: {
    id: number
    name: string
    price: string
    items: CartPackageItem[]
  }
  subtotal: string
  pickup: string
}

interface CartMockDataType {
  id: number
  customer: number
  single_items: CartItem[]
  packages: CartPackage[]
  total_price: string
  final_total: string
  created_at: string
  updated_at: string
}

const CartMockData: CartMockDataType[] = [
  {
    id: 1,
    customer: 11,
    single_items: [
      {
        id: 101,
        product: {
          id: 123,
          name: '겨울 소주',
          price: '22000',
          main_image_url:
            'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=300&q=80',
        },
        quantity: 2,
        subtotal: '44000.00',
        pickup: '123123',
      },
    ],
    packages: [
      {
        cart_package_id: 201,
        quantity: 1,
        package: {
          id: 55,
          name: '나만의 추천 패키지 A',
          price: '49000',
          items: [
            { id: 'p_uuid_2', name: '빛 24' },
            { id: 'p_uuid_3', name: '여름 소주' },
            { id: 'p_uuid_4', name: '가을 소주' },
          ],
        },
        subtotal: '49000.00',
        pickup: '123123',
      },
    ],
    total_price: '93000.00',
    final_total: '93000.00',
    created_at: '2025-07-26T15:30:00Z',
    updated_at: '2025-07-26T15:30:00Z',
  },
  {
    id: 2,
    customer: 22,
    single_items: [
      {
        id: 102,
        product: {
          id: 124,
          name: '봄 소주',
          price: '18000',
          main_image_url:
            'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=300&q=80',
        },
        quantity: 1,
        subtotal: '18000.00',
      },
    ],
    packages: [
      {
        cart_package_id: 202,
        quantity: 2,
        package: {
          id: 56,
          name: '계절 패키지 B',
          price: '37000',
          items: [
            { id: 'p_uuid_5', name: '봄 소주' },
            { id: 'p_uuid_6', name: '여름 소주' },
          ],
        },
        subtotal: '74000.00',
        pickup: '123123',
      },
    ],
    total_price: '92000.00',
    final_total: '92000.00',
    created_at: '2025-07-27T10:20:00Z',
    updated_at: '2025-07-27T10:20:00Z',
  },
  {
    id: 3,
    customer: 33,
    single_items: [
      {
        id: 103,
        product: {
          id: 125,
          name: '가을 소주',
          price: '25000',
          main_image_url:
            'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=300&q=80',
        },
        quantity: 1,
        subtotal: '25000.00',
      },
      {
        id: 104,
        product: {
          id: 126,
          name: '겨울 소주 프리미엄',
          price: '30000',
          main_image_url:
            'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=300&q=80',
        },
        quantity: 1,
        subtotal: '30000.00',
      },
    ],
    packages: [],
    total_price: '55000.00',
    final_total: '55000.00',
    created_at: '2025-07-28T08:15:00Z',
    updated_at: '2025-07-28T08:15:00Z',
  },
]

export default CartMockData
