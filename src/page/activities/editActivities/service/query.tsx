import { useQuery } from "react-query";
import { FindOneActivitiesRequest } from "./request";

export const useFetchRequestFindOneActivities = (id: string) => {
    return useQuery(["useRequestsOneActivities", id], () => FindOneActivitiesRequest(id));
  };