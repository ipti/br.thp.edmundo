import { useQuery } from "react-query";
import { AllclasseRequest, AllModuleClassroomRequest, AllModuleRequest } from "./request";



export const useFetchRequestAllModule = (id: number) => {
  return useQuery(["useRequestsListModule", id], () => AllModuleRequest(id));
};

export const useFetchRequestAllModuleClassroom = (id: number) => {
  return useQuery(["useRequestsListModuleClassroom", id], () => AllModuleClassroomRequest(id));
};

export const useFetchRequestAllClasse = () => {
  return useQuery(["useRequestsListClasse"], () => AllclasseRequest());
};
