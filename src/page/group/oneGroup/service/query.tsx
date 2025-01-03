import { useQuery } from "react-query";
import { FindOneGroupRequest } from "./request";

export const useFetchRequestFindOneGroup = (id: string) => {
    return useQuery(["useRequestsOneGroup", id], () => FindOneGroupRequest(id));
  };