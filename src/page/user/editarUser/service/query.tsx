import { useQuery } from "react-query";
import { FindUserRequest } from "./request";

export const useFetchRequestFindUser = (id?: string) => {
  return useQuery(["useRequestsFindUser", id], () => FindUserRequest(id));
};
