import { useEffect, useState } from "react";
import { UpdateGroupController } from "../service/controller";
import { useParams } from "react-router-dom";
import { useFetchRequestFindOneGroup } from "../service/query";
import queryClient from "../../../../service/reactquery";
import { Group } from "./types";
import { CreateMetricGroup } from "../service/types";

export const UpdateGroupState = () => {
    const [file, setFile] = useState<File[] | undefined>();
    const {id} = useParams()

    const { data: GroupOneRequest, isLoading } = useFetchRequestFindOneGroup(id!);

    const [is, setIs] = useState(false)
    const [GroupOne, setGroupsOne] = useState<Group | undefined>()
    useEffect(() => {
        if (GroupOneRequest && is) {
            setGroupsOne(GroupOneRequest)
        }
    }, [GroupOneRequest, is])

    
    useEffect(() => {

        queryClient.removeQueries("useRequestsOneGroup")
        setIs(true)
    }, [])


    const { UpdateGroupRequestMutation, CreateMetricGroupRequestMutation } = UpdateGroupController();

    const UpdateGroup = (body: {name: string, description: string}) => {

      
        UpdateGroupRequestMutation.mutate({data: body, id: parseInt(id!)})
    }

    const CreateMetricGroup = (body: CreateMetricGroup) => {

      
        CreateMetricGroupRequestMutation.mutate({data: body})
    }
   
    return { UpdateGroup, file, setFile, GroupOne, isLoading, CreateMetricGroup }
}