import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClassroomClasseController } from "../service/controller";
import { useFetchRequestAllClasse, useFetchRequestAllClasseClassroom } from "../service/query";
import { AddClasseClassroom } from "../type";
import { ClassesList } from "./type";

export const ClassroomclasseState = () => {
    const [classeClassroomList, setclasseList] = useState<ClassesList | undefined>()

    const {id} = useParams()

    const [allclasseList, setAllclasseList] = useState<any | undefined>()


    const { data: classeRequest, isLoading: allclasseLoading, isError: allclasseError } = useFetchRequestAllClasse();

    const { data: classeClassroomRequest, isLoading, isError } = useFetchRequestAllClasseClassroom(parseInt(id!));

    const { AddClasseClassroomMutation, UpdateClasseClassroomMutation } = ClassroomClasseController();

    const AddclasseClassroom = (body: AddClasseClassroom) => {
        AddClasseClassroomMutation.mutate(body)
    }
   
    const UpdateclasseClassroom = (body: {active: boolean}, id: number) => {
        UpdateClasseClassroomMutation.mutate({body: body, id: id}, )
    }
    useEffect(() => {
        if (classeRequest) {
            setAllclasseList(classeRequest)
        }

        if (classeClassroomRequest) {
            setclasseList(classeClassroomRequest)
        }
    }, [classeRequest, classeClassroomRequest])


    return {classeClassroomList, isLoading,isError, AddclasseClassroom, allclasseList, UpdateclasseClassroom}
}