import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import { UpdateUserRequest } from "./request";
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

  return {
    UpdateUserMutation,
  };
};
