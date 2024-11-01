import { useQuery } from "react-query";
import { TagsRequest } from "./request";

export const useFetchRequestTagsList = () => {
    return useQuery(["useRequestsListTags"], () => TagsRequest());
  };