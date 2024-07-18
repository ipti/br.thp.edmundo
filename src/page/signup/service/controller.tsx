import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "../../../Styles";
import { CreateUserRequest } from "./request";
import { CreateUserTypes } from "./types";

export const CreateUserController = () => {
  const history = useNavigate();

  const CreateUserRequestMutation = useMutation(
    (data: CreateUserTypes) => CreateUserRequest(data),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        history("/login");
      },

    }
  );

  return {
    CreateUserRequestMutation
  }
}