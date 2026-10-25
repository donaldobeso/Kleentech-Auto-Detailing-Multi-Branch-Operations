export type BayType = 'general' | 'wash' | 'ceramic' | 'tint' | 'detailing'
export type BayStatus = 'active' | 'maintenance' | 'inactive'

export interface Bay {
  id: string
  branch_id: string
  bay_number: number
  name: string
  bay_type: BayType
  status: BayStatus
  maintenance_reason?: string | null
  created_at: string
  updated_at: string
  branch?: {
    id: string
    name: string
  }
}

export interface CreateBayInput {
  branch_id: string
  bay_number: number
  name: string
  bay_type?: BayType
  status?: BayStatus
  maintenance_reason?: string | null
}

export interface UpdateBayInput {
  branch_id?: string
  name?: string
  bay_type?: BayType
  status?: BayStatus
  maintenance_reason?: string | null
}

export interface BranchSummary {
  id: string
  name: string
  branch_code?: string
}

export interface AdminLiveBooking {
  id: string
  scheduled_at: string
  status: string
  bay_number: number | null
  technician_id: string | null
  branch_id: string
  service_id?: string
  checklist_state?: boolean[] | Record<string, any> | null
  job_steps?: { id: string; name: string; is_completed: boolean }[] | null
  customer?: {
    id: string
    full_name: string
    avatar_url?: string | null
    phone_number?: string
    subscription_plan?: string | null
  } | null
  services?: {
    name: string
    estimated_duration_minutes?: number
  } | null
  vehicles?: {
    make: string
    model: string
    plate_number: string
    color?: string
  } | null
  technician?: {
    id: string
    full_name: string
    avatar_url?: string | null
  } | null
}

export interface ActiveBookingCheckResult {
  hasActive: boolean
  count: number
  activeBookings: any[]
}
