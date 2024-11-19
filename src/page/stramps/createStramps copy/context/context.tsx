import { createContext } from "react";
import {  UpdateStampsState } from "./state";
import { StampsContextTypes } from "./types";

export const StampsContext = createContext<StampsContextTypes | null>(null);

const StampsProvider = ({ children }: { children: React.ReactNode }) => {

    const { UpdateStamps, file, setFile, StampsOne, isLoading } = UpdateStampsState()

    return (
        <StampsContext.Provider value={{ UpdateStamps, file, setFile, StampsOne, isLoading }}>
            {children}
        </StampsContext.Provider>
    )
}

export default StampsProvider;