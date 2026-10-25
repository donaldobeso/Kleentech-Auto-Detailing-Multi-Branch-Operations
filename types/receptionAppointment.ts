import type { BookingDetailsData } from '../components/reception/AppointmentDetailsModal'

export type AppointmentStatusFilter =
  | 'All'
  | 'Waiting'
  | 'Confirmed'
  | 'Pending'
  | 'In-Progress'
  | 'Completed'
  | 'No-Show / Cancelled'

export interface TechnicianSummary {
  id: string
  full_name: string
  avatar_url?: string | null
}

export type { BookingDetailsData }
