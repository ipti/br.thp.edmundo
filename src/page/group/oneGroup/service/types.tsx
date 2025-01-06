export interface CreateMetricGroup {
    description: string,
    metric_percentange: number
    idGroup: number
}


export interface UpdateMetricGroup {
    description?: string,
    metric_percentange?: number
}