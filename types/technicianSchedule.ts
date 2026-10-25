export interface ScheduleTemplate {
  day_of_week: number
  shift_start: string
  shift_end: string
  is_working: boolean
}

export interface ScheduleOverride {
  override_date: string
  shift_start: string
  shift_end: string
  is_day_off: boolean
}

export interface RoutineSlot {
  time: string
  title: string
  desc: string
}

export interface ChangeRequest {
  id: string
  request_date: string
  is_requesting_day_off: boolean
  requested_start: string | null
  requested_end: string | null
  reason: string
  status: 'pending' | 'approved' | 'rejected'
  request_type?: string
  requested_routine?: RoutineSlot[] | null
}

export const DEFAULT_ROUTINE: RoutineSlot[] = [
  { time: '08:00 - 08:30', title: 'Station Setup & Equipment Inspection', desc: 'Power up pressure washers, verify chemical dilutions, calibrate DA polishers.' },
  { time: '08:30 - 12:00', title: 'Morning Detailing Operations', desc: 'Intake booked vehicles, execute wash & interior vacuuming, paint preparation.' },
  { time: '12:00 - 13:00', title: 'Mid-Day Lunch Break', desc: 'Shop downtime. Bays powered down and ventilated.' },
  { time: '13:00 - 16:30', title: 'Afternoon Detailing & Protection', desc: 'Multi-stage paint correction, ceramic coatings, and final quality inspections.' },
  { time: '16:30 - 17:00', title: 'Station Wash-down & Tool Sanitization', desc: 'Drain rinse buckets, wash microfiber pads, log end-of-day bay checklist.' }
]
