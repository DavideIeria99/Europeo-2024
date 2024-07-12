export interface GroupProps {
    girone: {
        nations: string;
        PG: number;
        victory: number;
        tie: number;
        loser: number;
        GS: number;
        DR: number;
        GC: number;
        point: number;
    }[];
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