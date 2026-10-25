/**
 * KleenTech Auto Detailing Platform — Architecture Domain Models
 * Public type specifications demonstrating multi-branch enterprise contracts.
 */

export type UserRole = 'customer' | 'receptionist' | 'technician' | 'branch_manager' | 'super_admin'

export interface UserProfile {
  id: string
  email: string
  full_name: string
  role: UserRole
  branch_id?: string | null
  phone_number?: string | null
  avatar_url?: string | null
  subscription_plan?: 'shine' | 'detail' | 'elite' | null
  created_at: string
}

export type BayType = 'general' | 'wash' | 'ceramic' | 'tint' | 'detailing'
export type BayStatus = 'available' | 'occupied' | 'maintenance' | 'inactive'

export interface DetailingBay {
  id: string
  branch_id: string
  bay_number: number
  name: string
  bay_type: BayType
  status: BayStatus
  current_booking_id?: string | null
  maintenance_reason?: string | null
}

export type BookingStatus = 
  | 'pending'
  | 'pending_payment'
  | 'confirmed'
  | 'waiting'
  | 'in_progress'
  | 'completed'
  | 'cancelled'

export interface BookingServiceItem {
  service_id: string
  service_name: string
  price: number
  estimated_duration_minutes: number
}

export interface CustomerBooking {
  id: string
  customer_id: string
  branch_id: string
  technician_id?: string | null
  bay_number?: number | null
  scheduled_at: string
  status: BookingStatus
  total_amount: number
  reservation_fee: number
  is_refundable: boolean
  payment_method?: 'qrph' | 'gcash' | 'card' | 'cash'
  checklist_state?: boolean[]
  services: BookingServiceItem[]
  vehicle: {
    make: string
    model: string
    plate_number: string
    vehicle_tier: 'tier1' | 'tier2' | 'tier3'
  }
}

export interface POSCashierTransaction {
  id: string
  booking_id: string
  branch_id: string
  cashier_id: string
  amount_paid: number
  payment_type: 'balance_settlement' | 'walk_in' | 'pass_redemption'
  payment_channel: 'cash' | 'pos_terminal' | 'qrph'
  receipt_number: string
  created_at: string
}
