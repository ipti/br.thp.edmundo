import { useQuery } from "react-query";
import { FindOneActivitiesRequest } from "./request";
import { FindTagsActivitiesRequest } from "../../createActivities/service/request";

export const useFetchRequestFindOneActivities = (id: string) => {
  return useQuery(["useRequestsOneActivities", id], () => FindOneActivitiesRequest(id));
};

export const useFetchRequestFindTagsActitvities = () => {
  return useQuery(["useRequestsFindTagsActivities"], () => FindTagsActivitiesRequest());
};
