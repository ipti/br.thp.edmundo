import { CreateUserTypes } from "../service/types";

export interface SignUpContextTypes {
    initialValue: CreateUserTypes;
    CreateUser: (body: CreateUserTypes) => void;
}
