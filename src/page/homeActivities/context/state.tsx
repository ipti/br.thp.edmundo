import { useEffect, useState } from "react";
import { useFetchRequestActivitiesOne } from "../service/query";
import { useParams } from "react-router-dom";
import { Activities, JoinTheActivitiesUser } from "../type";
import { HomeActivitiesController } from "../service/controller";

export const HomeActivitiesState = () => {
  const { idActivities } = useParams()
  const [activitiesOne, setactivitiesOne] = useState<Activities | undefined>()

  const [file, setFile] = useState<any>();


  const onChangeFile = (e: any) => {
    setFile(e)
  }

  const { data: activitiesOneRequest } = useFetchRequestActivitiesOne(idActivities!)

  useEffect(() => {
    if (activitiesOneRequest) {
      setactivitiesOne(activitiesOneRequest)
    }
  }, [activitiesOneRequest])

  const { JoinTheActivitiesUserMutation, FinishActivitiesUserMutation } = HomeActivitiesController()

  const JoinTheActivitiesUser = (body: JoinTheActivitiesUser) => {
    JoinTheActivitiesUserMutation.mutate(body)
  }

  const FinishActivitiesUser = (id: number) => {

    const formData = new FormData();
    if (file.length > 0) {
      file.forEach((file: any) => {
        formData.append("files", file);
      });
    }

    FinishActivitiesUserMutation.mutate({ id: id, file: formData })
  }

  return { activitiesOne, JoinTheActivitiesUser, FinishActivitiesUser, onChangeFile }
}