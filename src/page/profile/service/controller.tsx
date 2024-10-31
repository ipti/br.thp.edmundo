import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../Styles";
import queryClient from "../../../service/reactquery";
import { AddTagUser, requestUpdateAvatarRegistration, UpdateUserRequest } from "./request";
import { UpdateUser } from "./types";

export const UpdateUserController = () => {

  const UpdateUserMutation = useMutation(
    (data: UpdateUser) => UpdateUserRequest(data),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListReapplication")
      },

    }
  );

  const requestChangeAvatarRegistrationMutation = useMutation(
    ({  id, file }: { id: number, file: File }) =>
      requestUpdateAvatarRegistration(id, file),
    {
      onError: (error) => { },
      onSuccess: (data) => {
        Swal.fire({
          icon: "success",
          title: "Alteração realizada com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },
    }
  );

  const requestAddTagUserMutation = useMutation(
    (id: number) =>
      AddTagUser(id),
    {
      onError: (error) => { },
      onSuccess: (data) => {
        Swal.fire({
          icon: "success",
          title: "Alteração realizada com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },
    }
  );

  return {
    UpdateUserMutation, requestChangeAvatarRegistrationMutation, requestAddTagUserMutation
  }
}