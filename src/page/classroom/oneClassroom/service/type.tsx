export interface ClassroomOne {
    classroom: Classroom
    owner: Owner
  }
  
  export interface Classroom {
    id: number
    name: string
    owner_user_fk: number
    reapplication_fk: number
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
  