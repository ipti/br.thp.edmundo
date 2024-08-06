import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "./request";
import { LoginTypes } from "./types";
import Swal from "sweetalert2";
import { idReapplication, idUser, login, logout, menuItem } from "../../../service/localstorage";
import styles from "../../../Styles";

export const LoginController = () => {
  const history = useNavigate();

  const LoginRequestMutation = useMutation(
    (data: LoginTypes) => LoginRequest(data),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        logout()
        login(data.data?.access_token);
        idUser(data.data?.userRegistered?.id);
        idReapplication(data.data?.reapplication[0]?.id)
        history("/");
        menuItem("2");
        console.log(data)
        // window.location.reload();
      },

    }
  );

  return {
    LoginRequestMutation
  }
}