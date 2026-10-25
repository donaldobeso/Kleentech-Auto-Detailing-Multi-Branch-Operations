export interface BranchServiceItem {
  branch_id: string
  service_id: string
  price: number
  price_min: number
  price_max: number
  is_available: boolean
  service?: {
    id: string
    name: string
    description: string
    estimated_duration_minutes: number
    image_url: string | null
  }
}

export interface CatalogService {
  id: string
  name: string
  description: string
  estimated_duration_minutes: number
  image_url: string | null
}

export interface ServiceChangeRequest {
  id: string
  branch_id: string
  manager_id: string
  service_id: string
  request_type: 'add_service' | 'update_price' | 'toggle_status'
  proposed_price: number | null
  proposed_price_min?: number | null
  proposed_price_max?: number | null
  is_available: boolean
  reason: string
  status: 'pending' | 'approved' | 'rejected'
  admin_notes: string | null
  reviewed_at: string | null
  created_at: string
  service?: {
    name: string
  }
}

export interface RevenueDataPoint {
  date: string
  revenue: number
}

export interface StaffPerformanceMetric {
  name: string
  completed: number
  avgTurnaround: number
}

export interface ServiceRevenueBreakdown {
  name: string
  value: number
}

export interface PlanCounts {
  shine: number
  detail: number
  elite: number
  [key: string]: number
}

export interface DashboardMetrics {
  allTimeRevenue: number
  todayRevenue: number
  activeSubs: number
  subsByPlan: PlanCounts
  completedJobs: number
}
