/**
 * Public TypeScript domain contracts reflecting implemented KleenTech data structures.
 */

export type StaffRole = 'receptionist' | 'technician' | 'manager' | 'super_admin';
export type UserRole = 'customer' | StaffRole;

/**
 * 5-Tier Vehicle Classification ('motorcycle' ₱100 / 0.6x through 'truck_heavy' ₱500 / 1.8x)
 */
export type VehicleType =
  | 'motorcycle'
  | 'sedan_hatchback'
  | 'suv_crossover_pickup'
  | 'van_minibus'
  | 'truck_heavy';

export interface UserProfile {
  id: string;
  employee_id: string;
  full_name: string;
  email?: string | null;
  phone_number?: string;
  avatar_url?: string | null;
  role: UserRole;
  branch_id: string | null;
  is_active: boolean;
  created_at: string;
}

export type BayType = 'general' | 'wash' | 'ceramic' | 'tint' | 'detailing';
export type BayStatus = 'active' | 'maintenance' | 'inactive';

export interface DetailingBay {
  id: string;
  branch_id: string;
  bay_number: number;
  name: string;
  bay_type: BayType;
  status: BayStatus;
  maintenance_reason?: string | null;
  created_at: string;
  updated_at: string;
  branch?: {
    id: string;
    name: string;
  };
}

export interface MasterService {
  id: string;
  name: string;
  description: string;
  estimated_duration_minutes: number;
  image_url: string | null;
  applicable_vehicle_types?: VehicleType[];
  tier_duration_multipliers?: Record<string, number> | null;
  created_at: string;
}

export interface CustomerVehicle {
  id: string;
  user_id: string;
  make: string;
  model: string;
  plate_number: string;
  color?: string | null;
  year?: string | null;
  vehicle_type?: VehicleType | string | null;
}

export type BookingStatus =
  | 'pending'
  | 'pending_payment'
  | 'confirmed'
  | 'waiting'
  | 'in_progress'
  | 'completed'
  | 'cancelled';

export interface BookingServiceItem {
  service_id: string;
  price_min: number;
  price_max: number;
  final_price?: number | null;
  service?: {
    name: string;
    description?: string;
    image_url?: string;
    estimated_duration_minutes?: number;
    applicable_vehicle_types?: VehicleType[];
    tier_duration_multipliers?: Record<string, number> | null;
  };
}

export interface BookingTechnicianCrewMember {
  technician_id: string;
  is_lead: boolean;
  allocated_minutes: number;
}

export interface CustomerBooking {
  id: string;
  scheduled_at: string;
  booked_at?: string | null;
  status: BookingStatus;
  notes?: string;
  payment_method?: string;
  payment_type?: string;
  reservation_fee?: number;
  total_amount?: number;
  downpayment_amount?: number;
  downpayment_paid_at?: string | null;
  cancellation_deadline?: string | null;
  is_refundable?: boolean;
  checklist_state?: boolean[] | null;
  technician_notes?: string;
  branch_id?: string;
  technician_id?: string;
  customer_id?: string;
  vehicles?: {
    make: string;
    model: string;
    plate_number: string;
    color?: string;
    year?: number;
    vehicle_type?: VehicleType | string | null;
  };
  booking_services?: BookingServiceItem[];
  booking_technicians?: BookingTechnicianCrewMember[];
}

export interface SubscriptionPlanService {
  service_id: string;
  service_quota: number | null;
  service: { name: string };
}

export interface PlanPerkItem {
  id: string;
  label: string;
  is_coming_soon: boolean;
  sort_order: number;
}

export interface SubscriptionPlanConfig {
  id: string;
  name: string;
  slug: string;
  price: number;
  sessions_limit: number | null;
  tagline: string;
  is_active: boolean;
  sort_order: number;
  color_theme?: string;
  icon?: string;
  services: SubscriptionPlanService[];
  perks: PlanPerkItem[];
}

export interface CustomerSubscription {
  plan: string;
  status: string;
  sessions_used: number;
  sessions_limit: number | null;
  current_period_end?: string | null;
}

export type POSPaymentMethod = 'cash' | 'card' | 'ewallet';
export type NotificationChannel = 'in_app' | 'web_push';
