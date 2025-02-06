import { Tag_Activitie } from "../activities/type"

export interface JoinTheActivitiesUser {
    idActivities : number
    idClassroom: number
  }
  
export interface PropsRating {
    rating: number | undefined
}

export interface PropsCodeEditor {
  id: number
  content: string
  group: string
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
  activities_group_avaliation: ActivitiesGroup[]

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



export interface ActivitiesGroup {
  id: number
  activitie_fk: number
  group_avaliation_fk: number
  group_avaliations: GroupAvaliations
}
export interface GroupAvaliations {
  id: number
  name: string
  createdAt: string
  updatedAt: string
  type_group_avaliation_fk: number
  metric_group_avaliation: MetricGroupAvaliation[]
  type_group_avaliation: TypeGroupAvaliation
}

export interface MetricGroupAvaliation {
  id: number
  description: string
  metric_percentange: number
  createdAt: string
  updatedAt: string
  group_avaliation_fk: number
  metric_group_avaliation_correct_answer: MetricGroupAvaliationCorrectAnswer[]
}

export interface MetricGroupAvaliationCorrectAnswer {
  id: number
  createdAt: string
  updatedAt: string
  correct_answer: string
  metric_group_avaliation_fk: number
  activities_fk: number
}

export interface TypeGroupAvaliation {
  id: number
  name: string
  value: string
  createdAt: string
  updatedAt: string
}
