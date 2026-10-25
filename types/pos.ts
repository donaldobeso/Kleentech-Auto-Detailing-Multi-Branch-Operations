export interface CustomerSubscription {
  plan: string
  status: string
  sessions_used: number
  sessions_limit: number
  current_period_end?: string | null
}

export interface BookingServiceItem {
  service_id: string
  price_min: number
  price_max: number
  final_price?: number
  service?: {
    name: string
  }
}

export interface POSBooking {
  id: string
  scheduled_at: string
  status: string
  payment_method: string
  payment_type?: string
  reservation_fee?: number
  total_amount?: number
  downpayment_amount?: number
  downpayment_paid_at?: string | null
  customer_id?: string
  total_paid?: number
  balance_due?: number
  last_payment_amount?: number
  refund_amount?: number
  notes?: string | null
  customer: {
    id?: string
    full_name: string
    phone_number?: string
    subscription_plan?: string | null
    subscription?: CustomerSubscription | null
  } | null
  vehicle: {
    make: string
    model: string
    plate_number: string
    color?: string
    year?: string | number
    vehicle_type?: string | null
  } | null
  service: { name: string } | null
  booking_services?: BookingServiceItem[]
}

export type PaymentMethod = 'cash' | 'card' | 'ewallet'
export type PayableFilter = 'all' | 'balance' | 'counter'
export type PayableSort = 'date-desc' | 'date-asc' | 'amount-desc' | 'amount-asc'
export type PaidFilter = 'all' | 'direct' | 'subscription'
export type PaidSort = 'date-desc' | 'date-asc' | 'amount-desc' | 'amount-asc'
