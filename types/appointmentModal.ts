export interface BookingDetailsData {
  id: string
  scheduled_at: string
  status: string
  payment_method?: string
  payment_type?: string
  reservation_fee?: number
  total_amount?: number
  downpayment_amount?: number
  downpayment_paid_at?: string | null
  notes?: string
  customer_id?: string
  technician_id?: string | null
  technician?: {
    id: string
    full_name: string
    avatar_url?: string | null
  } | null
  service_id?: string
  branch_id?: string
  bay_number?: number | null
  customer: {
    id?: string
    full_name: string
    avatar_url?: string | null
    phone_number?: string
    subscription_plan?: string | null
  } | null
  vehicle: {
    make: string
    model: string
    plate_number: string
    color?: string
    year?: string | number
    vehicle_type?: string | null
  } | null
  service: {
    name: string
    estimated_duration_minutes?: number
  } | null
  booking_services?: BookingServiceItem[]
}

export interface BookingServiceItem {
  service_id: string
  price_min: number
  price_max: number
  final_price?: number
  service?: {
    name: string
    estimated_duration_minutes?: number
  }
}

export interface AppointmentDetailsModalProps {
  booking: BookingDetailsData | null
  isOpen: boolean
  onClose: () => void
  onCheckIn?: (booking: BookingDetailsData) => void
  onNoShow?: (booking: BookingDetailsData) => void
  checkingInId?: string | null
  technicians?: { id: string; full_name: string; avatar_url?: string | null }[]
  onReassignTechnician?: (
    bookingId: string,
    technicianId: string,
    reason: string
  ) => Promise<void>
  onReschedule?: (
    bookingId: string,
    newDate: string,
    notes?: string
  ) => Promise<void>
  onAdjustInvoice?: (
    bookingId: string,
    newAmount: number,
    reason: string
  ) => Promise<void>
  onCancelBooking?: (bookingId: string, reason: string) => Promise<void>
  onSubmitPardon?: (booking: BookingDetailsData) => void
}

export type SubView = 'none' | 'reassign' | 'reschedule' | 'adjust' | 'cancel'

export interface AppointmentActionSubviewsProps {
  booking: BookingDetailsData
  isTerminal: boolean
  subView: SubView
  setSubView: (view: SubView) => void
  technicians: { id: string; full_name: string; avatar_url?: string | null }[]
  onReschedule?: (
    bookingId: string,
    newDate: string,
    notes?: string
  ) => Promise<void>
  onAdjustInvoice?: (
    bookingId: string,
    newAmount: number,
    reason: string
  ) => Promise<void>
  onCancelBooking?: (bookingId: string, reason: string) => Promise<void>
  totalAmount: number
  // Reassign state
  selectedTechId: string
  setSelectedTechId: (id: string) => void
  reassignReason: string
  setReassignReason: (reason: string) => void
  reassignLoading: boolean
  onExecuteReassign: (e: React.FormEvent) => void
  // Reschedule state
  rescheduleDate: string
  setRescheduleDate: (d: string) => void
  rescheduleTime: string
  setRescheduleTime: (t: string) => void
  rescheduleNotes: string
  setRescheduleNotes: (n: string) => void
  rescheduleLoading: boolean
  onExecuteReschedule: (e: React.FormEvent) => void
  onStartReschedule: () => void
  // Adjust state
  adjustedAmount: string
  setAdjustedAmount: (a: string) => void
  adjustReason: string
  setAdjustReason: (r: string) => void
  adjustLoading: boolean
  onExecuteAdjust: (e: React.FormEvent) => void
  onStartAdjust: () => void
  // Cancel state
  cancelReason: string
  setCancelReason: (r: string) => void
  cancelLoading: boolean
  onExecuteCancel: (e: React.FormEvent) => void
  onStartCancel: () => void
}

