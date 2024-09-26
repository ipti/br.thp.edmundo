import { useQuery } from "react-query";
import { FindOneModuleRequest } from "./request";

export const useFetchRequestFindOneModuleBff = (id: string) => {
    return useQuery(["useRequestsFindOneModuleBff", id], () => FindOneModuleRequest(id));
  };