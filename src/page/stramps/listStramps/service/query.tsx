import { useQuery } from "react-query";
import { FindStampsRequest } from "./request";

export const useFetchRequestFindStamps = () => {
    return useQuery(["useRequestsFindStamps"], () => FindStampsRequest());
  };