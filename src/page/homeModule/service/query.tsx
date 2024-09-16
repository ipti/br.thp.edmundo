import { useQuery } from "react-query";
import { FindOneModuleRequest } from "../../module/oneModule/service/request";

export const useFetchRequestHomeFindOneModuleBff = (id: string) => {
  return useQuery(["useRequestsFindOneModuleHome", id], () => FindOneModuleRequest(id));
};