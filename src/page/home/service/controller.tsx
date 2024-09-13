import { useMutation } from "react-query";
import Swal from "sweetalert2";
import { JoinTheClassroomRequest } from "./request";
import { JoinTheClassroom } from "../type";
import styles from "../../../Styles";
import queryClient from "../../../service/reactquery";

export const HomeController = () => {


    const JoinTheClassroomMutation = useMutation(

        (data: JoinTheClassroom) => JoinTheClassroomRequest(data),
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
            },

        }
    );

   
    

    return {
        JoinTheClassroomMutation
    }
}