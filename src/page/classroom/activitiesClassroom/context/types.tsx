import { ClassroomActivities } from "../service/types";

export interface ActivitiesClassroomContextType {
  classroomActivitiesList: ClassroomActivities | undefined;
  isLoading: boolean;
  isError: boolean;
}
