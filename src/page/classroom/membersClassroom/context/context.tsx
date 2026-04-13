import { createContext } from "react";
import { MembersClassroomState } from "./state";
import { MembersClassroomContextType } from "./types";

export const MembersClassroomContext = createContext<MembersClassroomContextType | null>(null);

const MembersClassroomProvider = ({ children }: { children: React.ReactNode }) => {

    const {
        classroomMembersList,
        isError,
        isLoading,
        handleRemoveMember,
        isLoadingRemoveMember,
        teachers,
        handleAddTeacher,
        isLoadingAddTeacher
    } = MembersClassroomState()

    return (
        <MembersClassroomContext.Provider value={{
            classroomMembersList,
            isError,
            isLoading,
            handleRemoveMember,
            isLoadingRemoveMember,
            teachers,
            handleAddTeacher,
            isLoadingAddTeacher
        }}>
            {children}
        </MembersClassroomContext.Provider>
    )
}

export default MembersClassroomProvider;
