import { useQuery } from "react-query";
import { FindOneStampsRequest } from "./request";

export const useFetchRequestFindOneStamps = (id: string) => {
    return useQuery(["useRequestsOneStamps", id], () => FindOneStampsRequest(id));
  };