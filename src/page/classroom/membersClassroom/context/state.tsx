import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MembersClassroomController } from "../service/controller";
import {
    useFetchRequestMembersClassroom,
    useFetchRequestTeachersByReapplication,
} from "../service/query";
import { ClassroomMembers, TeacherUser } from "./types";

export const MembersClassroomState = () => {
    const [classroomMembersList, setClassroomList] = useState<ClassroomMembers | undefined>()
    const [teachers, setTeachers] = useState<TeacherUser[]>([])

    const { id } = useParams()
    const { RemoveMemberFromClassroomMutation, AddTeacherToClassroomMutation } = MembersClassroomController()

    const { data: classroomRequest, isLoading, isError } = useFetchRequestMembersClassroom(id!);
    const { data: teachersByReapplicationRequest } = useFetchRequestTeachersByReapplication(
        classroomRequest?.classroom?.reapplication_fk
    );


    // const {  } = MembersClassroomController();


    useEffect(() => {
        if (classroomRequest) {
            setClassroomList(classroomRequest)
        }
    }, [classroomRequest])

    useEffect(() => {
        if (teachersByReapplicationRequest) {

            setTeachers(teachersByReapplicationRequest)
        } else {
            setTeachers([])
        }
    }, [teachersByReapplicationRequest, classroomRequest])


    const handleRemoveMember = (idUser: number) => {
        if (!id) return
        RemoveMemberFromClassroomMutation.mutate({ idUser, idClassroom: +id })
    }

    const handleAddTeacher = (idUser: number) => {
        if (!id) return
        AddTeacherToClassroomMutation.mutate({ idUser, idClassroom: +id })
    }

    return {
        classroomMembersList,
        isLoading,
        isError,
        handleRemoveMember,
        isLoadingRemoveMember: RemoveMemberFromClassroomMutation.isLoading,
        teachers,
        handleAddTeacher,
        isLoadingAddTeacher: AddTeacherToClassroomMutation.isLoading
    }
}
