import { useQuery } from "react-query";
import { FindOneUserRequest, FindTagsUserRequest } from "./request";

export const useFetchRequestFindOneUser = (id: string) => {
    return useQuery(["useRequestsFindOneUser", id], () => FindOneUserRequest(id));
  };

  export const useFetchRequestFindTagsUser = () => {
    return useQuery(["useRequestsFindTagsUser"], () => FindTagsUserRequest());
  };


