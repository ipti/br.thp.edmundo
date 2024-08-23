import { useQuery } from "react-query";
import { FindOneModuleRequest } from "./request";

export const useFetchRequestFindOneModuleBff = (id: string) => {
    return useQuery(["useRequestsFindOneModule", id], () => FindOneModuleRequest(id));
  };