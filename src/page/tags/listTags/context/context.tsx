import { createContext } from "react";
import { CreateTagsState } from "./state";
import { TagsContextTypes } from "./types";

export const TagsContext = createContext<TagsContextTypes | null>(null);

const TagsProvider = ({ children }: { children: React.ReactNode }) => {

    const { CreateTags, tags, DeleteTags, UploadTags } = CreateTagsState()

    return (
        <TagsContext.Provider value={{ CreateTags, tags, DeleteTags, UploadTags }}>
            {children}
        </TagsContext.Provider>
    )
}

export default TagsProvider;