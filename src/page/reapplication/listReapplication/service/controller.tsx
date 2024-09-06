import { useMutation } from "react-query";
import { DeleteReaplicationRequest } from "./request";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import queryClient from "../../../../service/reactquery";

export const ListReapplicationController = () => {
    const DeleteReapplicationRequestMutation = useMutation(
        (id: number) => DeleteReaplicationRequest(id),
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
            },

        }
    );

    return { DeleteReapplicationRequestMutation }
}