export interface UpdateUser {
  name?: string,
  email?: string,
  birthday?: Date | string,
  color_race?: number | undefined,
  sex?: number | undefined,
  zone?: number | undefined,
  deficiency?: boolean | undefined,
  cpf?: string,
  responsable_telephone?: string,
  responsable_name?: string,
  responsable_cpf?: string,
  kinship?: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  active: boolean
  role: string
  registration: any[]
  stamps_user: StampUserArray
}

export type StampUserArray = StampUser[]

export interface StampUser {
  id: number
  createdAt: string
  updatedAt: string
  user_fk: number
  stamps_fk: number
  stamps: Stamps
}

export interface Stamps {
  id: number
  name: string
  img_url: string
  createdAt: string
  updatedAt: string
}


export interface ChartUserType {
  completed_user_activities: number
  activities_pending: number
  code_activities: number
  quiz_activities: number
}


export interface AddStampsUser {
  idStamp: number
  idUser: number
}