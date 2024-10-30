import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import queryClient from "../../../../service/reactquery";
import { CreateTagsRequest, DeleteTagsRequest, UpdateTagsRequest } from "./request";
import { CreateTagsTypes } from "./types";

export const CreateTagsController = () => {

  const CreateTagsRequestMutation = useMutation(
    (data: CreateTagsTypes) => CreateTagsRequest(data),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListTags")
      },

    }
  );

  const UpdateTagsRequestMutation = useMutation(
    ({data, id}:{data: CreateTagsTypes, id: number}) => UpdateTagsRequest(data, id),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListTags")
      },

    }
  );

  const DeleteTagsRequestMutation = useMutation(
    ( id: number) => DeleteTagsRequest(id),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListTags")
      },

    }
  );

  return {
    CreateTagsRequestMutation, UpdateTagsRequestMutation, DeleteTagsRequestMutation
  }
}