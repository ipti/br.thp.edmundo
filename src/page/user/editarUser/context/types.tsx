import { UpdateUser } from "../service/type";

export interface EditUserContextType {
    users: User | undefined;
    isLoading: boolean;
    isError: boolean;
    UpdateUser: (body: {
        data: UpdateUser;
        id: string;
    }) => void
}

export interface User {
    id: number
    name: string
    email: string
    active: boolean
    tags_users: TagsUser[]
    stamps_user: any[]
    role: string
    registration: Registration[]
  }
  
  export interface TagsUser {
    id: number
    createdAt: string
    user_fk: number
    tag_fk: number
    tag: Tag
  }
  
  export interface Tag {
    id: number
    createdAt: string
    content: string
    type: string
  }
  
  export interface Registration {
    id: number
    avatar_url: string
    description: any
    birthday: string
    cpf: any
    sex: number
    color_race: number
    deficiency: boolean
    deficiency_description: any
    responsable_name: any
    responsable_cpf: any
    responsable_telephone: string
    zone: number
    kinship: string
    kinship_description: any
    createdAt: string
    updatedAt: string
    user_fk: number
  }
  