export interface PaymentRecord {
    id: string
    amount: number
    status: string
    created_at: string
    payment_category?: 'booking' | 'subscription'
    customer?: { full_name: string }
    subscription?: {
        id: string
        plan: string
        customer?: { full_name: string }
    }
    branch?: { name: string }
    booking?: {
        id: string
        payment_method: string
        payment_type?: string
        reservation_fee?: number
        customer?: { full_name: string }
        service?: { name: string }
        booking_services?: Array<{ service?: { name: string } }>
    }
}

export interface LedgerBranch {
    id: string
    name: string
}

export type LedgerSortOption = 'date-desc' | 'date-asc' | 'amount-desc' | 'amount-asc'
