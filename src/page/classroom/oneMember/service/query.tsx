import { useQuery } from "react-query";
import { FindChartClassroomUserRequest, FindOneUserRequest } from "./request";

export const useFetchRequestFindOneUser = (id: string) => {
    return useQuery(["useRequestsFindOneUser", id], () => FindOneUserRequest(id));
  };

  export const useFetchRequestFindChartUserClassroomBff = (id: string, idUser: string) => {
    return useQuery(["useRequestsFindChartUserClassroom", id, idUser], () => FindChartClassroomUserRequest(id, idUser));
  };