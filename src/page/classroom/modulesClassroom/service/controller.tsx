import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import queryClient from "../../../../service/reactquery";
import { AddModuleClassroom } from "../type";
import { AddModuleClassroomRequest, UpdateModuleClassroomRequest } from "./request";

export const ClassroomModuleController = () => {


  const AddModuleClassroomMutation = useMutation(
    (data: AddModuleClassroom) => AddModuleClassroomRequest(data),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListModuleClassroom")
      //  history("/modulos")
      },

    }
  );


  const UpdateModuleClassroomMutation = useMutation(
    ({body, id}: {body: {active: boolean}, id: number}) => UpdateModuleClassroomRequest(body, id),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListModuleClassroom")
      //  history("/modulos")
      },

    }
  );
  return {
    AddModuleClassroomMutation, UpdateModuleClassroomMutation
  }
}