import http from "../../../service/axios"
import { JoinTheClassroom } from "../type"

export const JoinTheClassroomRequest = async (body: JoinTheClassroom) => {
    return await http.put("/classroom-bff/join-the-classroom?idClassroom=" + body.idClassroom + "&idUser=" + body.idUser)
  }
  
  