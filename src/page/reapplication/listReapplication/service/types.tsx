export type ReapplicationList = Reapplication[]

export interface Reapplication {
  id: number
  name: string
  active: boolean
  createdAt: string
  updatedAt: string
  _count: Count
}

export interface Count {
  user_reapplication: number
  classrooms: number
}
