/**
 * Example file of typescript. For github language detector only.
 */

export type UserRole =
  | 'super_admin'
  | 'manager'
  | 'receptionist'
  | 'technician'
  | 'customer';

export type AccountStatus = 'active' | 'suspended' | 'deleted';

export type CustomerSegment =
  | 'active_member'
  | 'registered_client'
  | 'guest_walkin';

/**
 * 5-Tier Vehicle Classification (Implemented: 'motorcycle' ₱100/0.6x through 'truck_heavy' ₱500/1.8x)
 */
export type VehicleType =
  | 'motorcycle'
  | 'sedan_hatchback'
  | 'suv_crossover_pickup'
  | 'van_minibus'
  | 'truck_heavy';

export interface UserProfile {
  id: string;
  email: string | null;
  full_name: string | null;
  phone_number: string | null;
  role: UserRole;
  branch_id: string | null;
  status: AccountStatus;
  is_placeholder: boolean;
  must_change_password: boolean;
  no_show_count: number;
  avatar_url: string | null;
  terms_accepted_at?: string | null;
  privacy_accepted_at?: string | null;
  deleted_at?: string | null;
  created_at: string;
  updated_at: string;
}

export type BayType = 'general' | 'wash' | 'ceramic' | 'tint' | 'detailing';
export type BayStatus = 'available' | 'occupied' | 'maintenance';

export interface DetailingBay {
  id: string;
  branch_id: string;
  bay_number: number;
  name: string;
  bay_type: BayType;
  status: BayStatus;
  notes?: string | null;
}

export type BookingStatus =
  | 'pending_payment'
  | 'pending'
  | 'confirmed'
  | 'waiting'
  | 'in_progress'
  | 'completed'
  | 'cancelled'
  | 'no_show';

/**
 * 3-Stage Document Transformation Pipeline (Milestone M4 — In Progress)
 * Stage 1: JOB_ORDER (JO-#XXXXXXXX) -> Stage 2: BILLING_STATEMENT (INV-#XXXXXXXX) -> Stage 3: OFFICIAL_RECEIPT (OR-#XXXXXXXX)
 */
export type DocumentStage =
  | 'JOB_ORDER'
  | 'BILLING_STATEMENT'
  | 'OFFICIAL_RECEIPT';

export interface BookingServiceItem {
  id: string;
  booking_id: string;
  service_id: string;
  service_name: string;
  price_min: number;
  price_max: number;
  final_price: number | null;
  estimated_duration_minutes: number;
  covered_by_subscription: boolean;
  sort_order: number;
}

export interface BookingTechnicianCrewMember {
  booking_id: string;
  technician_id: string;
  full_name: string;
  is_lead: boolean;
  allocated_minutes: number;
}

export interface CustomerBooking {
  id: string;
  customer_id: string;
  vehicle_id: string | null;
  branch_id: string;
  technician_id: string | null;
  bay_number: number | null;
  scheduled_at: string;
  started_at: string | null;
  completed_at: string | null;
  status: BookingStatus;
  document_stage: DocumentStage;
  total_amount: number;
  reservation_fee: number;
  downpayment_amount: number;
  payment_method: 'online' | 'branch' | 'subscription' | 'walk_in';
  payment_type: 'full_upfront' | 'reservation_fee' | 'subscription' | 'branch';
  checklist_state: boolean[];
  notes: string | null;
  technician_notes: string | null;
  before_image_url: string | null;
  after_image_url: string | null;
  waiver_accepted_at?: string;
  services: BookingServiceItem[];
  crew: BookingTechnicianCrewMember[];
  vehicle: {
    make: string;
    model: string;
    year: number;
    color: string;
    plate_number: string;
    vehicle_type: VehicleType;
  };
}

export interface MembershipPlan {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  price: number;
  sessions_limit: number | null;
  eligible_vehicle_types: VehicleType[];
  covered_services: Array<{
    service_id: string;
    service_name: string;
    service_quota: number | null;
  }>;
  perks: Array<{
    label: string;
    is_coming_soon: boolean;
  }>;
}
