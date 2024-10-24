import { useMutation } from "react-query";
import styles from "../../../Styles";
import queryClient from "../../../service/reactquery";
import Swal from "sweetalert2";
import { CreateResponse, JoinTheActivitiesUser, PropsRating } from "../type";
import { AddActivitiesUserRequest, AddRatingActivitiesRequest, AddResponseActivitiesRequest, FinishActivitiesUserRequest } from "./request";

export const HomeActivitiesController = () => {


    
    const AddResponseActivitiesMutation = useMutation(

        (data: CreateResponse) => AddResponseActivitiesRequest(data),
        {
            onError: (error: any) => {
                Swal.fire({
                    icon: 'error',
                    title: error.response.data.message,
                    confirmButtonColor: styles.colors.colorPrimary,
                })
            },
            onSuccess: (data) => {
                queryClient.refetchQueries("useRequestActivitiesOne")
              
            },

        }
    );

    const AddRatingActivitiesMutation = useMutation(

        ({data, id}:{data: PropsRating, id: number}) => AddRatingActivitiesRequest(id, data),
        {
            onError: (error: any) => {
                Swal.fire({
                    icon: 'error',
                    title: error.response.data.message,
                    confirmButtonColor: styles.colors.colorPrimary,
                })
            },
            onSuccess: (data) => {
                queryClient.refetchQueries("useRequestActivitiesOne")
              
            },

        }
    );

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
                queryClient.refetchQueries("useRequestActivitiesOne")
                window.location.reload()
            },

        }
    );

    const FinishActivitiesUserMutation = useMutation(

        ({file, id}:{id: number, file: any}) => FinishActivitiesUserRequest(id, file),
        {
            onError: (error: any) => {
                Swal.fire({
                    icon: 'error',
                    title: error.response.data.message,
                    confirmButtonColor: styles.colors.colorPrimary,
                })
            },
            onSuccess: (data) => {
                queryClient.refetchQueries("useRequestActivitiesOne")
              
            },
        }
    );

    return {
        JoinTheActivitiesUserMutation, FinishActivitiesUserMutation, AddResponseActivitiesMutation, AddRatingActivitiesMutation
    }
}