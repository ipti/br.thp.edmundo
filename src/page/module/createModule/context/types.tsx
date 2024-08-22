import {CreateModule } from "../service/types";

export interface CreateModuleContextType {
    initialValue: CreateModule;
    CreateModule: (body: CreateModule) => void;
}