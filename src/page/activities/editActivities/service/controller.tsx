import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import { CreateActivitiesTagsDto, EditActivities, PropsFormActivities } from "../../type";
import { CreateFormRequest, EditActivitiesRequest } from "./request";
import { AddTagActivities } from "../../createActivities/service/request";

export const EditActivitiesController = () => {

  const EditActivitiesMutation = useMutation(
    ({data, id}:{data: EditActivities, id: number}) => EditActivitiesRequest(data, id),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data, va) => {
        Swal.fire({
          icon: 'success',
          title: "Salvo com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },

    }
  );

  const CreateFormMutation = useMutation(
    ({data}:{data: PropsFormActivities}) => CreateFormRequest(data),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data, va) => {
        Swal.fire({
          icon: 'success',
          title: "Salvo com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        
        })
      },

    }
  );

  const requestAddTagActivitiesMutation = useMutation(
    (id: CreateActivitiesTagsDto) =>
      AddTagActivities(id),
    {
      onError: (error) => { },
      onSuccess: (data) => {
        Swal.fire({
          icon: "success",
          title: "Alteração realizada com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },
    }
  );

  return {
    EditActivitiesMutation, CreateFormMutation, requestAddTagActivitiesMutation
  }
}