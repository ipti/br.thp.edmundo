import { useEffect, useState } from "react";
import { UpdateStampsController } from "../service/controller";
import { useParams } from "react-router-dom";
import { useFetchRequestFindOneStamps } from "../service/query";
import queryClient from "../../../../service/reactquery";

export const UpdateStampsState = () => {
    const [file, setFile] = useState<File[] | undefined>();
    const {id} = useParams()

    const { data: StampsOneRequest, isLoading } = useFetchRequestFindOneStamps(id!);

    const [is, setIs] = useState(false)
    const [StampsOne, setStampssOne] = useState<any | undefined>()
    useEffect(() => {
        if (StampsOneRequest && is) {
            setStampssOne(StampsOneRequest)
        }
    }, [StampsOneRequest, is])

    
    useEffect(() => {

        queryClient.removeQueries("useRequestsOneStamps")
        setIs(true)
    }, [])


    const { UpdateStampsRequestMutation } = UpdateStampsController();

    const UpdateStamps = (body: {name: string, description: string}) => {

      
        UpdateStampsRequestMutation.mutate({data: body, id: parseInt(id!)})
    }

   
    return { UpdateStamps, file, setFile, StampsOne, isLoading }
}