export interface UpdateUser {
  name?: string,
  email?: string,
  birthday?: Date | string,
  color_race?: number | undefined,
  sex?: number | undefined,
  zone?: number | undefined,
  deficiency?: boolean | undefined,
  cpf?: string,
  responsable_telephone?: string,
  responsable_name?: string,
  responsable_cpf?: string,
  kinship?: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  active: boolean
  role: string
  registration: any[]
  tags_users: TagUsers
  stamps_user: StampUserArray

}

export type StampUserArray = StampUser[]

export interface StampUser {
  id: number
  createdAt: string
  updatedAt: string
  user_fk: number
  stamps_fk: number
  stamps: Stamps
}

export interface Stamps {
  id: number
  name: string
  img_url: string
  createdAt: string
  updatedAt: string
}


export type TagUsers = TagUser[]

export interface TagUser {
  id: number
  user_fk: number
  tag_fk: number
  tag: Tag
}



export type Tags = Tag[]

export interface Tag {
  id: number
  content: string
  type: string
}

interface TagDto {
  idTag: number;
}

export interface CreateUserTagsDto {
  items: TagDto[];
}