import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import { CreateModule } from "../../type";
import { EditModuleRequest } from "./request";

export const EditModuleController = () => {

  const EditModuleMutation = useMutation(
    ({ data, id }: { data: CreateModule, id: number }) => EditModuleRequest(data, id),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        Swal.fire({
          icon: 'success',
          title: "Salvo com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },

    }
  );

  return {
    EditModuleMutation
  }
}