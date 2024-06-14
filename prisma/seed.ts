import { NationData, GroupsData } from "./data";

const { PrismaClient } = require("@prisma/client");


const prisma = new PrismaClient();


const load = async () => {
    try {
        await prisma.Groups.deleteMany();
        await prisma.Nation.deleteMany();
        console.log("Deleted records in product table");

        await prisma.$queryRaw`ALTER SEQUENCE "Groups_id_seq" RESTART WITH 1`;
        await prisma.$queryRaw`ALTER SEQUENCE "Nation_id_seq" RESTART WITH 1`;

        console.log("reset product auto increment to 1");

        await prisma.Nation.createMany({
            data: NationData,
        });
        await prisma.Groups.createMany({
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