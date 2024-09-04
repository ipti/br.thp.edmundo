import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import queryClient from "../../../../service/reactquery";
import styles from "../../../../Styles";
import { CreateActivitiesRequest } from "./request";
import { CreateActivities } from "../../type";

export const CreateActivitiesController = () => {
  const history = useNavigate();

  const {idModule} = useParams()

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
        history("/modulos/"+idModule)
      },

    }
  );

  return {
    CreateActivitiesMutation
  }
}