import { useMutation } from "react-query";
import Swal from "sweetalert2";
import styles from "../../../../Styles";
import queryClient from "../../../../service/reactquery";
import { RemoveMemberFromClassroomRequest } from "./request";

export const MembersClassroomController = () => {
  const RemoveMemberFromClassroomMutation = useMutation(
    ({ idUser, idClassroom }: { idUser: number; idClassroom: number }) =>
      RemoveMemberFromClassroomRequest({ idUser, idClassroom }),
    {
      onError: (error: any) => {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },
      onSuccess: (_, variables) => {
        queryClient.refetchQueries([
          "useRequestsOneClassroom",
          variables.idClassroom.toString(),
        ]);
        queryClient.refetchQueries("useRequestsFindOneClassroom");
        Swal.fire({
          icon: "success",
          title: "Membro removido da turma com sucesso!",
          confirmButtonColor: styles.colors.colorPrimary,
        });
      },
    }
  );

  return {
    RemoveMemberFromClassroomMutation,
  };
};
