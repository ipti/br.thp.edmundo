import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import { CreateAvaliationRequest, UpdateAvaliationRequest } from "./request";
import { CreateNotasType } from "./types";

export const CreateAvaliationController = () => {

  const CreateAvaliationMutation = useMutation(
    ({data, id}:{data: CreateNotasType, id: number}) => CreateAvaliationRequest(data, id),
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
          icon: "success",
          title: "Nota Salva com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },

    }
  );

  const UpdateAvaliationMutation = useMutation(
    ({data, id}:{data: CreateNotasType, id: number}) => UpdateAvaliationRequest(data, id),
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
          icon: "success",
          title: "Nota Salva com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },

    }
  );

  return {
    CreateAvaliationMutation, UpdateAvaliationMutation
  }
}