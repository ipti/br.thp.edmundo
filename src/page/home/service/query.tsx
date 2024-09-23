import { useQuery } from "react-query";
import { ListClassroomRequest } from "./request";

export const useFetchRequestClassroomUser = () => {
    return useQuery(["useRequestsListClassroomUser"], () => ListClassroomRequest());
  };
