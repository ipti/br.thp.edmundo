import { Tag_Activitie } from "../activities/type"

export interface JoinTheActivitiesUser {
    idActivities : number
    idClassroom: number
  }
  
export interface PropsRating {
    rating: number | undefined
}

  export interface Activities {
    id: number
  name: string
  description: string
  expected_return: string
  type_activities: string
  points_activities: number
  difficult: any
  time_activities: number
  createdAt: string
  updatedAt: string
  classesId: number
  form: any
  user_activities: UserActivity[]
  tags_activities: Tag_Activitie[]
}

export interface UserActivity {
  id: number
  status: string
  createdAt: string
  updatedAt: string
  activities_fk: number
  user_classroomId: number
  user_avaliation: any
}

interface OptionDto {
  options_fk: number;
}

interface QuestionDto {
  question_fk: number;
  options: OptionDto[];
}

export interface CreateResponse {
  form_fk: number;
  question: QuestionDto[];
  user_activities_id: number;

}