import { useEffect, useState } from "react";
import { useFetchRequestActivitiesOne } from "../service/query";
import { useParams } from "react-router-dom";
import { Activities, JoinTheActivitiesUser } from "../type";
import { HomeActivitiesController } from "../service/controller";

export const HomeActivitiesState = () => {
  const { idActivities } = useParams()
  const [activitiesOne, setactivitiesOne] = useState<Activities | undefined>()

  const { data: activitiesOneRequest } = useFetchRequestActivitiesOne(idActivities!)

  useEffect(() => {
    if (activitiesOneRequest) {
      setactivitiesOne(activitiesOneRequest)
    }
  }, [activitiesOneRequest])

  const {JoinTheActivitiesUserMutation} = HomeActivitiesController()

  const JoinTheActivitiesUser = (body: JoinTheActivitiesUser) => {
    JoinTheActivitiesUserMutation.mutate(body)
}

  return { activitiesOne, JoinTheActivitiesUser }
}