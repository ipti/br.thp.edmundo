import { useEffect, useState } from "react";
import { useFetchRequestActivitiesOne } from "../service/query";
import { useParams } from "react-router-dom";
import { Activities, CreateResponse, JoinTheActivitiesUser, PropsRating, SendIA } from "../type";
import { HomeActivitiesController } from "../service/controller";

export const HomeActivitiesState = () => {
  const { idActivities } = useParams()
  const [activitiesOne, setactivitiesOne] = useState<Activities | undefined>()

  const initialValueForm: CreateResponse = {
    form_fk: activitiesOne?.form?.id ?? 0,
    question: activitiesOne?.form?.question.map((item: any) => { return {question_fk: item.id, options: []}} ) ?? [],
    user_activities_id: activitiesOne?.user_activities![0]?.id ??  0
  }

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

  const { JoinTheActivitiesUserMutation, FinishActivitiesUserMutation, AddResponseActivitiesMutation, AddRatingActivitiesMutation, SendAIMutation } = HomeActivitiesController()

  const JoinTheActivitiesUser = (body: JoinTheActivitiesUser) => {
    JoinTheActivitiesUserMutation.mutate(body)
  }

  const ActivitiesUserRating = (body: PropsRating) => {
    AddRatingActivitiesMutation.mutate({data: body, id: activitiesOne?.user_activities[0].id!})
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

  const ResponseActivities = (body: CreateResponse) => {
    AddResponseActivitiesMutation.mutate(body)
  }

  const SendAnsweAI = (body: SendIA) => {
    SendAIMutation.mutate({data: body})
  }

  return { activitiesOne, JoinTheActivitiesUser, FinishActivitiesUser, onChangeFile, initialValueForm, ResponseActivities, ActivitiesUserRating, SendAnsweAI }
}