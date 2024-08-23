import { useQuery } from "react-query";
import { AllModuleRequest } from "./request";



export const useFetchRequestAllModule = () => {
  return useQuery(["useRequestsListModule"], () => AllModuleRequest());
};