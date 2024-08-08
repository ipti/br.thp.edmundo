import { User } from "../service/type";

export interface ListUserContextType {
    users: User[] | undefined;
    isLoading: boolean;
    isError: boolean;
}