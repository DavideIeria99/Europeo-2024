import { paramsprops } from "@/lib/type";
import { prisma } from "@/prisma/prisma";
import React from "react";

export const dataDirect = async (params: string) => {
	return await prisma.directState.findMany({
		where: {
			OneEight: true,
		},
	});
};
export default async function page({ params }: paramsprops) {
	const dataNation = await dataDirect(params.slug);
	console.log(dataNation);

	return <main className="h-screen w-full bg-euroPrimary/80"></main>;
}
