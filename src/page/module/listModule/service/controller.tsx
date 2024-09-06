import { useMutation } from "react-query";
import { DeleteModuleRequest } from "./request";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import queryClient from "../../../../service/reactquery";

export const ListModuleController = () => {

  const DeleteModuleRequestMutation = useMutation(
    (id: number) => DeleteModuleRequest(id),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListModule")
      },

    }
  );

  return {
    DeleteModuleRequestMutation
  }
}