'use client'

import { nazionData } from "@/lib/type";
import { createContext, Dispatch, SetStateAction, useContext } from "react"


interface PlayContextProps {
    machts: nazionData[];
    addMach: (nazions: nazionData) => void;

}

export type passNationType = {
    nazione: string;
    state: string;
}
interface DirectContextProps {
    passNation: passNationType[];
    setPassNation: Dispatch<SetStateAction<passNationType[]>>;
    addPassNation: (nazione: string, state: string) => void;
}


///* context per la fase a gironi 
export const PlayContext = createContext<PlayContextProps | undefined>(undefined)

export function usePlayContext() {
    const context = useContext(PlayContext);
    // Check if context is undefined, which means usePlayContext was called outside of PlayProvider
    if (!context) {
        throw new Error("usePlayContext must be used within a PlayProvider");
    }
    return context;

}

//* context per la fase diretta */
export const DirectContext = createContext<DirectContextProps | undefined>(undefined)
export function useDirectContext() {
    const context = useContext(DirectContext);
    // Check if context is undefined, which means useDirectContext was called outside of DirectProvider
    if (!context) {
        throw new Error("useDirectContext must be used within a DirectProvider");
    }
    return context;
}
