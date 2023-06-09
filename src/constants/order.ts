/**
 * 주문 스텝
 */
export const OrderStep = {
  TRIED: 'TRIED',
  PAY_WAITING: 'PAY_WAITING',
  PAID: 'PAID',
  PREPARING_GOODS: 'PREPARING_GOODS',
  PARTIALLY_READY_FOR_EXPORT: 'PARTIALLY_READY_FOR_EXPORT',
  READY_FOR_EXPORT: 'READY_FOR_EXPORT',
  PARTIALLY_EXPORTED: 'PARTIALLY_EXPORTED',
  EXPORTED: 'EXPORTED',
  PARTIALLY_IN_SHIPPING: 'PARTIALLY_IN_SHIPPING',
  IN_SHIPPING: 'IN_SHIPPING',
  PARTIALLY_SHIPPING_COMPLETED: 'PARTIALLY_SHIPPING_COMPLETED',
  SHIPPING_COMPLETED: 'SHIPPING_COMPLETED',
  PAYMENT_CANCELED: 'PAYMENT_CANCELED',
  ORDER_INVALIDATED: 'ORDER_INVALIDATED',
  ORDER_FAILED: 'ORDER_FAILED',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type OrderStep = typeof OrderStep[keyof typeof OrderStep];

export const OrderStepLabel: {
  [k in OrderStep]: string;
} = {
  TRIED: '주문 중',
  PAY_WAITING: '결제대기',
  PAID: '결재확인',
  PREPARING_GOODS: '상품준비',
  PARTIALLY_READY_FOR_EXPORT: '부분출고준비',
  READY_FOR_EXPORT: '출고준비',
  PARTIALLY_EXPORTED: '부분출고완료',
  EXPORTED: '출고완료',
  PARTIALLY_IN_SHIPPING: '부분배송중',
  IN_SHIPPING: '배송중',
  PARTIALLY_SHIPPING_COMPLETED: '부분배송완료',
  SHIPPING_COMPLETED: '배송완료',
  PAYMENT_CANCELED: '결재취소',
  ORDER_INVALIDATED: '주문무효',
  ORDER_FAILED: '결재실패',
};
