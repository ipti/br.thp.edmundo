import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import queryClient from "../../../../service/reactquery";
import { AddClasseClassroom } from "../type";
import { AddClasseClassroomRequest, UpdateclasseClassroomRequest } from "./request";

export const ClassroomClasseController = () => {


  const AddClasseClassroomMutation = useMutation(
    (data: AddClasseClassroom) => AddClasseClassroomRequest(data),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListClasseClassroom")
      //  history("/modulos")
      },

    }
  );


  const UpdateClasseClassroomMutation = useMutation(
    ({body, id}: {body: {active: boolean}, id: number}) => UpdateclasseClassroomRequest(body, id),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListClasseClassroom")
      //  history("/modulos")
      },

    }
  );
  return {
    AddClasseClassroomMutation, UpdateClasseClassroomMutation
  }
}