export interface GroupProps {
    girone: {
        nations: string;
        PG: number;
        victory: number;
        tie: number;
        loser: number;
        GS: number;
        GC: number;
        point: number;
    }[];
    nation: string;
}