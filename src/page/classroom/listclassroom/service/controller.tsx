import { useMutation } from "react-query";
import Swal from "sweetalert2";
import queryClient from "../../../../service/reactquery";
import styles from "../../../../Styles";
import { JoinTheClassroomRequest } from "./request";
import { JoinTheClassroom } from "./types";

export const ListClassroomController = () => {


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