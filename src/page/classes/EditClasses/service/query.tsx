import { useQuery } from "react-query";
import { FindOneClassesRequest } from "./request";

export const useFetchRequestFindOneClasses = (id: string) => {
    return useQuery(["useRequestsOneClasses", id], () => FindOneClassesRequest(id));
  };