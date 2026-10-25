import type { User, Session } from '@supabase/supabase-js'

export type UserRole = 'customer' | 'receptionist' | 'technician' | 'manager' | 'super_admin'

export interface UserProfile {
  id: string
  full_name: string
  phone_number: string
  avatar_url: string
  role: UserRole
  branch_id: string | null
  is_active: boolean
  passkey_registered: boolean
  email_verified: boolean
  failed_attempts: number
  locked_until: string | null
  viber?: string
  preferred_payment_method?: string
  employee_id?: string | null
  created_at: string
  updated_at: string
}

export interface SignUpData {
  email: string
  password: string
  full_name: string
  phone_number: string
}

export interface AuthContextType {
  user: User | null
  profile: UserProfile | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string, turnstileToken?: string) => Promise<{ error: string | null }>
  signUp: (data: SignUpData) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{ error: string | null }>
  updatePassword: (password: string) => Promise<{ error: string | null }>
  signInWithGoogle: () => Promise<{ error: string | null }>
  refreshProfile: () => Promise<void>
}
