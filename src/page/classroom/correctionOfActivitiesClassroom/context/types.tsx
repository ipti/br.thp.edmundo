import { UserActivities } from "../service/types";

export interface ClassroomCorrectionOfActivitiesContextType {
  activities: UserActivities | undefined;
  isLoading: boolean;
  isError: boolean;
}
