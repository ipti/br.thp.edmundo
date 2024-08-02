import { useQuery } from "react-query";
import { ListReapplicationRequest } from "./request";

export const useFetchRequestReapplicationList = () => {
    return useQuery(["useRequestsListReapplication"], () => ListReapplicationRequest());
  };