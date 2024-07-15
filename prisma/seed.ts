'use server'
import { NationData, GroupsData } from "./data";

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export const load = async () => {
    try {
        await prisma.groups.deleteMany();
        await prisma.directState.deleteMany();
        await prisma.nation.deleteMany();
        console.log("Deleted records in product table");

        await prisma.$queryRaw`ALTER SEQUENCE "Groups_id_seq" RESTART WITH 1`;
        await prisma.$queryRaw`ALTER SEQUENCE "DirectState_id_seq" RESTART WITH 1`;
        await prisma.$queryRaw`ALTER SEQUENCE "Nation_id_seq" RESTART WITH 1`;

        console.log("reset product auto increment to 1");

        await prisma.nation.createMany({
            data: NationData,
        });
        await prisma.groups.createMany({
            data: GroupsData,
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