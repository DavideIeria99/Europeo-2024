import ButtomSim from "@/components/Buttom/ButtomSim";
import DirectSquad from "@/components/directSquad/DirectSquad";
import DirectProvider from "@/lib/context/playGirons/direct-provider";
import { paramsprops } from "@/lib/type";
import { prisma } from "@/prisma/prisma";
import { DirectState } from "@prisma/client";
import Image from "next/image";
import React from "react";

export type SortingDirectState = {
	nationH: string;
	nationF: string;
};
//creazione gruppi
async function sortingGroup(arr: DirectState[] | undefined) {
	if (!arr || arr.length === 0) {
		return "Nessun dato disponibile";
	}
	let groupDefinitve: SortingDirectState[] = [];
	let winner: string = "";

	if (arr.length === 1) {
		return (winner = arr[0].nation);
	}
	if (arr.length > 1) {
		for (let i = 0; i < arr.length; i += 2) {
			groupDefinitve.push({
				nationH: arr[i].nation,
				nationF: arr[i + 1].nation,
			});
		}
	}
	return groupDefinitve;
}
//funzione chiamata
const dataDirect = async (params: string) => {
	switch (params) {
		case "Winner":
			return await prisma.directState.findMany({
				where: {
					Winner: true,
				},
			});
		case "Final":
			return await prisma.directState.findMany({
				where: {
					Final: true,
				},
			});
		case "Semifinal":
			return await prisma.directState.findMany({
				where: {
					SemiFinal: true,
				},
			});
		case "OneFour":
			return await prisma.directState.findMany({
				where: {
					OneFour: true,
				},
			});
		case "OneEight":
			return await prisma.directState.findMany({
				where: {
					OneEight: true,
				},
			});
	}
};

export default async function page({ params }: paramsprops) {
	const dataNation: DirectState[] | undefined = await dataDirect(params.slug);
	const Group: SortingDirectState[] | string = await sortingGroup(dataNation);

	return (
		<DirectProvider>
			<main className="min-h-screen w-full bg-euroPrimary/80 relative">
				<h2 className="h-auto p-3 text-center w-full bg-euroTerziary text-white text-8xl">
					{params.slug}
				</h2>
				{params.slug == "Winner" ? (
					//*in caso di Vittoria
					<>
						<ButtomSim home={true} />
						{/* section white */}

						<section className="bg-euroTerziary text-white mx-auto w-4/5  h-auto my-3 rounded py-4 bg-no-repeat bg-center bg-cover bg-[url(/media/luci.png)] ">
							<Image
								className="h-64 w-64 mx-auto p-10 bg-euroPrimary/20  "
								width={200}
								height={200}
								src={"/media/euro2024.png"}
								alt="coppa"
							/>

							<div className="text-6xl font-black text-center mt-4 p-3">
								<h1 className="bg-euroSecondary inline p-3   ">
									{typeof Group == "string" && Group}
								</h1>
							</div>
						</section>
					</>
				) : (
					typeof Group !== "string" && (
						<DirectSquad
							nazioniDirect={Group}
							state={params.slug}
						/>
					)
				)}
			</main>
		</DirectProvider>
	);
}
