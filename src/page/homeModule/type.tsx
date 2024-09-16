export interface JoinTheClassroom {
    idUser : number
    idClassroom: number
  }
  

  export interface Module {
    id: number
    name: string
    description: string
    createdAt: string
    updatedAt: string
    classes: Class[]
  }
  
  export interface Class {
    id: number
    name: string
    necessary_material: string
    objective: string
    duration: number
    active: boolean
    createdAt: string
    updatedAt: string
    moduleId: number
    activities: Activity[]
  }
  
  export interface Activity {
    id: number
    name: string
    description: any
    type_activities: string
    points_activities: number
    difficult: string
    time_activities: number
    createdAt: string
    updatedAt: string
    classesId: number
  }
  