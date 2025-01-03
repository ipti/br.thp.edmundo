import { GroupList } from "../service/types";

export interface ListGroupContextType {
    groupList: GroupList | undefined;
    isLoading: boolean;
    isError: boolean;
    DeleteGroup: (id: number) => void
}

export interface Classroom {
    id: number
    name: string
    owner_user_fk: number
    reapplication_fk: number
    active: boolean
    createdAt: string
    updatedAt: string
    isOpen: boolean
  }