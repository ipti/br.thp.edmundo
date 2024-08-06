import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../Styles";
import queryClient from "../../../service/reactquery";
import { UpdateUserRequest } from "./request";
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

  return {
    UpdateUserMutation
  }
}