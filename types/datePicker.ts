export interface CustomDatePickerProps {
  value: string
  onChange: (value: string) => void
  branchId?: string
  serviceId?: string
  estimatedDuration?: number
  userId?: string
}

export interface SlotStatus {
  time: string
  displayTime: string
  isPast: boolean
  bookedByCurrentUser: boolean
  isConflict?: boolean
  isFullyBooked: boolean
  isAvailable: boolean
  startMinutes: number
}

export const formatTimeRange = (startDate: Date, endDate: Date): string => {
  const startH = startDate.getHours()
  const startM = startDate.getMinutes()
  const startAmpm = startH >= 12 ? 'PM' : 'AM'
  const startDH = startH > 12 ? startH - 12 : (startH === 0 ? 12 : startH)

  const endH = endDate.getHours()
  const endM = endDate.getMinutes()
  const endAmpm = endH >= 12 ? 'PM' : 'AM'
  const endDH = endH > 12 ? endH - 12 : (endH === 0 ? 12 : endH)

  return `${startDH}:${startM.toString().padStart(2, '0')} ${startAmpm}–${endDH}:${endM.toString().padStart(2, '0')} ${endAmpm}`
}
