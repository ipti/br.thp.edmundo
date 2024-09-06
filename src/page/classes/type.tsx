export interface CreateClasses {
    name: string,
    objective?: string,
    necessary_material?: string,
    duration?: number,
    module_id?: number
}

export interface CreateClassesContextType {
    initialValue: CreateClasses;
    CreateClasses: (body: CreateClasses) => void;
}