import { useEffect, useState } from "react";
import { useFetchRequestAllModule } from "../service/query";
import { ModulesList } from "../../type";

export const ListModulesState = () => {
    const [modulesList, setModulesList] = useState<ModulesList | undefined>()


    const { data: classroomRequest, isLoading, isError } = useFetchRequestAllModule();


   
    useEffect(() => {
        if (classroomRequest) {
            setModulesList(classroomRequest)
        }
    }, [classroomRequest])


    return {modulesList, isLoading,isError }
}