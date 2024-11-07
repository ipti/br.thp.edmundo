import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import queryClient from "../../../../service/reactquery";
import { DeleteStampsRequest } from "./request";

export const DeleteStampsController = () => {

  const DeleteStampsRequestMutation = useMutation(
    (id: number) => DeleteStampsRequest(id),
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
    DeleteStampsRequestMutation
  }
}