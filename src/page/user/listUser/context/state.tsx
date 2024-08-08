import { useEffect, useState } from "react";
import { useFetchRequestFindUser } from "../service/query";
import { User } from "../service/type";

export const ListUserState = () => {
    const [users, setusers] = useState<User[] | undefined>()


    const { data: userRequest, isLoading, isError } = useFetchRequestFindUser();


    useEffect(() => {
        if (userRequest) {
            setusers(userRequest)
        }
    }, [userRequest])


    return {users, isLoading,isError }
}