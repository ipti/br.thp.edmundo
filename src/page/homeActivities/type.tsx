export interface JoinTheClassroom {
    idUser : number
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
  }
  