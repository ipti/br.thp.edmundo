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
    name: string
    points_activities: number
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
