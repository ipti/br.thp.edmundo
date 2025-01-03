import {CreateGroup } from "../service/types";

export interface CreateGroupContextType {
    initialValue: CreateGroup;
    CreateGroup: (body: CreateGroup) => void;
}