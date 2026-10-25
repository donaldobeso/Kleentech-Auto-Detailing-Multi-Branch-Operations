export interface DashboardBooking {
  id: string
  scheduled_at: string
  status: 'pending' | 'pending_payment' | 'confirmed' | 'waiting' | 'in_progress' | 'completed' | 'cancelled' | 'no_show'
  notes?: string
  payment_method?: string
  customer_id?: string
  bay_number?: number | null
  technician_id?: string | null
  technician?: {
    id: string
    full_name: string
    avatar_url?: string | null
  } | null
  total_amount?: number
  downpayment_amount?: number
  downpayment_paid_at?: string | null
  checklist_state?: boolean[] | Record<string, any> | null
  job_steps?: { id: string; name: string; is_completed: boolean }[] | null
  created_at?: string
  updated_at?: string
  customer?: {
    id: string
    full_name: string
    avatar_url?: string | null
    phone_number: string
    subscription_plan?: string | null
  } | null
  services?: {
    name: string
    estimated_duration_minutes?: number
  } | null
  service_id?: string
  branch_id?: string
  vehicles?: {
    make: string
    model: string
    plate_number: string
    color?: string
    images?: string[]
  } | null
}

export interface DashboardTechnician {
  id: string
  full_name: string
  role: string
  avatar_url?: string | null
}

export interface BayStatusItem {
  bayNum: number
  bayName: string
  bayType: string
  status: string
  maintenanceReason: string
  isMaintenance: boolean
  isInactive: boolean
  isOccupied: boolean
  booking: DashboardBooking | null
}
