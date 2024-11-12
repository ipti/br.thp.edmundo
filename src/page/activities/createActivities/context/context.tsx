import { createContext } from "react";
import { CreateActivitiesState } from "./state";
import { CreateActivitiesType } from "../../type";

export const CreateActivitiesContext = createContext<CreateActivitiesType | null>(null);

const CreateActivitiesProvider = ({ children }: { children: React.ReactNode }) => {

    const { CreateActivities, initialValue, setTagsActivities, tagsActivities, tags, AddEditorImage } = CreateActivitiesState()

    return (
        <CreateActivitiesContext.Provider value={{ CreateActivities, initialValue, setTagsActivities, tagsActivities, tags, AddEditorImage }}>
            {children}
        </CreateActivitiesContext.Provider>
    )
}

export default CreateActivitiesProvider;