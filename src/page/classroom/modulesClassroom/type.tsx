export interface AddModuleClassroom {
    idModule: number, 
    idClassroom: number
}


export interface ModuleClassroom {
    id: number
    active: boolean
    module_fk: number
    classroom_fk: number
    module: Module
  }
  
  export interface Module {
    id: number
    name: string
    description: string
    createdAt: string
    updatedAt: string
  }
  