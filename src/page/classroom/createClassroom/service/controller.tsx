import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import queryClient from "../../../../service/reactquery";
import styles from "../../../../Styles";
import { CreateClassroomRequest } from "./request";
import { CreateClassroom } from "./types";

export const CreateClassroomController = () => {
  const history = useNavigate();

  const CreateClassroomMutation = useMutation(
    (data: CreateClassroom) => CreateClassroomRequest(data),
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
    CreateClassroomMutation
  }
}