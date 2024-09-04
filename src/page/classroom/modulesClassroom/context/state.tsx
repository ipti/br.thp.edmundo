import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClassroomModuleController } from "../service/controller";
import { useFetchRequestAllModuleClassroom } from "../service/query";
import { AddModuleClassroom } from "../type";
import { ModulesList } from "./type";

export const ClassroomModulesState = () => {
    const [modulesClassroomList, setModulesList] = useState<ModulesList | undefined>()

    const {id} = useParams()



    const { data: modulesClassroomRequest, isLoading, isError } = useFetchRequestAllModuleClassroom(parseInt(id!));

    const { AddModuleClassroomMutation, UpdateModuleClassroomMutation } = ClassroomModuleController();

    const AddModuleClassroom = (body: AddModuleClassroom) => {
        AddModuleClassroomMutation.mutate(body)
    }
   
    const UpdateModuleClassroom = (body: {active: boolean}, id: number) => {
        UpdateModuleClassroomMutation.mutate({body: body, id: id}, )
    }
    useEffect(() => {
      
        if (modulesClassroomRequest) {
            setModulesList(modulesClassroomRequest)
        }
    }, [ modulesClassroomRequest])


    return {modulesClassroomList, isLoading,isError, AddModuleClassroom, UpdateModuleClassroom}
}