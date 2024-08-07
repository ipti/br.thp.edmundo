import { useQuery } from "react-query";
import {  MembersClassroomRequest } from "./request";



  export const useFetchRequestMembersClassroom = (id: string) => {
    return useQuery(["useRequestsOneClassroom", id], () => MembersClassroomRequest(id));
  };
