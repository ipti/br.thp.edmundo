import { CreateTagsTypes } from "../service/types";

export interface TagsContextTypes {
    CreateTags: (body: CreateTagsTypes) => void;
    tags: any
    DeleteTags: (id: number) => void
    UploadTags: (body: CreateTagsTypes, id: number) => void
}
