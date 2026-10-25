import type { UserProfile } from './user'

export interface PardonRequest {
  id: string
  user_id: string
  created_at: string
  reason: string
  status: 'pending' | 'approved' | 'rejected'
  review_notes: string | null
  user: { id: string; full_name: string; email?: string } | null
  requester: { full_name: string } | null
  booking: { scheduled_at: string; services: { name: string } | null } | null
}

export interface Vehicle {
  id: string
  user_id: string
  make: string
  model: string
  plate_number: string
  color?: string | null
  year?: string | null
}

export interface UserSubscriptionInfo {
  plan: string
  status: string
  sessions_used: number
  sessions_limit: number
  current_period_end: string | null
}

export interface CustomerProfile extends UserProfile {
  total_visits?: number
  last_service_date?: string | null
  vehicles?: Vehicle[]
  subscription_plan?: string | null
  subscription?: UserSubscriptionInfo | null
}
