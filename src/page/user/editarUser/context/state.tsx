import { useEffect, useState } from "react";
import {
  useFetchRequestFindAllReapplications,
  useFetchRequestFindUser,
} from "../service/query";
import { EditUserController } from "../service/controller";
import { useParams } from "react-router-dom";
import { User } from "./types";
import { UpdateUser } from "../service/type";

export const EditUserState = () => {

    const {id} = useParams()
    const [users, setusers] = useState<User | undefined>()

    const {
      UpdateUserMutation,
      resetPasswordMutation,
      addUserReapplicationMutation,
      removeUserReapplicationMutation,
    } = EditUserController();

    const UpdateUser = (body: {data: UpdateUser, id: string}) => {
        UpdateUserMutation.mutate(body)

    }

    const ResetPassword = (idUser: number, password: string) => {
        resetPasswordMutation.mutate({ idUser, password })
    }

    const AddUserReapplication = (idUser: number, idReapplication: number) => {
        addUserReapplicationMutation.mutate({ idUser, idReapplication })
    }

    const RemoveUserReapplication = (idUser: number, idReapplication: number) => {
        removeUserReapplicationMutation.mutate({ idUser, idReapplication })
    }

    const { data: userRequest, isLoading, isError } = useFetchRequestFindUser(id);
    const { data: reapplicationsRequest } = useFetchRequestFindAllReapplications();

    useEffect(() => {
        if (userRequest) {
            setusers(userRequest)
        }
    }, [userRequest])

    const reapplications = reapplicationsRequest ?? []

    return {
      users,
      isLoading,
      isError,
      UpdateUser,
      ResetPassword,
      AddUserReapplication,
      RemoveUserReapplication,
      reapplications,
    }
}
