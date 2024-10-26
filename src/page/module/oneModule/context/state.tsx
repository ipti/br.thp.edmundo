import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Modules } from "../../type";
import { useFetchRequestFindOneModuleBff } from "../service/query";
import { OneModuleController } from "../service/controller";

export const OneModuleState = () => {
    const { id } = useParams()
    const [moduleOne, setModulesOne] = useState<Modules | undefined>()



    const { data: moduleOneRequest, isLoading, isError } = useFetchRequestFindOneModuleBff(id!);

    const {DeleteActivitiesRequestMutation, DeleteClassesRequestMutation} = OneModuleController()

    const DeleteClasses = (id: number) => {
        DeleteClassesRequestMutation.mutate(id)
    }
   
    const DeleteActivities = (id: number) => {
        DeleteActivitiesRequestMutation.mutate(id)
    }
   


    useEffect(() => {
        if (moduleOneRequest) {
            setModulesOne(moduleOneRequest)
        }
    }, [moduleOneRequest])


    return { moduleOne, isLoading, isError, DeleteActivities, DeleteClasses }
}