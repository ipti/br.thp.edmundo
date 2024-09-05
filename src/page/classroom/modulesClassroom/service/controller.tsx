import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import queryClient from "../../../../service/reactquery";
import { AddAtivitiesClassroom, AddClasseClassroom, AddModuleClassroom } from "../type";
import { AddAtivitiesClassroomRequest, AddClasseClassroomRequest, AddModuleClassroomRequest, RemoveModuleClassroomRequest, UpdateAtivitiesClassroomRequest, UpdateclasseClassroomRequest, UpdateModuleClassroomRequest } from "./request";

export const ClassroomModuleController = () => {


  const AddModuleClassroomMutation = useMutation(
    (data: AddModuleClassroom) => AddModuleClassroomRequest(data),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListModuleClassroom")
        queryClient.refetchQueries("useRequestsListModule")
        
        //  history("/modulos")
      },

    }
  );

  const RemoveModuleClassroomMutation = useMutation(
    (data: AddModuleClassroom) => RemoveModuleClassroomRequest(data),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListModuleClassroom")
        queryClient.refetchQueries("useRequestsListModule")
        //  history("/modulos")
      },

    }
  );


  const UpdateModuleClassroomMutation = useMutation(
    ({ body, id }: { body: { active: boolean }, id: number }) => UpdateModuleClassroomRequest(body, id),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListModuleClassroom")
        //  history("/modulos")
      },

    }
  );


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
        queryClient.refetchQueries("useRequestsListModuleClassroom")
        //  history("/modulos")
      },

    }
  );


  const UpdateClasseClassroomMutation = useMutation(
    ({ body, id }: { body: { active: boolean }, id: number }) => UpdateclasseClassroomRequest(body, id),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListModuleClassroom")
        //  history("/modulos")
      },

    }
  );


  const AddActivitiesClassroomMutation = useMutation(
    (data: AddAtivitiesClassroom) => AddAtivitiesClassroomRequest(data),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListModuleClassroom")
        //  history("/modulos")
      },

    }
  );


  const UpdateActivitiesClassroomMutation = useMutation(
    ({ body, id }: { body: { active: boolean }, id: number }) => UpdateAtivitiesClassroomRequest(body, id),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        })
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("useRequestsListModuleClassroom")
        //  history("/modulos")
      },

    }
  );
  return {
    AddModuleClassroomMutation, UpdateModuleClassroomMutation, AddClasseClassroomMutation, UpdateClasseClassroomMutation,
    AddActivitiesClassroomMutation,
    UpdateActivitiesClassroomMutation,
    RemoveModuleClassroomMutation
  }
}