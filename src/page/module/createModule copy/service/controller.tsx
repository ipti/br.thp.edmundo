import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import queryClient from "../../../../service/reactquery";
import styles from "../../../../Styles";
import { EditModuleRequest } from "./request";
import { CreateModule } from "../../type";

export const EditModuleController = () => {
  const history = useNavigate();

  const EditModuleMutation = useMutation(
    (data: CreateModule) => EditModuleRequest(data),
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
    EditModuleMutation
  }
}