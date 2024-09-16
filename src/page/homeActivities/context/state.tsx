import { useEffect, useState } from "react";
import { HomeController } from "../service/controller";
import { JoinTheClassroom } from "../type";
import { useFetchRequestClassroomUser } from "../service/query";

export const HomeState = () => {
    const [classroomUser, setClassroomuser] = useState<any | undefined>()

    const {data: classroomUserRequest} = useFetchRequestClassroomUser()

    useEffect(() => {
      if(classroomUserRequest){
        setClassroomuser(classroomUserRequest)
      }
    }, [classroomUserRequest])
    


    const { JoinTheClassroomMutation } = HomeController();

    const JoinTheClassroomClassroom = (body: JoinTheClassroom) => {
        JoinTheClassroomMutation.mutate(body)
    }

 
    return { JoinTheClassroomClassroom, classroomUser }
}