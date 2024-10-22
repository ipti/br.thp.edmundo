import { Form } from "../activities/type"

export interface JoinTheActivitiesUser {
    idActivities : number
    idClassroom: number
  }
  

  export interface Activities {
    id: number
  name: string
  description: string
  expected_return: string
  type_activities: string
  points_activities: number
  difficult: any
  time_activities: number
  createdAt: string
  updatedAt: string
  classesId: number
  form: Form
  user_activities: UserActivity[]
}

export interface UserActivity {
  id: number
  status: string
  createdAt: string
  updatedAt: string
  activities_fk: number
  user_classroomId: number
  user_avaliation: any
}