export type TsListType = TsType[]

export interface TsType {
  name: string
  id: number
  project: Project[]
}

export interface Project {
  id: number
  name: string
  active: boolean
  approval_percentage: number
  ruler_url?: string
  avartar_url: any
  social_technology_id: number
  createdAt: string
  updatedAt: string
}

export type ClassroomList = Clasroom[]

export interface Clasroom {
  name: string
  id: number
}

