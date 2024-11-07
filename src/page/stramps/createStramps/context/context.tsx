import { createContext } from "react";
import { CreateStampsState } from "./state";
import { StampsContextTypes } from "./types";

export const StampsContext = createContext<StampsContextTypes | null>(null);

const StampsProvider = ({ children }: { children: React.ReactNode }) => {

    const { CreateStamps, file, setFile } = CreateStampsState()

    return (
        <StampsContext.Provider value={{ CreateStamps, file, setFile }}>
            {children}
        </StampsContext.Provider>
    )
}

export default StampsProvider;