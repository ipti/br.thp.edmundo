import { useEffect, useState } from "react";
import { useFetchRequestFindStamps } from "../service/query";
import { Stamps } from "../service/type";
import { DeleteStampsController } from "../service/controller";

export const ListStampsState = () => {
    const [stamps, setstamps] = useState<Stamps[] | undefined>()

    const { DeleteStampsRequestMutation } = DeleteStampsController()

    const { data: stampsRequest, isLoading, isError } = useFetchRequestFindStamps();


    const DeleteStamps = (id: number) => {
        DeleteStampsRequestMutation.mutate(id)
    }


    useEffect(() => {
        if (stampsRequest) {
            setstamps(stampsRequest)
        }
    }, [stampsRequest])


    return { stamps, isLoading, isError, DeleteStampsRequestMutation, DeleteStamps }
}