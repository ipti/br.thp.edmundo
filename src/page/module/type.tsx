
export interface ListModulesContextType {
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
