import { useEffect, useState } from "react";
import { useFetchRequestAllModule } from "../../../module/listModule/service/query";
import { ModulesList } from "./type";
import { ClassroomModuleController } from "../service/controller";
import { AddModuleClassroom, ModuleClassroom } from "../type";
import { useFetchRequestAllModuleClassroom } from "../service/query";
import { useParams } from "react-router-dom";

export const ClassroomModulesState = () => {
    const [modulesClassroomList, setModulesList] = useState<ModuleClassroom[] | undefined>()

    const {id} = useParams()

    const [allmodulesList, setAllModulesList] = useState<ModulesList | undefined>()


    const { data: modulesRequest, isLoading: allModuleLoading, isError: allModuleError } = useFetchRequestAllModule();

    const { data: modulesClassroomRequest, isLoading, isError } = useFetchRequestAllModuleClassroom(parseInt(id!));

    const { AddModuleClassroomMutation, UpdateModuleClassroomMutation } = ClassroomModuleController();

    const AddModuleClassroom = (body: AddModuleClassroom) => {
        AddModuleClassroomMutation.mutate(body)
    }
   
    const UpdateModuleClassroom = (body: {active: boolean}, id: number) => {
        UpdateModuleClassroomMutation.mutate({body: body, id: id}, )
    }
    useEffect(() => {
        if (modulesRequest) {
            setAllModulesList(modulesRequest)
        }

        if (modulesClassroomRequest) {
            setModulesList(modulesClassroomRequest)
        }
    }, [modulesRequest, modulesClassroomRequest])


    return {modulesClassroomList, isLoading,isError, AddModuleClassroom, allmodulesList, UpdateModuleClassroom}
}