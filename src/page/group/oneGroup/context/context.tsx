import { createContext } from "react";
import {  UpdateGroupState } from "./state";
import { GroupOneContextTypes } from "./types";

export const GroupOneContext = createContext<GroupOneContextTypes | null>(null);

const GroupOneProvider = ({ children }: { children: React.ReactNode }) => {

    const { UpdateGroup, file, setFile, GroupOne, isLoading, CreateMetricGroup } = UpdateGroupState()

    return (
        <GroupOneContext.Provider value={{ UpdateGroup, file, setFile, GroupOne, isLoading, CreateMetricGroup }}>
            {children}
        </GroupOneContext.Provider>
    )
}

export default GroupOneProvider;