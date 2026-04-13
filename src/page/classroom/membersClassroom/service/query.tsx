import { useQuery } from "react-query";
import { MembersClassroomRequest, TeachersByReapplicationRequest } from "./request";



  export const useFetchRequestMembersClassroom = (id: string) => {
    return useQuery(["useRequestsOneClassroom", id], () => MembersClassroomRequest(id));
  };

  export const useFetchRequestTeachersByReapplication = (idReapplication?: number) => {
    return useQuery(
      ["useRequestsTeachersByReapplication", idReapplication],
      () => TeachersByReapplicationRequest(idReapplication!),
      { enabled: !!idReapplication }
    );
  };
