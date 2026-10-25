export interface MasterService {
  id: string
  name: string
  description: string
  estimated_duration_minutes: number
  image_url: string | null
  created_at: string
}

export interface ServiceChangeRequest {
  id: string
  branch_id: string
  service_id: string
  manager_id: string
  request_type: 'add_service' | 'update_price'
  proposed_price?: number | null
  proposed_price_min?: number | null
  proposed_price_max?: number | null
  reason?: string | null
  status: 'pending' | 'approved' | 'rejected'
  admin_notes?: string | null
  created_at: string
  branch?: { name: string }
  manager?: { full_name: string; email?: string }
  service?: { name: string; estimated_duration_minutes: number }
}

export interface MasterServiceFormState {
  name: string
  description: string
  estimated_duration_minutes: number
}
