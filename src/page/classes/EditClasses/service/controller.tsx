import { useMutation } from "react-query";
import Swal from "sweetalert2";
import queryClient from "../../../../service/reactquery";
import styles from "../../../../Styles";
import { EditClasses } from "../../type";
import { EditClassesRequest } from "./request";

export const EditClassesController = () => {

  const EditClassesMutation = useMutation(
    ({data, id}:{data: EditClasses, id: number}) => EditClassesRequest(data, id),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data, pd) => {
        queryClient.refetchQueries("useRequestsOneClasses")
        Swal.fire({
          icon: 'success',
          title: "Salvo com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
    }
  );

  return {
    EditClassesMutation
  }
}