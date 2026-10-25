export interface PlanPerkItem {
  id: string
  label: string
  is_coming_soon: boolean
  sort_order: number
}

export interface PlanServiceConfig {
  service_id: string
  service_quota: number | null // null = unlimited within plan pool
}

export interface PlanEditData {
  id?: string
  name: string
  slug: string
  price: number
  sessions_limit: number | null
  tagline: string
  is_active: boolean
  color_theme?: string
  icon?: string
  perks: PlanPerkItem[]
  services: PlanServiceConfig[]
}

export interface PlanConfigEditorProps {
  plan?: PlanEditData
  allServices: Array<{ id: string; name: string }>
  onSave: (data: PlanEditData) => Promise<void>
  onCancel: () => void
  saving: boolean
  isNew?: boolean
}
