import { useQuery } from "react-query";
import { ListClassroomRequest, OneClassroomRequest } from "./request";

export const useFetchRequestClassroomList = () => {
    return useQuery(["useRequestsListClassroom"], () => ListClassroomRequest());
  };



  export const useFetchRequestOneClassroom = (id: string) => {
    return useQuery(["useRequestsOneClassroom", id], () => OneClassroomRequest(id));
  };
