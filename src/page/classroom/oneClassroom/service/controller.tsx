import { useMutation } from "react-query";
import Swal from "sweetalert2";
import queryClient from "../../../../service/reactquery";
import styles from "../../../../Styles";
import {  DitributeStampsRequest, PutClassroomRequest } from "./request";
import { UpdateClassroom, DistributeStamps } from "./type";

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


    const DistributeStampsMutation = useMutation(

        (data: DistributeStamps) => DitributeStampsRequest(data),
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
                    title: "Selas distribuídos com sucesso!",
                    confirmButtonColor: styles.colors.colorPrimary,
                })
            },

        }
    );

    return {
        PutClassroomMutation, DistributeStampsMutation
    }
}