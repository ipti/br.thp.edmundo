import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import queryClient from "../../../../service/reactquery";
import styles from "../../../../Styles";
import { CreateModuleRequest } from "./request";
import { CreateModule } from "./types";

export const CreateModuleController = () => {
  const history = useNavigate();

  const CreateModuleMutation = useMutation(
    (data: CreateModule) => CreateModuleRequest(data),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListClassroom")
       history("/turmas")
      },

    }
  );

  return {
    CreateModuleMutation
  }
}