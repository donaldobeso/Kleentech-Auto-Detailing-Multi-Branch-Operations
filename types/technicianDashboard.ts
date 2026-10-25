export interface TechQueueBooking {
  id: string
  scheduled_at: string
  status: string
  bay_number: number | null
  updated_at?: string
  created_at?: string
  technician_notes?: string | null
  checklist_state?: boolean[] | null
  job_steps?: Array<{ id: string; name: string; is_completed: boolean }> | null
  customer: {
    full_name: string
    avatar_url: string | null
  } | null
  vehicle: {
    make: string
    model: string
    plate_number?: string | null
    color?: string | null
    images?: string[] | null
  } | null
  service: {
    name: string
    image_url?: string | null
    description?: string | null
    estimated_duration_minutes?: number | null
  } | null
}

export interface DashboardMetricSummary {
  completedToday: number
  avgTurnaround: string
  queueCount: number
}
