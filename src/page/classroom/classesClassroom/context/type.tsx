import { AddClasseClassroom } from "../type";

export interface ClassroomClasseContextType {
  classeClassroomList: ClassesList | undefined;
  isLoading: boolean;
  isError: boolean;
  AddclasseClassroom: (body: AddClasseClassroom) => void;
  allclasseList: any;
  UpdateclasseClassroom: (body: {
      active: boolean;
  }, id: number) => void;
}


export type ClassesList = Classes[]



export interface Classes {
  id: number
  active: boolean
  module_fk: number
  classroom_fk: number
  module: Module
}

export interface Module {
  name: string
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
}


export interface Classes {
  active: boolean
  name: string
}

