import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import { CreateAvaliationRequest, UpdateAvaliationAllRequest, UpdateAvaliationRequest } from "./request";
import { CreateNotasAvaliationType } from "./types";

export const CreateAvaliationController = () => {

  const CreateAvaliationMutation = useMutation(
    ({data, id}:{data: CreateNotasAvaliationType, id: number}) => CreateAvaliationRequest(data, id),
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
          title: "Formato de avaliação Salva com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },

    }
  );

  const UpdateAvaliationMutation = useMutation(
    ({data, id}:{data: CreateNotasAvaliationType, id: number}) => UpdateAvaliationRequest(data, id),
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
          title: "Formato de avaliação Salva com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },

    }
  );

  const UpdateAvaliationAllMutation = useMutation(
    ({id}:{id: number}) => UpdateAvaliationAllRequest(id),
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
          title: "Notas Atualizadas com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },

    }
  );

  return {
    CreateAvaliationMutation, UpdateAvaliationMutation, UpdateAvaliationAllMutation
  }
}