import { useQuery } from "react-query";
import { ActivitiesRequest } from "./request";

export const useFetchRequestActivitiesOne = (
  id: string,
  idClassroom: string
) => {
  return useQuery(["useRequestActivitiesOne", id, idClassroom], () =>
    ActivitiesRequest(id, idClassroom)
  );
};
