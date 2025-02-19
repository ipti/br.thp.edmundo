import { useQuery } from "react-query";
import { ClassroomCorrectionOfActivitiesRequest } from "./request";



  export const useFetchRequestClassroomCorrectionOfActivities = (id: string, idClassroom: string) => {
    return useQuery(["useRequestsClassroomCorrectionOfActivities", id, idClassroom], () => ClassroomCorrectionOfActivitiesRequest(id, idClassroom));
  };
