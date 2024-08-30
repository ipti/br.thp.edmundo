import { useEffect, useState } from "react";
import { useFetchRequestFindUser } from "../service/query";
import { User } from "../service/type";
import { DeleteUserController } from "../service/controller";

export const ListUserState = () => {
    const [users, setusers] = useState<User[] | undefined>()

    const { DeleteUserRequestMutation } = DeleteUserController()

    const { data: userRequest, isLoading, isError } = useFetchRequestFindUser();


    const DeleteUser = (id: number) => {
        DeleteUserRequestMutation.mutate(id)
    }


    useEffect(() => {
        if (userRequest) {
            setusers(userRequest)
        }
    }, [userRequest])


    return { users, isLoading, isError, DeleteUserRequestMutation, DeleteUser }
}