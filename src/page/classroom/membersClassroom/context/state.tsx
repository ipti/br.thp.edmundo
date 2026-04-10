import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MembersClassroomController } from "../service/controller";
import { useFetchRequestMembersClassroom } from "../service/query";
import { ClassroomMembers } from "./types";

export const MembersClassroomState = () => {
    const [classroomMembersList, setClassroomList] = useState<ClassroomMembers | undefined>()

    const {id} = useParams()
    const { RemoveMemberFromClassroomMutation } = MembersClassroomController()

    const { data: classroomRequest, isLoading, isError } = useFetchRequestMembersClassroom(id!);


    // const {  } = MembersClassroomController();

  
    useEffect(() => {
        if (classroomRequest) {
            setClassroomList(classroomRequest)
        }
    }, [classroomRequest])


    const handleRemoveMember = (idUser: number) => {
        if (!id) return
        RemoveMemberFromClassroomMutation.mutate({ idUser, idClassroom: +id })
    }

    return {
        classroomMembersList,
        isLoading,
        isError,
        handleRemoveMember,
        isLoadingRemoveMember: RemoveMemberFromClassroomMutation.isLoading
    }
}
