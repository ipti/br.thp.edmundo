import { useEffect, useState } from "react";
import { useFetchRequestActivitiesOne } from "../service/query";
import { useParams } from "react-router-dom";
import { Activities } from "../type";

export const HomeActivitiesState = () => {
  const { idActivities } = useParams()
  const [activitiesOne, setactivitiesOne] = useState<Activities | undefined>()

  const { data: activitiesOneRequest } = useFetchRequestActivitiesOne(idActivities!)

  useEffect(() => {
    if (activitiesOneRequest) {
      setactivitiesOne(activitiesOneRequest)
    }
  }, [activitiesOneRequest])



console.log(activitiesOne)

  return { activitiesOne }
}