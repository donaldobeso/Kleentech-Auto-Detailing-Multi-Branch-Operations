export interface BookingServiceItem {
  service_id: string
  price_min: number
  price_max: number
  final_price?: number | null
  service?: {
    name: string
    description?: string
    image_url?: string
    estimated_duration_minutes?: number
  }
}

export interface CustomerBooking {
  id: string
  scheduled_at: string
  booked_at?: string | null
  status: 'pending' | 'pending_payment' | 'confirmed' | 'waiting' | 'in_progress' | 'completed' | 'cancelled'
  notes?: string
  payment_method?: string
  payment_type?: string
  reservation_fee?: number
  total_amount?: number
  downpayment_amount?: number
  downpayment_paid_at?: string | null
  cancellation_deadline?: string | null
  is_refundable?: boolean
  checklist_state?: boolean[] | null
  technician_notes?: string
  branch_id?: string
  technician_id?: string
  customer_id?: string
  branches?: { name: string; address: string; phone?: string; image_url?: string }
  services?: { name: string; description: string; price?: number; image_url?: string }
  vehicles?: { make: string; model: string; plate_number: string; color?: string; year?: number; vehicle_type?: string | null }
  payments?: { id?: string; status: string; amount?: number; paymongo_link_id?: string }[]
  booking_services?: BookingServiceItem[]
}
