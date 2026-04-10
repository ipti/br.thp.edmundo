import { useMutation } from "react-query";
import Swal from "sweetalert2";
import queryClient from "../../../../service/reactquery";
import styles from "../../../../Styles";
import {  DitributeStampsRequest, MigrationMeuBenRequest, PutClassroomRequest, SyncClassroomMeuBenRequest } from "./request";
import { UpdateClassroom, DistributeStamps, MigrateMeuBen } from "./type";

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

    const MigrationMeuBenMutation = useMutation(

        ({data}:{data: MigrateMeuBen}) => MigrationMeuBenRequest(data),
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
                    title: "Migração feita com sucesso!",
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

    const SyncClassroomMutation = useMutation(
        (data: { idClassroomCoded: number; idClassroomMeuBen: number; idReaplication?: number }) => SyncClassroomMeuBenRequest(data),
        {
            onError: (error: any) => {
                Swal.fire({
                    icon: 'error',
                    title: error.response.data.message,
                    confirmButtonColor: styles.colors.colorPrimary,
                })
            },
            onSuccess: () => {
                queryClient.refetchQueries("useRequestsFindOneClassroom")
                Swal.fire({
                    icon: 'success',
                    title: "Sincronização concluída com sucesso!",
                    text: "Atenção: para usuários importados, o login é CPF e a senha é a data de nascimento no formato DDMMYYYY (dia, mês e ano).",
                    confirmButtonColor: styles.colors.colorPrimary,
                })
            },
        }
    );

    return {
        PutClassroomMutation, DistributeStampsMutation, MigrationMeuBenMutation, SyncClassroomMutation
    }
}
