import { useQuery } from "react-query";
import { FindOneClassroomRequest } from "./request";

export const useFetchRequestFindOneClassroomBff = (id: string) => {
    return useQuery(["useRequestsFindOneClassroom", id], () => FindOneClassroomRequest(id));
  };