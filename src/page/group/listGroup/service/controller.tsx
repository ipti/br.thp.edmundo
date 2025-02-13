import { useMutation } from "react-query";
import Swal from "sweetalert2";
import queryClient from "../../../../service/reactquery";
import styles from "../../../../Styles";
import { DeleteGroupRequest } from "./request";

export const ListGroupController = () => {



    const DeleteGroupRequestMutation = useMutation(
        (id: number) => DeleteGroupRequest(id),
        {
          onError: (error: any) => {
            Swal.fire({
              icon: 'error',
              title: error.response.data.message,
              confirmButtonColor: styles.colors.colorPrimary,
            })
          },
          onSuccess: (data) => {
            queryClient.refetchQueries("useRequestsListGroup")
          },
    
        }
      );
    

    return {
     DeleteGroupRequestMutation
    }
}