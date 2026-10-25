export interface BranchMetric {
    id: string
    name: string
    mgr: string
    rev: string
    rawRev: number
    status: 'optimal' | 'warning' | 'critical'
}

export interface HistoricalMetric {
    month: string
    revenue: number
}

export interface DashboardMetricsResult {
    allTimeRevenue: number
    totalRevenue: number
    activeAppointments: number
    branchesData: BranchMetric[]
    historicalData: HistoricalMetric[]
}
