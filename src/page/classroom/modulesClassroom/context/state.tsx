import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClassroomModuleController } from "../service/controller";
import { useFetchRequestAllModule, useFetchRequestAllModuleClassroom } from "../service/query";
import { AddAtivitiesClassroom, AddClasseClassroom, AddModuleClassroom } from "../type";
import { ModuleList, ModulesList } from "./type";

export const ClassroomModulesState = () => {
    const [modulesClassroomList, setModulesList] = useState<ModulesList | undefined>()

    const { id } = useParams()

    const [allModules, setAllModules] = useState<ModuleList | undefined>()
    const { data: modulesRequest } = useFetchRequestAllModule(parseInt(id!))

    const { data: modulesClassroomRequest, isLoading, isError } = useFetchRequestAllModuleClassroom(parseInt(id!));

    const { AddModuleClassroomMutation, UpdateModuleClassroomMutation, AddClasseClassroomMutation, UpdateClasseClassroomMutation, AddActivitiesClassroomMutation, UpdateActivitiesClassroomMutation, RemoveModuleClassroomMutation} = ClassroomModuleController();

    const AddModuleClassroom = (body: AddModuleClassroom) => {
        AddModuleClassroomMutation.mutate(body)
    }

    const RemoveModuleClassroom = (body: AddModuleClassroom) => {
        RemoveModuleClassroomMutation.mutate(body)
    }

    const UpdateModuleClassroom = (body: { active: boolean }, id: number) => {
        UpdateModuleClassroomMutation.mutate({ body: body, id: id },)
    }


  

    const AddclasseClassroom = (body: AddClasseClassroom) => {
        AddClasseClassroomMutation.mutate(body)
    }
   
    const UpdateclasseClassroom = (body: {active: boolean}, id: number) => {
        UpdateClasseClassroomMutation.mutate({body: body, id: id}, )
    }


    const AddActivitiesClassroom = (body: AddAtivitiesClassroom) => {
        AddActivitiesClassroomMutation.mutate(body)
    }
   
    const UpdateActivitiesClassroom = (body: {active: boolean}, id: number) => {
        UpdateActivitiesClassroomMutation.mutate({body: body, id: id}, )
    }
    useEffect(() => {
        if (modulesRequest) {
            setAllModules(modulesRequest)
        }
        if (modulesClassroomRequest) {
            setModulesList(modulesClassroomRequest)
        }
    }, [modulesClassroomRequest, modulesRequest])


    return { modulesClassroomList, isLoading, isError, AddModuleClassroom, UpdateModuleClassroom, allModules, AddclasseClassroom, UpdateclasseClassroom, AddActivitiesClassroom, UpdateActivitiesClassroom, RemoveModuleClassroom }
}