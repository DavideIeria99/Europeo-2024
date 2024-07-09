'use server'
import { prisma } from "@/prisma/prisma";
import { Groups } from "@prisma/client";
import { redirect } from "next/navigation";



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

export async function DataDirect(arr: Groups[]) {
    console.log('ci sono');


    arr.map(async (el) => {
        await prisma.directState.createMany({
            data: {
                nationId: el.nationId,
                OneEight: true
            },
            skipDuplicates: true,
        })
    })



    redirect('directStage/OneEight');


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
            DR: { increment: nazion.GF - nazion.GS },
            GS: { increment: nazion.GF },
            GC: { increment: nazion.GS },
        },
    });

    return console.log("nazione: ", nazion.nazion);
}