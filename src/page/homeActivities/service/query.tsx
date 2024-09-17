import { useQuery } from "react-query";
import { ActivitiesRequest } from "./request";

export const useFetchRequestActivitiesOne = (id: string) => {
    return useQuery(["useRequestActivitiesOne", id], () => ActivitiesRequest(id));
  };
