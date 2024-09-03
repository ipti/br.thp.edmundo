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
  classroom: Classroom
}

export interface Module {
  name: string
}

export interface Classroom {
  classroom_classes: ClassroomClass[]
}

export interface ClassroomClass {
  classes: Classes
}

export interface Classes {
  active: boolean
  name: string
}

