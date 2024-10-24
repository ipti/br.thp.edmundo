import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import queryClient from "../../../../service/reactquery";
import styles from "../../../../Styles";
import { CreateActivities } from "../../type";
import { CreateActivitiesRequest } from "./request";

export const CreateActivitiesController = () => {
  const history = useNavigate();


  const CreateActivitiesMutation = useMutation(
    (data: CreateActivities) => CreateActivitiesRequest(data),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data, va) => {
        queryClient.refetchQueries("useRequestsListModule")
        history("/atividades/"+data.data.id)
      },

    }
  );

  return {
    CreateActivitiesMutation
  }
}