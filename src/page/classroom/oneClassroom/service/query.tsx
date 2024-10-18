import { useQuery } from "react-query";
import { FindChartClassroomRequest, FindOneClassroomRequest } from "./request";

export const useFetchRequestFindOneClassroomBff = (id: string) => {
    return useQuery(["useRequestsFindOneClassroom", id], () => FindOneClassroomRequest(id));
  };

  export const useFetchRequestFindChartClassroomBff = (id: string) => {
    return useQuery(["useRequestsFindChartClassroom", id], () => FindChartClassroomRequest(id));
  };