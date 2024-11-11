import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import queryClient from "../../../../service/reactquery";
import styles from "../../../../Styles";
import { CreateActivities, CreateActivitiesTagsDto } from "../../type";
import { AddEditorImage, AddTagActivities, CreateActivitiesRequest } from "./request";

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

  const AddEditorImageMutation = useMutation(
    (body: FormData) =>
      AddEditorImage(body),
    {
      onError: (error) => { },
      onSuccess: (data) => {

        console.log(data)
        Swal.fire({
          icon: "success",
          title: "Alteração realizada com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },
    }
  );



  return {
    CreateActivitiesMutation, requestAddTagActivitiesMutation, AddEditorImageMutation
  }
}