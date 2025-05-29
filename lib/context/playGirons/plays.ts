'use client'

import { nazionData } from "@/lib/type";
import { createContext, useContext } from "react"


interface PlayContextProps {
    machts: nazionData[];
    addMach: (nazions: nazionData) => void;

}


export const PlayContext = createContext<PlayContextProps | undefined>(undefined)

export function usePlayContext() {
    const context = useContext(PlayContext);
    // Check if context is undefined, which means usePlayContext was called outside of PlayProvider
    if (!context) {
        throw new Error("usePlayContext must be used within a PlayProvider");
    }
    return context;
}
