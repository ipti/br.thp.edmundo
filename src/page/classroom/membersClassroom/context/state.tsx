import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchRequestMembersClassroom } from "../service/query";
import { ClassroomMembers } from "./types";

export const MembersClassroomState = () => {
    const [classroomMembersList, setClassroomList] = useState<ClassroomMembers | undefined>()

    const {id} = useParams()

    const { data: classroomRequest, isLoading, isError } = useFetchRequestMembersClassroom(id!);


    // const {  } = MembersClassroomController();

  
    useEffect(() => {
        if (classroomRequest) {
            setClassroomList(classroomRequest)
        }
    }, [classroomRequest])


    return {classroomMembersList, isLoading,isError }
}