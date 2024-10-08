export interface JoinTheActivitiesUser {
    idActivities : number
    idClassroom: number
  }
  

  export interface Activities {
    id: number
    name: string
    description: string
    type_activities: string
    points_activities: number
    difficult: any
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
    usersId: any
    user_classroomId: number
    user_avaliation?: {
      total: number
    }
  }
  