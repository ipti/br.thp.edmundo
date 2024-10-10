import { CreateNotasAvaliationType } from "../service/types";

export interface ActivitiesSentContextType {
  activities: any | undefined;
  isLoading: boolean;
  isError: boolean;
  createAvaliation: (body: CreateNotasAvaliationType, id: number) => void;
  updateAvaliation: (body: CreateNotasAvaliationType, id: number) => void;
}

