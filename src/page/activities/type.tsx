import { Dispatch, SetStateAction } from "react";
import { AnswerForm } from "../classroom/correctionOfActivitiesClassroom/service/types";
import { Tags } from "../profile/service/types";

export interface CreateActivities {
  name: string,
  description: string,
  type_activities: { id: string; name: string; },
  expected_return?: string
  points_activities: number,
  difficult: { id: string; name: string; },
  time_activities: number,
  id_classes: number
  groups: any[]
}

export interface GroupsId {
  idGroup: number
}

export interface CreateActivitiesType {
  initialValue: CreateActivities;
  CreateActivities: (body: CreateActivities) => void;
  setTagsActivities: Dispatch<SetStateAction<any[]>>
  tagsActivities: any
  tags: Tags | undefined
  AddEditorImage: (file: any) => void
}

export interface EditActivities {
  expected_return?: string
  name: string,
  description: string,
  points_activities: number,
  difficult: { id: string; name: string; },
  type_activities: { id: string; name: string; }
  time_activities: number,
  groups: any[],

}

export interface EditActivitiesType {
  initialValue: EditActivities;
  EditActivities: (body: EditActivities, id: number) => void;
  isLoading: boolean;
  isError: boolean;
  activitiesOne: ActivitiesOne | undefined;
  tags: Tags | undefined
  tagsActivities: any
  setTagsActivities: Dispatch<any>
  CorrectAnswerMetricActivities: (id: number, body: PropsCorrectAnswerMetricActivities[]) => void
  metricCorrectAnswer: {
    idMetric: number;
    correctAnswer: string;
  }[]
  setMetricCorrectAnswer: Dispatch<SetStateAction<{
    idMetric: number;
    correctAnswer: string;
  }[]>>
  handleQuestionUpdate: (body: PropsQuestionUpdate) => void
}

export interface ActivitiesOne {
  id: number
  name: string
  description: string
  expected_return: string
  type_activities: string
  points_activities: number
  difficult: string
  time_activities: number
  createdAt: string
  updatedAt: string
  classesId: number
  form: Form
  tags_activities: Tag_Activities
}

export type Tag_Activities = Tag_Activitie[]

export interface Tag_Activitie {
  id: number
  activities_fk: number
  tag_fk: number
  tag: Tag
}

export interface Tag {
  id: number
  content: string
  type: string
}


export interface Form {
  id: number
  activitiesId: number
  createdAt: string
  question: Questions
  answer_form?: AnswerForm[]
}

export type Questions = Question[]

export interface Question {
  id: number
  content: string
  type: string
  formId: number
  createdAt: string
  options: Option[]
  response_question: any[]
}

export interface Option {
  id?: number
  content: string
  value: any
  questionId?: number
  createdAt?: string
}



export interface PropsCorrectAnswerMetricActivities {
  idMetric: number,
  correctAnswer: string
}

export interface PropsFormActivities {
  questions: Question[]
}

export interface Question {
  content: string
  form_fk: number
  type: string
  options: Option[]
}

export interface Option {
  content: string
  value: any
  isResponse: boolean
}

interface TagDto {
  idTag: number;
}

export interface CreateActivitiesTagsDto {
  items: TagDto[];
  idActivitie: number
}


export interface ActivitiesOne {
  id: number
  name: string
  description: string
  expected_return: string
  type_activities: string
  points_activities: number
  difficult: string
  time_activities: number
  createdAt: string
  updatedAt: string
  classesId: number
  tags_activities: Tag_Activities
  activities_group_avaliation: ActivitiesGroupAvaliation[]
  form: Form
}

export interface Tag {
  id: number
  createdAt: string
  content: string
  type: string
}

export interface ActivitiesGroupAvaliation {
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


export interface PropsQuestionUpdate {
  id: number
  content: string
}
