import { useMutation } from "react-query";
import { ViewdClassesUserRequest } from "./request";
import { ViewdClassesProps } from "../type";
import Swal from "sweetalert2";
import styles from "../../../Styles";
import queryClient from "../../../service/reactquery";

export const HomeModuleController = () => {

    const ViewdClassesUsersMutation = useMutation(

        (data: ViewdClassesProps) => ViewdClassesUserRequest(data),
        {
            onError: (error: any) => {
                Swal.fire({
                    icon: 'error',
                    title: error.response.data.message,
                    confirmButtonColor: styles.colors.colorPrimary,
                })
            },
            onSuccess: (data) => {
                queryClient.refetchQueries("useRequestsListClassroom")
                Swal.fire({
                    icon: 'success',
                    title: "Usuário entrou na turma!",
                    confirmButtonColor: styles.colors.colorPrimary,
                })
                window.location.reload()
            },

        }
    );


    return {
        ViewdClassesUsersMutation
    }

}