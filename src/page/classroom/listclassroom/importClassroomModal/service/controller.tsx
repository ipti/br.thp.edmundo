import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "../../../../../Styles";
import queryClient from "../../../../../service/reactquery";
import { MigrationClassroomRequest } from "./request";

export const ListClassroomController = () => {
  const history = useNavigate();

   

  const MigrateClassroomMutation = useMutation(
    (data: {idClassroom: number}) => MigrationClassroomRequest(data),
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
       history("/turmas")
      },

    }
  );

  return {
    MigrateClassroomMutation
  }
}