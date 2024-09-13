import { HomeController } from "../service/controller";
import { JoinTheClassroom } from "../type";

export const HomeState = () => {


    const { JoinTheClassroomMutation } = HomeController();

    const JoinTheClassroomClassroom = (body: JoinTheClassroom) => {
        JoinTheClassroomMutation.mutate(body)
    }

 
    return { JoinTheClassroomClassroom,  }
}