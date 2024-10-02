import { ClassroomModulesActivities } from "../service/types";

export interface ActivitiesClassroomContextType {
  classroomActivitiesList: ClassroomModulesActivities | undefined;
  isLoading: boolean;
  isError: boolean;
}
