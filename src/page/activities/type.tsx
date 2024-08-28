export interface CreateActivities {
    name: string,
    description: string,
    type_activities: Type_Activities,
    points_activities: number,
    difficult: Difficulties,
    time_activities: number
}

export interface CreateActivitiesType {
    initialValue: CreateActivities;
    CreateActivities: (body: CreateActivities) => void;
}

enum Difficulties {
    BAIXO,
    MEDIO,
    ALTO,
    MUITO_ALTO
  }
  
  enum Type_Activities {
    QUIZ,
    CODE
  }