import { Activities, CreateResponse, JoinTheActivitiesUser, PropsRating, SendIA } from "../type";

export interface HomeActivitiesContextType {
    activitiesOne: Activities | undefined
    JoinTheActivitiesUser: (body: JoinTheActivitiesUser) => void
    onChangeFile: (e: any) => void
    FinishActivitiesUser: (id: number) => void
    initialValueForm: CreateResponse
    ResponseActivities: (body: CreateResponse) => void
    ActivitiesUserRating: (body: PropsRating) => void
    SendAnsweAI: (body: SendIA) => void
}

