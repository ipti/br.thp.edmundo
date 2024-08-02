import { useEffect, useState } from "react";
import { useFetchRequestReapplicationList } from "../service/query";
import { ReapplicationList } from "../service/types";

export const ListReapplicationState = () => {
    const [reapplicationList, setReapplicationList] = useState<ReapplicationList | undefined>()


    const { data: reapplicationRequest, isLoading, isError } = useFetchRequestReapplicationList();


    useEffect(() => {
        if (reapplicationRequest) {
            setReapplicationList(reapplicationRequest)
        }
    }, [reapplicationRequest])


    return {reapplicationList, isLoading,isError }
}