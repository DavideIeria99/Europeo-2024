export interface GroupProps {
    girone: nazionData[];
    nation: string;
}

export interface playProps {
    giornata: number;
    Gironi: {
        tipo: string;
        partite: {
            nazioneH: string;
            puntiH: number;
            nazioneF: string;
            puntiF: number;
        }[];
    }[];
}

export interface nazionProps {
    giornata: number;
    nazioneH: string;
    nazioneF: string;

}

export interface paramsprops {
    params: {
        slug: string
    };
}

export interface DirectNazionProps {
    nazioneH: string;
    nazioneF: string;
    params: string
}

export interface nazionData {
    nations: string;
    victory: number;
    PG: number;
    tie: number;
    loser: number;
    GS: number;
    DR: number;
    GC: number;
    pts: number;
}