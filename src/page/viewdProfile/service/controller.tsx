import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../Styles";
import { requestUpdateAvatarRegistration } from "./request";

export const UpdateUserController = () => {

  

  const requestChangeAvatarRegistrationMutation = useMutation(
    ({  id, file }: { id: number, file: File }) =>
      requestUpdateAvatarRegistration(id, file),
    {
      onError: (error) => { },
      onSuccess: (data) => {
        Swal.fire({
          icon: "success",
          title: "Alteração realizada com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },
    }
  );


  return {
   requestChangeAvatarRegistrationMutation
  }
}