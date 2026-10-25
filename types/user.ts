export type StaffRole = 'receptionist' | 'technician' | 'manager' | 'super_admin'
export type AnyRole = 'customer' | StaffRole
export type ModalMode = 'idle' | 'create' | 'edit' | 'view'

export interface UserProfile {
  id: string
  employee_id: string
  full_name: string
  email?: string | null
  phone_number?: string
  avatar_url?: string | null
  role: AnyRole
  branch_id: string | null
  is_active: boolean
  created_at: string
}

export interface Branch {
  id: string
  name: string
}
