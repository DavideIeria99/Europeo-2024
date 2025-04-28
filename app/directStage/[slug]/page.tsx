import ButtomSim from "@/components/Buttom/ButtomSim";
import TabelDirect from "@/components/playSquad/TabelDirect";
import { paramsprops } from "@/lib/type";
import { prisma } from "@/prisma/prisma";
import { DirectState } from "@prisma/client";

import Image from "next/image";

import React from "react";
//creazione gruppi
async function sortingGroup(arr: DirectState[] | undefined) {
	if (arr == undefined) {
		return;
	}
	let groupDefinitve = [];
	if (arr.length == 1) {
		return {
			name: arr[0].nation,
		};
	}

	// console.log("lunghezza", arr);
	if (arr.length === 1) {
		groupDefinitve.push({ nazion: arr[0].nation });
	}
	if (arr.length > 1) {
		for (let i = 0; i < arr.length; i += 2) {
			groupDefinitve.push({
				nazionH: arr[i].nation,
				nazionF: arr[i + 1].nation,
				pointH: 0,
				pointF: 0,
			});
		}
	}

	// console.log("nazione", groupDefinitve);

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
	const dataNation: DirectState[] | any = await dataDirect(params.slug).then(
		(data) => sortingGroup(data),
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
	//in caso di Vittoria
	if (params.slug == "Winner") {
		console.log("prova", dataNation);

		return (
			<main className="min-h-screen w-full bg-euroPrimary/80 relative">
				<h2 className="h-auto p-3 text-center w-full bg-euroTerziary text-white text-8xl">
					{params.slug}
				</h2>
				{/* <button
					onClick={() => reset}
					className="bg-euroSecondary hover:bg-euroPrimary text-white p-4 absolute top-32 left-2 rounded uppercase">
					Home
				</button> */}
				<ButtomSim home={true} />
				{/* section white */}

				<section className="bg-euroTerziary text-white mx-auto w-4/5  h-auto my-3 rounded p-3 bg-no-repeat bg-center bg-cover bg-[url(/media/luci.png)] ">
					<Image
						className="h-64 w-64 mx-auto p-10 bg-euroPrimary/20  "
						width={200}
						height={200}
						src={"/media/euro2024.png"}
						alt="coppa"
					/>
					<div className="text-6xl font-black text-center mt-2 p-3">
						<h1 className="bg-euroSecondary inline px-3   ">
							{dataNation && dataNation.name}
						</h1>
					</div>
				</section>
			</main>
		);
	}
	//tutti gli altri casi
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
