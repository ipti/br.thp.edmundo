import { useQuery } from "react-query";
import { FindOneUserRequest } from "./request";

export const useFetchRequestFindOneUser = (id: string) => {
    return useQuery(["useRequestsFindOneUser", id], () => FindOneUserRequest(id));
  };