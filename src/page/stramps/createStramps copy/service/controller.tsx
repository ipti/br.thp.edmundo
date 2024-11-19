import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import queryClient from "../../../../service/reactquery";
import { UpdateStampsRequest} from "./request";



export const UpdateStampsController = () => {

  const UpdateStampsRequestMutation = useMutation(
    ({data, id}:{data: any, id: number}) => UpdateStampsRequest(data, id),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsFindStamps")
        Swal.fire({
          icon: 'success',
          title: "Turma alterada com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
      })
      },

    }
  );


  return {
    UpdateStampsRequestMutation
  }
}