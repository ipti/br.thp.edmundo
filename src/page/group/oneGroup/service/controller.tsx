import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import queryClient from "../../../../service/reactquery";
import { CreateMetricGroupRequest, UpdateGroupRequest} from "./request";
import { CreateMetricGroup } from "./types";



export const UpdateGroupController = () => {

  const UpdateGroupRequestMutation = useMutation(
    ({data, id}:{data: any, id: number}) => UpdateGroupRequest(data, id),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsFindGroup")
        Swal.fire({
          icon: 'success',
          title: "Turma alterada com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
      })
      },

    }
  );

  const CreateMetricGroupRequestMutation = useMutation(
    ({data,}:{data: CreateMetricGroup}) => CreateMetricGroupRequest(data),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsOneGroup")
        Swal.fire({
          icon: 'success',
          title: "Metrica criada com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
      })
      },

    }
  );


  return {
    UpdateGroupRequestMutation, CreateMetricGroupRequestMutation
  }
}