import { useEffect, useState } from "react";
import { useFetchRequestGroupList } from "../service/query";
import { ListGroupController } from "../service/controller";
import { GroupList } from "../service/types";

export const ListGroupState = () => {
    const [groupList, setGroupList] = useState<GroupList | undefined>()


    const { data: GroupRequest, isLoading, isError } = useFetchRequestGroupList();


    const { DeleteGroupRequestMutation } = ListGroupController();



    const DeleteGroup = (id: number) => {
        DeleteGroupRequestMutation.mutate(id)
    }

    useEffect(() => {
        if (GroupRequest) {
            setGroupList(GroupRequest)
        }
    }, [GroupRequest])


    return {groupList, isLoading,isError, DeleteGroup }
}