import { Dispatch, SetStateAction } from "react"
import { CreateMetricGroup, UpdateMetricGroup } from "../service/types"

export interface GroupOneContextTypes {
    UpdateGroup: (body: any) => void
    CreateMetricGroup: (body: CreateMetricGroup) => void
    UpdateGroupMetric: (body: UpdateMetricGroup, id: number) => void
    setFile: Dispatch<SetStateAction<File[] | undefined>>
    file: File[] | undefined
    GroupOne: Group | undefined
    isLoading: boolean
}

export interface Group {
    id: number
    name: string
    createdAt: string
    updatedAt: string
    activities_fk: any
    metric_group: any[]
  }
  