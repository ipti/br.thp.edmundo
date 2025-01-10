import { useEffect, useState } from "react";
import { CreateGroupController } from "../service/controller";
import { useFetchRequestTypeGroupList } from "../service/query";
import { CreateGroup } from "../service/types";

export const CreateGroupState = () => {
 
  const { CreateGroupMutation } = CreateGroupController();

  const {data: typeGroupListRequets} = useFetchRequestTypeGroupList()

  const [typeGroupList, setTypeGroup] = useState()


  useEffect(() => {
    if(typeGroupListRequets){
      setTypeGroup(typeGroupListRequets.map((item: any) => {return {id: item.id, name: item.name}}))
    }
  
  }, [typeGroupListRequets])
  
  

  const CreateGroup = (body: CreateGroup) => {
    CreateGroupMutation.mutate(body);
  };
  return { CreateGroup, typeGroupList };
};
