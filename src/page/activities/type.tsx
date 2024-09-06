export interface CreateActivities {
    name: string,
    description: string,
    type_activities: string,
    points_activities: number,
    difficult: { id: string; name: string; },
    time_activities: number,
    id_classes: number
}

export interface CreateActivitiesType {
    initialValue: CreateActivities;
    CreateActivities: (body: CreateActivities) => void;
}


  
