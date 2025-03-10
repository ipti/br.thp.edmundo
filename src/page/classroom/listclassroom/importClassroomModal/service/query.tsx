import { useQuery } from "react-query";
import { FindMigrationClassroomListequest, FindMigrationProjectRequest } from "./request";

export const useFetchRequestFindMigrationProject = () => {
  return useQuery(["useRequestsFindMigrationProject"], () => FindMigrationProjectRequest());
};


export const useFetchRequestFindMigrationClassroomList = (idProject: string) => {
  return useQuery(["useRequestsFindMigrationClassroomList", idProject], () => FindMigrationClassroomListequest(idProject));
};
