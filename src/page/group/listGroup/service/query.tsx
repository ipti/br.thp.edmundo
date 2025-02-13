import { useQuery } from "react-query";
import { ListGroupRequest, OneGroupRequest } from "./request";

export const useFetchRequestGroupList = () => {
    return useQuery(["useRequestsListGroup"], () => ListGroupRequest());
  };



  export const useFetchRequestOneGroup = (id: string) => {
    return useQuery(["useRequestsOneGroup", id], () => OneGroupRequest(id));
  };
