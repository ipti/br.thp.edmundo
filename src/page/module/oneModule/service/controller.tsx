import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import queryClient from "../../../../service/reactquery";
import { DeleteActivitiesRequest, DeleteClassesRequest } from "./request";

export const OneModuleController = () => {


    const DeleteClassesRequestMutation = useMutation(
        (id: number) => DeleteClassesRequest(id),
        {
          onError: (error: any) => {
            Swal.fire({
              icon: 'error',
              title: error.response.data.message,
              confirmButtonColor: styles.colors.colorPrimary,
            })
          },
          onSuccess: (data) => {
            queryClient.refetchQueries("useRequestsFindOneModuleBff")
          },
    
        }
      );

      const DeleteActivitiesRequestMutation = useMutation(
        (id: number) => DeleteActivitiesRequest(id),
        {
          onError: (error: any) => {
            Swal.fire({
              icon: 'error',
              title: error.response.data.message,
              confirmButtonColor: styles.colors.colorPrimary,
            })
          },
          onSuccess: (data) => {
            queryClient.refetchQueries("useRequestsFindOneModuleBff")
          },
    
        }
      );

    return {
        DeleteClassesRequestMutation, DeleteActivitiesRequestMutation
    }
}