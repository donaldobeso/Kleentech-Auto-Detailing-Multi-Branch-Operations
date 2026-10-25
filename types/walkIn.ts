import type { NewClientData, AdditionalVehicleData } from '../components/reception/WalkInVehicleSection'
import type { WalkInCustomer } from '../components/reception/WalkInCustomerLookup'

export interface BranchService {
  service_id: string
  price: number
  price_min?: number
  price_max?: number
  is_available: boolean
  services: {
    name: string
    description?: string
    image_url?: string
    estimated_duration_minutes?: number
  }
}

export interface RecentWalkIn {
  id: string
  scheduled_at: string
  status: string
  total_amount?: number
  reservation_fee?: number
  payment_method?: string
  payment_type?: string
  notes?: string | null
  customer?: {
    full_name: string
    phone_number: string
    email?: string
  } | null
  vehicle?: {
    make: string
    model: string
    plate_number: string
    vehicle_type?: string | null
  } | null
  service?: {
    name: string
  } | null
  booking_services?: {
    service_id: string
    price_min: number
    price_max: number
    final_price?: number
    service?: {
      name: string
    }
  }[]
}

export interface WalkInIntakeFormData {
  selectedCustomer: WalkInCustomer | null
  selectedVehicleId: string
  isSubscriberOverride: boolean
  isAddingNewVehicle: boolean
  newClientData: NewClientData
  additionalVehicleData: AdditionalVehicleData
  selectedServiceIds: string[]
  scheduleMode: 'immediate' | 'scheduled'
  scheduledDate: string
  scheduledTime: string
  notes: string
  feeCollected: boolean
}
