import { useQuery } from "react-query";
import { FindOneModuleRequest } from "./request";

export const useFetchRequestFindOneModule = (id: string) => {
    return useQuery(["useRequestsOneModule", id], () => FindOneModuleRequest(id));
  };