export interface BookingNotificationContext {
  bookingId?: string
  customerId?: string
  customerName?: string
  branchId?: string
  technicianId?: string
  vehicleName?: string
  serviceName?: string
  scheduledAt?: string
}

export interface JobStallNotificationContext {
  bookingId: string
  branchId: string
  bayNumber?: number | null
  vehicleName: string
  technicianName: string
  reason: string
}
