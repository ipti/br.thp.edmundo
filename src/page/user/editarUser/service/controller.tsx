import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import queryClient from "../../../../service/reactquery";
import {
  AddUserReapplicationRequest,
  RemoveUserReapplicationRequest,
  ResetPasswordRequest,
  UpdateUserRequest,
} from "./request";
import { UpdateUser } from "./type";

export const EditUserController = () => {
  const UpdateUserMutation = useMutation(
    ({ data, id }: { data: UpdateUser; id: string }) =>
      UpdateUserRequest(data, id),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },
      onSuccess: (data) => {
        Swal.fire({
          icon: "success",
          title: "Edição feita com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },
    }
  );

  const resetPasswordMutation = useMutation(
    ({ idUser, password }: { idUser: number; password: string }) =>
      ResetPasswordRequest(idUser, password),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: "error",
          title: error.response?.data?.message ?? "Erro ao resetar senha",
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },
      onSuccess: () => {
        Swal.fire({
          icon: "success",
          title: "Senha alterada com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },
    }
  );

  const addUserReapplicationMutation = useMutation(
    ({ idUser, idReapplication }: { idUser: number; idReapplication: number }) =>
      AddUserReapplicationRequest(idUser, idReapplication),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: "error",
          title: error.response?.data?.message ?? "Erro ao vincular reaplicação",
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },
      onSuccess: () => {
        Swal.fire({
          icon: "success",
          title: "Reaplicação vinculada com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        });
        queryClient.refetchQueries("useRequestsFindUser");
      },
    }
  );

  const removeUserReapplicationMutation = useMutation(
    ({ idUser, idReapplication }: { idUser: number; idReapplication: number }) =>
      RemoveUserReapplicationRequest(idUser, idReapplication),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: "error",
          title: error.response?.data?.message ?? "Erro ao remover reaplicação",
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },
      onSuccess: () => {
        Swal.fire({
          icon: "success",
          title: "Reaplicação removida com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        });
        queryClient.refetchQueries("useRequestsFindUser");
      },
    }
  );

  return {
    UpdateUserMutation,
    resetPasswordMutation,
    addUserReapplicationMutation,
    removeUserReapplicationMutation,
  };
};
