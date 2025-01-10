import {CreateGroup } from "../service/types";

export interface CreateGroupContextType {
    CreateGroup: (body: CreateGroup) => void;
    typeGroupList: any
}