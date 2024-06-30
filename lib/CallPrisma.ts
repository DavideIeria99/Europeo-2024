'use server'
import { prisma } from "@/prisma/prisma";
import { Groups } from "@prisma/client";



export interface nazionUpdate {
    PG: number,
    nazion: string,
    punteggio: number,
    GF: number,
    GS: number,
    V: number,
    P: number,
    S: number,
}
export const GroupData = async () => {
    return await prisma.groups.findMany();
};
export const GroupFind = async (State: string) => {
    return await prisma.groups.findFirst({
        where: {
            nationId: State
        }
    })
}





export const updateData = async (nazion: nazionUpdate) => {
    const State: Groups | null = await GroupFind(nazion.nazion);

    if (State?.PG == nazion.PG) {
        return;
    }

    await prisma.groups.update({
        where: {
            nationId: nazion.nazion,
        },
        data: {
            PG: nazion.PG,
            pts: { increment: nazion.punteggio },
            victory: { increment: nazion.V },
            tie: { increment: nazion.P },
            loser: { increment: nazion.S },
            GS: { increment: nazion.GF },
            GC: { increment: nazion.GS },
        },
    });

    return console.log("nazione: ", nazion.nazion);
}