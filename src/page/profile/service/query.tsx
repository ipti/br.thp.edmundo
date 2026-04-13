import { useQuery } from "react-query";
import { FindAllReapplicationsRequest, FindOneUserRequest, FindTagsUserRequest } from "./request";

export const useFetchRequestFindOneUser = (id: string) => {
    return useQuery(["useRequestsFindOneUser", id], () => FindOneUserRequest(id));
  };

  export const useFetchRequestFindTagsUser = () => {
    return useQuery(["useRequestsFindTagsUser"], () => FindTagsUserRequest());
  };

  export const useFetchRequestFindAllReapplications = () => {
    return useQuery(["useRequestsFindAllReapplications"], () => FindAllReapplicationsRequest());
  };


