
export interface ListModulesContextType {
  DeleteModule: (id: number) => void
  modulesList: ModulesList | undefined;
  isLoading: boolean;
  isError: boolean;
}

export type ModulesList = Modules[]



export interface Modules {
  id: number
  name: string
  description: string
  createdAt: string
  updatedAt: string
  classes: Class[]
}

export interface Class {
  id: number
  name: string
  necessary_material: string
  objective: string
  duration: number
  active: boolean
  createdAt: string
  updatedAt: string
  moduleId: number
  activities: Activity[]
}

export interface Activity {
  id: number
  name: string
  description: any
  type_activities: string
  points_activities: number
  difficult: string
  time_activities: number
  createdAt: string
  updatedAt: string
  classesId: number
}



export interface CreateModule {
  name: string,
  description?: string
}

export interface CreateModuleContextType {
  initialValue: CreateModule;
  CreateModule: (body: CreateModule) => void;
}


export interface OneModulesContextType {
  moduleOne: Modules | undefined;
  isLoading: boolean;
  isError: boolean;
}
