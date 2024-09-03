import { useQuery } from "react-query";
import { AllModuleClassroomRequest, AllModuleRequest } from "./request";



export const useFetchRequestAllModule = () => {
  return useQuery(["useRequestsListModule"], () => AllModuleRequest());
};

export const useFetchRequestAllModuleClassroom = (id: number) => {
  return useQuery(["useRequestsListModuleClassroom", id], () => AllModuleClassroomRequest(id));
};