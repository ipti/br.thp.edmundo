import { LoginTypes } from "../service/types";

export interface LoginContextText {
    initialValue: LoginTypes;
    Login: (body: LoginTypes) => void;
}