export interface AllocationTechnician {
  id: string
  full_name: string
  role: string
  avatar_url?: string | null
}

export interface AllocationBooking {
  id: string
  scheduled_at: string
  status: string
  bay_number: number | null
  technician_id: string | null
  checklist_state?: boolean[] | Record<string, any> | null
  job_steps?: { id: string; name: string; is_completed: boolean }[] | null
  technician_notes?: string | null
  notes?: string | null
  created_at?: string
  updated_at?: string
  customer: { full_name: string } | null
  vehicle: { make: string; model: string; plate_number?: string; images?: string[] } | null
  service: { name: string; image_url?: string } | null
}

export interface TechLoadItem extends AllocationTechnician {
  load: number
  activeJobsCount: number
  currentJob: string
  currentJobProgress?: number
}

export interface BayAllocationSlot {
  bayNum: number
  bayName: string
  bayType: string
  bayStatus: string
  maintenanceReason: string
  isMaintenance: boolean
  isInactive: boolean
  status: 'occupied' | 'available' | 'maintenance' | 'inactive'
  booking: AllocationBooking | null
  car: string | null
  plate: string | null
  customerName: string
  serviceName: string | undefined
  assignedTech: AllocationTechnician | null | undefined
  progress: number
  isStalled: boolean
  stallReason: string
}
