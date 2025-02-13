import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import queryClient from "../../../../service/reactquery";
import styles from "../../../../Styles";
import { CreateGroupRequest } from "./request";
import { CreateGroup } from "./types";

export const CreateGroupController = () => {
  const history = useNavigate();

  const CreateGroupMutation = useMutation(
    (data: CreateGroup) => CreateGroupRequest(data),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListClassroom");
        history("/grupos/"+data.data.id);
      },
    }
  );

  return {
    CreateGroupMutation,
  };
};
