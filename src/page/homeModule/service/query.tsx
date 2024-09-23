import { useQuery } from "react-query";
import { FindOneModuleClassroomRequest } from "./request";

export const useFetchRequestHomeFindOneModuleBff = (id: string, idClassroom: string) => {
  return useQuery(["useRequestsFindOneModuleHome", id], () => FindOneModuleClassroomRequest(id, idClassroom));
};