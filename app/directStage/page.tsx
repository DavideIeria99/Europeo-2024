import { GroupData } from "@/lib/CallPrisma";
import { Groups } from "@prisma/client";
import React from "react";

export default async function page() {
	const nation: Groups[] = await GroupData();
	const prova = nation
		.sort((a, b) => {
			if (b.victory == a.victory) {
				return b.GS - a.GS;
			}
			if (b.pts == a.pts) {
				return b.victory - a.victory;
			}
			return b.pts - a.pts;
		})
		.slice(0, 16);

	return (
		<main className="w-full min-h-screen bg-euroPrimary/80 pb-2">
			<h1 className="capitalize h-auto p-3 mb-5 text-center w-full bg-euroTerziary  text-white text-8xl">
				eliminazione diretta
			</h1>
			<section className="mx-auto bg-white rounded w-4/5 min-h-64 p-2 gap-4 grid grid-cols-4">
				{prova &&
					prova.map((el, _) => (
						<div
							className="p-2 rounded w-auto bg-euroSecondary text-white"
							key={_}>
							<h3>nazione: {el.nationId}</h3>
							<p>punti: {el.pts}</p>
						</div>
					))}
			</section>
		</main>
	);
}
