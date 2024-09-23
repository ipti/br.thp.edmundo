export interface UserActivities {
  id: number
  status: string
  createdAt: string
  updatedAt: string
  activities_fk: number
  user_classroomId: number
  activities: Activities
  user_activities_archives: UserActivitiesArc[]
  user_classroom: UserClassroom
}

export interface Activities {
  name: string
  points_activities: number
}

export interface UserActivitiesArc {
  id: number
  createdAt: string
  updatedAt: string
  size: number
  original_name: string
  archive_url: string
  user_activities_fk: number
}

export interface UserClassroom {
  users: Users
}

export interface Users {
  name: string
  id: number
}
