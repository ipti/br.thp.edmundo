import { useQuery } from "react-query";
import { FindChartClassroomModuleNotasUserMediaRequest, FindChartClassroomModuleNotasUserRequest, FindChartClassroomUserRequest, FindOneUserRequest } from "./request";

export const useFetchRequestFindOneUser = (id: string) => {
    return useQuery(["useRequestsFindOneUser", id], () => FindOneUserRequest(id));
  };

  export const useFetchRequestFindChartUserClassroomBff = (id: string, idUser: string) => {
    return useQuery(["useRequestsFindChartUserClassroom", id, idUser], () => FindChartClassroomUserRequest(id, idUser));
  };


  export const useFetchRequestFindChartUserModuleClassroomBff = (id: string, idUser: string, idModule: string) => {
    return useQuery(["useRequestsFindChartUserModuleClassroom", id, idUser, idModule], () => FindChartClassroomModuleNotasUserRequest(id, idUser, idModule));
  };

  export const useFetchRequestFindChartUserModuleMediaClassroomBff = (id: string, idUser: string) => {
    return useQuery(["useRequestsFindChartUserModuleMediaClassroom", id, idUser], () => FindChartClassroomModuleNotasUserMediaRequest(id, idUser));
  };
