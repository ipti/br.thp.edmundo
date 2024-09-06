import { useEffect, useState } from "react";
import { useFetchRequestReapplicationList } from "../service/query";
import { ReapplicationList } from "../service/types";
import { ListReapplicationController } from "../service/controller";

export const ListReapplicationState = () => {
    const [reapplicationList, setReapplicationList] = useState<ReapplicationList | undefined>()


    const { data: reapplicationRequest, isLoading, isError } = useFetchRequestReapplicationList();

    const { DeleteReapplicationRequestMutation } = ListReapplicationController()

    const DeleteReapplication = (id: number) => {
        DeleteReapplicationRequestMutation.mutate(id)
    }


    useEffect(() => {
        if (reapplicationRequest) {
            setReapplicationList(reapplicationRequest)
        }
    }, [reapplicationRequest])


    return {reapplicationList, isLoading,isError, DeleteReapplication }
}