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
  activitiesOne: any;

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
  value: number
  isResponse: boolean
}
