export interface ClassroomModulesActivities {
  name: string
  id: number
  classroom_module: ClassroomModule[]
}

export interface ClassroomModule {
  classroom: Classroom
  module: Module
}

export interface Classroom {
  classroom_activities: ClassroomActivity[]
}

export interface ClassroomActivity {
  activities: Activities
  id: number
}

export interface Activities {
  name: string
  id: number
  classes: {
    moduleId: number
  }
}

export interface Module {
  name: string
  id: number
}
