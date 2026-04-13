import { useQuery } from "react-query";
import { FindAllReapplicationsRequest, FindUserRequest } from "./request";

export const useFetchRequestFindUser = (id?: string) => {
  return useQuery(["useRequestsFindUser", id], () => FindUserRequest(id));
};

export const useFetchRequestFindAllReapplications = () => {
  return useQuery(["useRequestsListReapplication"], () =>
    FindAllReapplicationsRequest()
  );
};
