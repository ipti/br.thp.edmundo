import { useQuery } from "react-query";
import { AllclasseClassroomRequest, AllclasseRequest } from "./request";



export const useFetchRequestAllClasse = () => {
  return useQuery(["useRequestsListClasse"], () => AllclasseRequest());
};

export const useFetchRequestAllClasseClassroom = (id: number) => {
  return useQuery(["useRequestsListClasseClassroom", id], () => AllclasseClassroomRequest(id));
};