import { CreateReapplication } from "../service/types";

export interface CreateReapplicationContextType {
    initialValue: CreateReapplication;
    CreateReapplication: (body: CreateReapplication) => void;
}