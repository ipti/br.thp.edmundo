import { useQuery } from "react-query";
import { FindMigrationProjectRequest } from "./request";

export const useFetchRequestFindMigrationProject = () => {
  return useQuery(["useRequestsFindMigrationProject"], () => FindMigrationProjectRequest());
};
