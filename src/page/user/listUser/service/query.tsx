import { useQuery } from "react-query";
import { FindUserRequest } from "./request";

export const useFetchRequestFindUser = () => {
    return useQuery(["useRequestsFindUser"], () => FindUserRequest());
  };