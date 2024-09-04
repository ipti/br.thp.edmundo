import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClassroomModuleController } from "../service/controller";
import { useFetchRequestAllModule, useFetchRequestAllModuleClassroom } from "../service/query";
import { AddModuleClassroom, Module } from "../type";
import { ModulesList } from "./type";

export const ClassroomModulesState = () => {
    const [modulesClassroomList, setModulesList] = useState<ModulesList | undefined>()

    const { id } = useParams()

    const [allModules, setAllModules] = useState<Module[] | undefined>()
    const { data: modulesRequest } = useFetchRequestAllModule()

    const { data: modulesClassroomRequest, isLoading, isError } = useFetchRequestAllModuleClassroom(parseInt(id!));

    const { AddModuleClassroomMutation, UpdateModuleClassroomMutation } = ClassroomModuleController();

    const AddModuleClassroom = (body: AddModuleClassroom) => {
        AddModuleClassroomMutation.mutate(body)
    }

    const UpdateModuleClassroom = (body: { active: boolean }, id: number) => {
        UpdateModuleClassroomMutation.mutate({ body: body, id: id },)
    }
    useEffect(() => {
        if (modulesRequest) {
            setAllModules(modulesRequest)
        }
        if (modulesClassroomRequest) {
            setModulesList(modulesClassroomRequest)
        }
    }, [modulesClassroomRequest, modulesRequest])


    return { modulesClassroomList, isLoading, isError, AddModuleClassroom, UpdateModuleClassroom, allModules }
}