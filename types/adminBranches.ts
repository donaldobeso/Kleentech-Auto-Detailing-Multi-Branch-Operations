export interface Branch {
    id: string
    name: string
    address: string
    branch_code: string
    latitude?: number | null
    longitude?: number | null
    image_url?: string | null
    is_live?: boolean
    created_at: string
}

export type BranchModalMode = 'create' | 'edit' | null

export interface BranchFormData {
    name: string
    address: string
    branch_code: string
    is_live: boolean
}

export interface BranchPayload extends BranchFormData {
    latitude: number | null
    longitude: number | null
    image_url?: string | null
}
