import { AddAtivitiesClassroom, AddClasseClassroom, AddModuleClassroom } from "../type";

export interface ClassroomModulesContextType {
  allModules: ModuleList | undefined
  modulesClassroomList: ModulesList | undefined;
  isLoading: boolean;
  isError: boolean;
  AddModuleClassroom: (body: AddModuleClassroom) => void
  UpdateModuleClassroom: (body: {
    active: boolean;
  }, id: number) => void
  AddclasseClassroom: (body: AddClasseClassroom) => void
  UpdateclasseClassroom: (body: {
    active: boolean;
  }, id: number) => void
  AddActivitiesClassroom: (body: AddAtivitiesClassroom) => void
  UpdateActivitiesClassroom: (body: {
    active: boolean;
  }, id: number) => void
  RemoveModuleClassroom: (body: AddModuleClassroom) => void
}

export type ModulesList = Modules[]





export interface Modules {
  id: number
  name: string
  description: string
  createdAt: string
  updatedAt: string
  classroom_module: ClassroomModule[]
  classes: Class[]
}

export interface ClassroomModule {
  id: number
  active: boolean
  module_fk: number
  classroom_fk: number
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
  classroom_classes: ClassroomClass[]
  activities: Activities[]
}

export interface Activities {
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
  classroom_activities: any[]
}
export interface ClassroomClass {
  id: number
  active: boolean
  classes_fk: number
  classroom_fk: number
}


export type ModuleList = Module[]

export interface Module {
  id: number
  name: string
  description: string
  createdAt: string
  updatedAt: string
  classroom_module: ClassroomModule[]
}

export interface ClassroomModule {
  id: number
  active: boolean
  module_fk: number
  classroom_fk: number
}
