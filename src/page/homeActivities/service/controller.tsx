import { useMutation } from "react-query";
import styles from "../../../Styles";
import queryClient from "../../../service/reactquery";
import Swal from "sweetalert2";
import { JoinTheActivitiesUser } from "../type";
import { AddActivitiesUserRequest } from "./request";

export const HomeActivitiesController = () => {

    const JoinTheActivitiesUserMutation = useMutation(

        (data: JoinTheActivitiesUser) => AddActivitiesUserRequest(data),
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

    return {
        JoinTheActivitiesUserMutation
    }
}