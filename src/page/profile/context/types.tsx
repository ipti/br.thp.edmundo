import { Dispatch, SetStateAction } from "react";
import { UpdateUser, User } from "../service/types";

export interface UpdateUserContextType {
    initialValue: UpdateUser;
    UpdateUser: (body: UpdateUser) => void;
    user: User | undefined;
    isLoading: boolean;
    isError: boolean;
    setFile: Dispatch<SetStateAction<File[] | undefined>>
    file: File[] | undefined
}