'use server'
import { GroupsData, NationData } from "@/prisma/data";
import { prisma } from "@/prisma/prisma";
import { Groups } from "@prisma/client";
import { redirect } from "next/navigation";
import { nazionData } from "./type";

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
//prendo i dati
export const GroupData = async () => {
    return await prisma.groups.findMany();
};

//cancello i dati db DirectState
export const DeleteDirectData = async () => {
    await prisma.directState.deleteMany();
    await prisma.$queryRaw`ALTER SEQUENCE "DirectState_id_seq" RESTART WITH 1`;

    console.log("reset completato");

    redirect('/directStage')

};

//cerco una nazione
export const GroupFind = async (State: string) => {
    return await prisma.groups.findFirst({
        where: {
            nationName: State
        }
    })
}

//aggiungo i dati db directState
export async function DataDirect(arr: nazionData[]) {
    console.log('ci sono');


    arr.map(async (el) => {
        await prisma.directState.createMany({
            data: {
                nation: el.nations,
                OneEight: true
            },
            skipDuplicates: true,
        })
    })



    redirect('directStage/OneEight');


}


//punti fase a gironi
export const updateData = async (nazion: nazionUpdate) => {
    const State: Groups | null = await GroupFind(nazion.nazion);

    if (State?.PG == nazion.PG) {
        return;
    }

    await prisma.groups.update({
        where: {
            nationName: nazion.nazion,
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

//aggiorno i directState
export const updateDataDirect = async (nation: string, params: string) => {
    switch (params) {
        case "Final":
            return await prisma.directState.update({
                where: {
                    nation
                },
                data: {
                    Winner: true,
                },
            });
        case "Semifinal":
            return await prisma.directState.update({
                where: {
                    nation
                },
                data: {
                    Final: true,
                },
            });
        case "OneFour":
            return await prisma.directState.update({
                where: {
                    nation
                },
                data: {
                    SemiFinal: true,
                },
            });
        case "OneEight":
            return await prisma.directState.update({
                where: {
                    nation
                },
                data: {
                    OneFour: true,
                },
            });
    }
}

export async function reset() {

    await prisma.groups.deleteMany();
    await prisma.directState.deleteMany();
    await prisma.nation.deleteMany();
    console.log("Deleted records in product table");
    const tables = ['groups', 'direct_state', 'nation'];

    for (const table of tables) {
        await prisma.$executeRawUnsafe(`ALTER TABLE \`${table}\` AUTO_INCREMENT = 1`);
    }
    console.log("reset product auto increment to 1");
    redirect("/");
}
export async function create() {
    const preparedGroups = GroupsData.map(g => ({
        nationName: g.nationName!,
        Groups: g.Groups!,
        PG: g.PG ?? 0,
        victory: g.victory ?? 0,
        tie: g.tie ?? 0,
        loser: g.loser ?? 0,
        GS: g.GS ?? 0,
        GC: g.GC ?? 0,
        DR: g.DR ?? 0,
        pts: g.pts ?? 0,
    }));

    await prisma.nation.createMany({
        data: NationData,
        skipDuplicates: true,
    });
    await prisma.groups.createMany({
        data: preparedGroups,
        skipDuplicates: true,
    });

    console.log("createData");
    redirect("/groupStage");
}