import { useQuery } from "react-query";
import { ActivitiesClassroomRequest } from "./request";



  export const useFetchRequestMActivitiesClassroom = (id: string) => {
    return useQuery(["useRequestsActivitiesClassroom", id], () => ActivitiesClassroomRequest(id));
  };
