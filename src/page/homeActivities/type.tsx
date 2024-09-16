export interface JoinTheClassroom {
    idUser : number
    idClassroom: number
  }
  
  export type ClasroomUser = Classroom[]

export interface Classroom {
  id: number
  name: string
  owner_user_fk: number
  reapplication_fk: number
  isOpen: boolean
  active: boolean
  createdAt: string
  updatedAt: string
  classroom_module: ClassroomModule[]
}

export interface ClassroomModule {
  module: Module
  active: boolean
}

export interface Module {
  id: number
  name: string
  description: string
  createdAt: string
  updatedAt: string
}
