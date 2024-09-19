import { Activities, JoinTheActivitiesUser } from "../type";

export interface HomeActivitiesContextType {
    activitiesOne: Activities | undefined
    JoinTheActivitiesUser: (body: JoinTheActivitiesUser) => void
}

