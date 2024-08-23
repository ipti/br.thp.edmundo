import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Modules } from "../../type";
import { useFetchRequestFindOneModuleBff } from "../service/query";

export const OneModuleState = () => {
    const { id } = useParams()
    const [moduleOne, setModulesOne] = useState<Modules | undefined>()



    const { data: moduleOneRequest, isLoading, isError } = useFetchRequestFindOneModuleBff(id!);


    useEffect(() => {
        if (moduleOneRequest) {
            setModulesOne(moduleOneRequest)
        }
    }, [moduleOneRequest])


    return { moduleOne, isLoading, isError }
}