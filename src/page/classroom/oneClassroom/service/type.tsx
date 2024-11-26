export interface ClassroomOne {
    classroom: Classroom
    owner: Owner
  }
  
  export interface Classroom {
    id: number
    name: string
    owner_user_fk: number
    reapplication_fk: number
    isOpen: boolean
    active: boolean
    createdAt: string
    updatedAt: string
    _count: Count
  }
  
  export interface Count {
    user: number
  }
  
  export interface Owner {
    id: number
    name: string
    email: string
  }


  export interface UpdateClassroom {
    name: string
    isOpen: boolean
  }
  

  export interface ChartType {
    completed_user_activities: number
    activities_pending: number
    code_activities: number
    quiz_activities: number
    media_notas: number
  }
  
  export interface StampsType {
    id: number
    name: string
    img_url: string
    description: string
    type: string
    createdAt: string
    updatedAt: string
  }
  

  export interface DistributeStamps {
    items?: Item[]
    idStamps?: number
  }

  export interface MigrateMeuBen {
    year?: number
    idClassroom?: number,
    project?: number
    name?: string
  }
  
  export interface Item {
    idUser: number
  }
  

  export type ProjectsTsArray = ProjectsTs[]

export interface ProjectsTs {
  name: string
  id: number
  project: Project[]
}

export interface Project {
  id: number
  name: string
  active: boolean
  approval_percentage: number
  ruler_url?: string
  avartar_url: any
  social_technology_id: number
  createdAt: string
  updatedAt: string
}
