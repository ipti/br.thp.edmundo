import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import queryClient from "../../../../service/reactquery";
import { CreateStampsRequest} from "./request";

export const CreateStampsController = () => {

  const CreateStampsRequestMutation = useMutation(
    (data: any) => CreateStampsRequest(data),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListTags")
      },

    }
  );


  return {
    CreateStampsRequestMutation
  }
}