import { useQuery } from "react-query";
import { ActivitiesSentRequest } from "./request";



  export const useFetchRequestActivitiesSent = (id: string) => {
    return useQuery(["useRequestsActivitiesSent", id], () => ActivitiesSentRequest(id));
  };
