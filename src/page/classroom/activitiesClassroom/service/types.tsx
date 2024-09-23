export interface ClassroomActivities {
  id: number
  name: string
  owner_user_fk: number
  reapplication_fk: number
  isOpen: boolean
  active: boolean
  createdAt: string
  updatedAt: string
  classroom_activities: ClassroomActivity[]
}

export interface ClassroomActivity {
  id: number
  active: boolean
  activities_fk: number
  classroom_fk: number
  activities: Activities
}

export interface Activities {
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
}

export interface UserActivity {
  id: number
  status: string
  createdAt: string
  updatedAt: string
  activities_fk: number
  user_classroomId: number
  user_classroom: UserClassroom
}

export interface UserClassroom {
  users: Users
}

export interface Users {
  name: string
  id: number
}
