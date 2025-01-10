import { useQuery } from "react-query";
import { ListTypeGroupRequest } from "./request";

export const useFetchRequestTypeGroupList = () => {
    return useQuery(["useRequestsListTyeGroup"], () => ListTypeGroupRequest());
  };
