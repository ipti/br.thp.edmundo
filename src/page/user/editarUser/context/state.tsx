import { useEffect, useState } from "react";
import { useFetchRequestFindUser } from "../service/query";
import { EditUserController } from "../service/controller";
import { useParams } from "react-router-dom";
import { User } from "./types";
import { UpdateUser } from "../service/type";

export const EditUserState = () => {

    const {id} = useParams()
    const [users, setusers] = useState<User | undefined>()

    const { UpdateUserMutation } = EditUserController()

    const UpdateUser = (body: {data: UpdateUser, id: string}) => {
        UpdateUserMutation.mutate(body)

    }

    const { data: userRequest, isLoading, isError } = useFetchRequestFindUser(id);

    useEffect(() => {
        if (userRequest) {
            setusers(userRequest)
        }
    }, [userRequest])


    return { users, isLoading, isError, UpdateUser }
}