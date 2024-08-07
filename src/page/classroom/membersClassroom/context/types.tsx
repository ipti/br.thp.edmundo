
export interface MembersClassroomContextType {
    classroomMembersList: ClassroomMembers | undefined;
    isLoading: boolean;
    isError: boolean;
}

export interface ClassroomMembers {
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
    role: string
  }
  
  export interface Owner {
    id: number
    name: string
    email: string
  }
  