import ButtomSim from "@/components/Buttom/ButtomSim";
import TabelDirect from "@/components/playSquad/TabelDirect";
import { paramsprops } from "@/lib/type";
import { NationData } from "@/prisma/data";
import { prisma } from "@/prisma/prisma";
import { DirectState } from "@prisma/client";

import React from "react";

async function sortingGroup(arr: DirectState[] | undefined) {
	if (arr == undefined) {
		return;
	}
	let groupDefinitve = [];
	console.log("lunghezza", arr.length);
	for (let i = 0; i < arr.length; ) {
		if (arr.length === 1) {
			return groupDefinitve.push({ nazion: arr[i].nationId });
		}
		groupDefinitve.push({
			nazionH: arr[i].nationId,
			nazionF: arr[i + 1].nationId,
			pointH: 0,
			pointF: 0,
		});
		i += 2;
	}

	// console.log("nazione", groupDefinitve);

	return groupDefinitve;
}

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
	const dataNation: DirectState[] | any = await dataDirect(params.slug).then(
		(data) => {
			if (data?.length == 1) {
				return data;
			}
			sortingGroup(data);
		},
	);
	let direction: string = params.slug;

	switch (params.slug) {
		case "OneEight":
			direction = "OneFour";
			break;
		case "OneFour":
			direction = "Semifinal";
			break;
		case "Semifinal":
			direction = "Final";
			break;
		case "Final":
			direction = "Winner";
			break;
	}

	if (params.slug == "Winner") {
		console.log(dataNation);

		return (
			<main className="min-h-screen w-full bg-euroPrimary/80 relative">
				<h2 className="h-auto p-3 text-center w-full bg-euroTerziary text-white text-8xl">
					{params.slug}
				</h2>
				<ButtomSim href={`/directStage/${direction}`} />
				{/* section white */}

				<section className="bg-white mx-auto w-4/5  my-3 rounded pb-3  overflow-auto">
					<h1>{dataNation[0].nationId}</h1>
				</section>
			</main>
		);
	}
	return (
		<main className="min-h-screen w-full bg-euroPrimary/80 relative">
			<h2 className="h-auto p-3 text-center w-full bg-euroTerziary text-white text-8xl">
				{params.slug}
			</h2>
			<ButtomSim href={`/directStage/${direction}`} />
			{/* section white */}

			<section className="bg-white mx-auto w-4/5  my-3 rounded pb-3  overflow-auto">
				{dataNation &&
					dataNation.map(
						(el: { nazionH: string; nazionF: string }, _: React.Key) => (
							<div
								className="flex justify-center text-white font-bolder py-2"
								key={_}>
								<TabelDirect
									nazioneH={el.nazionH}
									nazioneF={el.nazionF}
									params={params.slug}
								/>
							</div>
						),
					)}
			</section>
		</main>
	);
}
