import { prisma } from "@/prisma/prisma";


export const GroupData = async () => {
    return await prisma.groups.findMany();
};