import { createContext } from "react";
import AplicationState from "./state";
import { PropsAplicationContext } from "./type";

export const AplicationContext = createContext<PropsAplicationContext | null>(null);

const AplicationProvider = ({ children }: { children: React.ReactNode }) => {

    const {  user } = AplicationState();

    return (
        <AplicationContext.Provider value={{ user }}>
            {children}
        </AplicationContext.Provider>
    )
}

export default AplicationProvider;