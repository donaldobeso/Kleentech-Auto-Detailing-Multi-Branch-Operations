import type { PlanPerkItem } from '../components/admin/subscriptions/PlanConfigEditor'

export interface SubRecord {
    id: string
    plan: string
    status: string
    sessions_used: number
    sessions_limit: number | null
    amount_paid: number | null
    current_period_start: string
    current_period_end: string
    customer: { full_name: string; email?: string } | null
    branch: { name: string } | null
}

export interface PlanService {
    service_id: string
    service_quota: number | null
    service: { name: string }
}

export interface PlanConfig {
    id: string
    name: string
    slug: string
    price: number
    sessions_limit: number | null
    tagline: string
    is_active: boolean
    sort_order: number
    color_theme?: string
    icon?: string
    services: PlanService[]
    perks: PlanPerkItem[]
}

export interface BranchOption {
    id: string
    name: string
}

export interface ServiceOption {
    id: string
    name: string
}

export const PLAN_DOT: Record<string, string> = {
    shine: 'bg-sky-400',
    detail: 'bg-violet-400',
    elite: 'bg-amber-400',
}
