import { useQuery } from "react-query";
import { ClassroomCorrectionOfActivitiesRequest } from "./request";



  export const useFetchRequestClassroomCorrectionOfActivities = (id: string) => {
    return useQuery(["useRequestsClassroomCorrectionOfActivities", id], () => ClassroomCorrectionOfActivitiesRequest(id));
  };
