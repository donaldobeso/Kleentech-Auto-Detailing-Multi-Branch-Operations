export interface MatrixBranch {
  id: string
  name: string
}

export interface MatrixService {
  id: string
  name: string
  estimated_duration_minutes: number
}

export interface BranchServiceRecord {
  branch_id: string
  service_id: string
  price: number
  price_min: number | null
  price_max: number | null
  is_available: boolean
}

export interface MatrixEditTarget {
  branch_id: string
  branch_name: string
  service_id: string
  service_name: string
  price_min: number
  price_max: number
  is_available: boolean
}
