export interface CreateActivities {
    name: string,
    description: string,
    type_activities: { id: string; name: string; },
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
    name: string,
    description: string,
    type_activities: string,
    points_activities: number,
    difficult: { id: string; name: string; },
    time_activities: number,
}

export interface EditActivitiesType {
    initialValue: EditActivities;
    EditActivities: (body: EditActivities, id: number) => void;
    isLoading: boolean;
    isError: boolean;
    activitiesOne: any;

}





