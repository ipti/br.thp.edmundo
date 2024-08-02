import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import { CreateReapplicationRequest } from "./request";
import { CreateReapplication } from "./types";
import queryClient from "../../../../service/reactquery";

export const CreateReapplicationController = () => {
  const history = useNavigate();

  const CreateReapplicationMutation = useMutation(
    (data: CreateReapplication) => CreateReapplicationRequest(data),
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
       history("/reaplicacoes")
      },

    }
  );

  return {
    CreateReapplicationMutation
  }
}