export interface ViewdClassesProps {
  idUser: number
  idClasse: number
}

export interface JoinTheClassroom {
  idUser: number
  idClassroom: number
}

export interface Module {
  id: number
  name: string
  description: string
  createdAt: string
  updatedAt: string
  classes: Class[]
  classroom_module: ClassroomModuleArray
}

export type ClassroomModuleArray = ClassroomModule[]

export interface ClassroomModule {
  classroom: Classroom
}

export interface Classroom {
  user: User[]
}

export interface User {
  id: number
  createdAt: string
  updatedAt: string
  classroomId: number
  usersId: number
  users: Users
}

export interface Users {
  name: string
  registration: Registration[]
}

export interface Registration {
  avatar_url: any
}

export interface Class {
  id: number
  name: string
  content: string
  activities: Activity[]
  user_classes: UserClass[]

}

export interface UserClass {
  id: number
  user_fk: number
  classes_fk: number
  viewed: boolean
  createdAt: string
  updatedAt: string
}

export interface Activity {
  id: number
  name: string
  description?: string
  type_activities: string
  points_activities: number
  difficult: string
  time_activities: number
  createdAt: string
  updatedAt: string
  classesId: number
  user_activities: UserActivity[]
  classroom_activities: ClassroomActivity[]
}

export interface UserActivity {
  id: number
  status: string
  createdAt: string
  updatedAt: string
  activities_fk: number
  user_classroomId: number
}

export interface ClassroomActivity {
  id: number
  active: boolean
  activities_fk: number
  classroom_fk: number
  createdAt: string
}
