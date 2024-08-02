import { useQuery } from "react-query";
import { ListClassroomRequest } from "./request";

export const useFetchRequestClassroomList = () => {
    return useQuery(["useRequestsListClassroom"], () => ListClassroomRequest());
  };