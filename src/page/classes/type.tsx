export interface CreateClasses {
    name: string,
    objective?: string,
    necessary_material?: string,
    duration?: number,
    module_id?: number,
    content?: string
}

export interface CreateClassesContextType {
    initialValue: CreateClasses;
    CreateClasses: (body: CreateClasses) => void;
}


export interface EditClasses {
    name: string,
    objective?: string,
    necessary_material?: string,
    duration?: number,
    content?: string
}


export interface EditClassesContextType {
    initialValue: EditClasses;
    EditClasses: (body: EditClasses, id: number) => void;
    classesOne: Classes | undefined
}

export interface Classes {
    id: number
    name: string
    necessary_material: string
    objective: string
    duration: number
    active: boolean
    createdAt: string
    updatedAt: string
    moduleId: number
    content: string
  }
  