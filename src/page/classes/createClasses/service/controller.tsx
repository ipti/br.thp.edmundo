import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import queryClient from "../../../../service/reactquery";
import styles from "../../../../Styles";
import { CreateClassesRequest } from "./request";
import { CreateClasses } from "../../type";

export const CreateClassesController = () => {
  const history = useNavigate();

  const CreateClassesMutation = useMutation(
    (data: CreateClasses) => CreateClassesRequest(data),
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
        history("/modulos/1")
      },

    }
  );

  return {
    CreateClassesMutation
  }
}