import { useQuery } from "react-query";
import { FindTagsActivitiesRequest } from "./request";

export const useFetchRequestFindTagsActitvities = () => {
    return useQuery(["useRequestsFindTagsActivities"], () => FindTagsActivitiesRequest());
  };
