import { AddModuleClassroom, ModuleClassroom } from "../type";

export interface ClassroomModulesContextType {
    modulesClassroomList: ModuleClassroom[] | undefined;
    allmodulesList: ModulesList | undefined
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
  