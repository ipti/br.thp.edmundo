
export interface MembersClassroomContextType {
    classroomMembersList: ClassroomMembers | undefined;
    isLoading: boolean;
    isError: boolean;
    handleRemoveMember: (idUser: number) => void;
    isLoadingRemoveMember: boolean;
    teachers: TeacherUser[];
    handleAddTeacher: (idUser: number) => void;
    isLoadingAddTeacher: boolean;
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

  export type RegistartionAvatar = Root2[]

export interface Root2 {
  avatar_url: string
}

  
  export interface Users {
    name: string
    email: string
    role: string
    registration: RegistartionAvatar
  }
  
export interface Owner {
    id: number
    name: string
    email: string
  }

  export interface TeacherUser {
    id: number
    name: string
    email: string
    role: string
    active: boolean
  }
  
