export interface CreateActivities {
  name: string,
  description: string,
  type_activities: { id: string; name: string; },
  expected_return?: string
  points_activities: number,
  difficult: { id: string; name: string; },
  time_activities: number,
  id_classes: number
}

export interface CreateActivitiesType {
  initialValue: CreateActivities;
  CreateActivities: (body: CreateActivities) => void;
}

export interface EditActivities {
  expected_return?: string
  name: string,
  description: string,
  points_activities: number,
  difficult: { id: string; name: string; },
  type_activities: { id: string; name: string; }
  time_activities: number,
}

export interface EditActivitiesType {
  initialValue: EditActivities;
  EditActivities: (body: EditActivities, id: number) => void;
  isLoading: boolean;
  isError: boolean;
  activitiesOne: ActivitiesOne;

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
}

export interface Form {
  id: number
  activitiesId: number
  createdAt: string
  question: Questions
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
