import { createContext } from "react";
import { CreateClassroomState } from "./state";
import { CreateClassroomContextType } from "./types";

export const CreateClassroomContext = createContext<CreateClassroomContextType | null>(null);

const CreateClassroomProvider = ({ children }: { children: React.ReactNode }) => {

    const { CreateClassroom, initialValue } = CreateClassroomState()

    return (
        <CreateClassroomContext.Provider value={{ CreateClassroom, initialValue }}>
            {children}
        </CreateClassroomContext.Provider>
    )
}

export default CreateClassroomProvider;