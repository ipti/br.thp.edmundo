export type GroupList = Group[]

export interface Group {
  id: number
  name: string
  createdAt: string
  updatedAt: string
  activities_fk: any
  metric_group: any[]
}


export interface Count {
  user: number
}


export interface JoinTheGroup {
  idUser : number
  idGroup: number
}
