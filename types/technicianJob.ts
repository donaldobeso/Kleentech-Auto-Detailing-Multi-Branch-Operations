export interface JobStep {
  id: string
  name: string
  is_completed: boolean
}

export interface JobCustomer {
  id: string
  full_name: string
  phone_number: string
  avatar_url?: string | null
}

export interface JobVehicle {
  make: string
  model: string
  plate_number: string
  color: string
  images?: string[]
}

export interface JobService {
  name: string
  description: string
  default_steps?: any[]
}

export interface JobDetails {
  id: string
  scheduled_at: string
  status: string
  bay_number: number | null
  branch_id?: string
  before_image_url: string | null
  after_image_url: string | null
  technician_notes?: string | null
  checklist_state?: boolean[] | null
  job_steps?: JobStep[] | null
  customer: JobCustomer | null
  vehicle: JobVehicle | null
  service: JobService | null
  updated_at?: string
}

export interface StallReportPayload {
  bookingId: string
  branchId: string
  bayNumber: number | null
  vehicleName: string
  technicianName: string
  reason: string
}
