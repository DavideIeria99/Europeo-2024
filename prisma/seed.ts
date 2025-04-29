'use server'
import { NationData, GroupsData } from "./data";

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const preparedGroups = GroupsData.map(g => ({
    nationName: g.nationName!,
    Groups: g.Groups!,
    PG: g.PG ?? 0,
    pts: g.pts ?? 0,
    victory: g.victory ?? 0,
    tie: g.tie ?? 0,
    loser: g.loser ?? 0,
    GS: g.GS ?? 0,
    GC: g.GC ?? 0,
    DR: g.DR ?? 0,

}));

export const load = async () => {
    try {
        await prisma.groups.deleteMany();
        await prisma.directState.deleteMany();
        await prisma.nation.deleteMany();
        console.log("Deleted records in product table");
        const tables = ['groups', 'direct_state', 'nation'];

        for (const table of tables) {
            await prisma.$executeRawUnsafe(`ALTER TABLE \`${table}\` AUTO_INCREMENT = 1`);
        }



        console.log("reset product auto increment to 1");

        await prisma.nation.createMany({
            data: NationData,
        });
        await prisma.groups.createMany({
            data: preparedGroups,
        });

        console.log("Added product data");
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

load()