import { CreateNotasType, UserActivities } from "../service/types";

export interface ClassroomCorrectionOfActivitiesContextType {
  activities: UserActivities | undefined;
  isLoading: boolean;
  isError: boolean;
  createAvaliation: (body: CreateNotasType, id: number) => void
  updateAvaliation: (body: CreateNotasType, id: number) => void
}

export interface NotasType {
  complete_the_activity_correctly?: number;
  content_organization?: number;
  completion_within_the_indicated_deadline?: number;
  creativity_in_the_response?: number;
  collaboration?: number;
  understanding_the_content?: number;
}
