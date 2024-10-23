export interface UserActivities {
    id: number
    status: string
    createdAt: string
    updatedAt: string
    activities_fk: number
    user_classroomId: number
    user_avaliation: UserAvaliation
    activities: Activities
    user_activities_archives: UserActivitiesArc[]
    user_classroom: UserClassroom
  }
  
  export interface UserAvaliation {
    id: number
    createdAt: string
    updatedAt: string
    user_activities_fk: number
    complete_the_activity_correctly: number
    content_organization: number
    completion_within_the_indicated_deadline: number
    creativity_in_the_response: any
    collaboration: any
    understanding_the_content: any
    total: number
  }
  
  export interface Activities {
    classroom_activities: ClassroomActivity[]
    name: string
    points_activities: number
    time_activities: number
    form: Form
  }

  export interface Form {
    answer_form: AnswerForm[]
  }
  
  export interface AnswerForm {
    answer_question: AnswerQuestion[]
  }
  
  export interface AnswerQuestion {
    question: Question
    answer_option: AnswerOption[]
  }
  
  export interface Question {
    content: string
    options: Option[]
    response_question: ResponseQuestion[]
  }
  
  export interface Option {
    id: number
    content: string
    value: any
    questionId: number
    createdAt: string
  }
  
  export interface ResponseQuestion {
    id: number
    option_fk: number
    question_fk: number
    createdAt: string
  }
  
  export interface AnswerOption {
    id: number
    createdAt: string
    updatedAt: string
    answer_question_fk: number
    options_fk: number
  }
  
  
  export interface ClassroomActivity {
    classroom_avaliation: ClassroomAvaliation
  }
  
  export interface ClassroomAvaliation {
    id: number
    createdAt: string
    updatedAt: string
    classroom_activities_fk: number
    complete_the_activity_correctly: boolean
    content_organization: boolean
    completion_within_the_indicated_deadline: boolean
    creativity_in_the_response: boolean
    collaboration: boolean
    understanding_the_content: boolean
  }
  
  export interface UserActivitiesArc {
    id: number
    createdAt: string
    updatedAt: string
    size: number
    original_name: string
    archive_url: string
    user_activities_fk: number
  }
  
  export interface UserClassroom {
    users: Users
  }
  
  export interface Users {
    name: string
    id: number
  }
  

export interface CreateNotasType {
  complete_the_activity_correctly?: number;
  content_organization?: number;
  completion_within_the_indicated_deadline?: number;
  creativity_in_the_response?: number;
  collaboration?: number;
  understanding_the_content?: number;
  total?: number
}
