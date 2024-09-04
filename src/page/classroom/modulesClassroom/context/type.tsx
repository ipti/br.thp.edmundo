import { AddModuleClassroom, ModuleClassroom } from "../type";

export interface ClassroomModulesContextType {
    modulesClassroomList: ModulesList | undefined;
    isLoading: boolean;
    isError: boolean;
    AddModuleClassroom: (body: AddModuleClassroom) => void
    UpdateModuleClassroom: (body: {
      active: boolean;
  }, id: number) => void
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
  activities: any[]
}

export interface ClassroomClass {
  id: number
  active: boolean
  classes_fk: number
  classroom_fk: number
}
