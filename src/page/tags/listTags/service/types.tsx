import { Type_Tags } from "../../../../Controller/controllerGlobal"

export interface CreateTagsTypes {
    name?: string
    type: Type_Tags | string
}