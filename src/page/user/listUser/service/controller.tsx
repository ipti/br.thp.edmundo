import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import queryClient from "../../../../service/reactquery";
import { DeleteUserRequest } from "./request";

export const DeleteUserController = () => {

  const DeleteUserRequestMutation = useMutation(
    (id: number) => DeleteUserRequest(id),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsFindUser")
      },

    }
  );

  return {
    DeleteUserRequestMutation
  }
}