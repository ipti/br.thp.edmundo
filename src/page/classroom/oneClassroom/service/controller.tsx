import { useMutation } from "react-query";
import Swal from "sweetalert2";
import queryClient from "../../../../service/reactquery";
import styles from "../../../../Styles";
import {  PutClassroomRequest } from "./request";
import { UpdateClassroom } from "./type";

export const OneClassroomController = () => {


    const PutClassroomMutation = useMutation(

        ({data, id}:{id: string,data: UpdateClassroom}) => PutClassroomRequest(id, data),
        {
            onError: (error: any) => {
                Swal.fire({
                    icon: 'error',
                    title: error.response.data.message,
                    confirmButtonColor: styles.colors.colorPrimary,
                })
            },
            onSuccess: (data) => {
                queryClient.refetchQueries("useRequestsFindOneClassroom")
                Swal.fire({
                    icon: 'success',
                    title: "Turma alterada com sucesso!",
                    confirmButtonColor: styles.colors.colorPrimary,
                })
            },

        }
    );

    return {
        PutClassroomMutation
    }
}