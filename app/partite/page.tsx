import ButtomSim from "@/components/Buttom/ButtomSim";
import PlaySquad from "@/components/playSquad/PlaySquad";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useSearchParams } from "next/navigation";

import React from "react";

export default function page() {
	const partite = [
		{
			Giornata: 1,
			girone: "A",
			Gironi: [
				{
					tipo: "A",
					partite: [
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
					],
				},
				{
					tipo: "B",
					partite: [
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
					],
				},
				{
					tipo: "C",
					partite: [
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
					],
				},
			],
		},
		{
			Giornata: 2,
			girone: "A",
			Gironi: [
				{
					tipo: "A",
					partite: [
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
					],
				},
				{
					tipo: "B",
					partite: [
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
					],
				},
				{
					tipo: "C",
					partite: [
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
					],
				},
			],
		},
		{
			Giornata: 3,
			girone: "A",
			Gironi: [
				{
					tipo: "A",
					partite: [
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
					],
				},
				{
					tipo: "B",
					partite: [
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
					],
				},
				{
					tipo: "C",
					partite: [
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
						{
							nationH: "italia",
							puntiH: 0,
							nationF: "spagna",
							puntiF: 0,
						},
						{
							nationH: "francia",
							puntiH: 0,
							nationF: "Germania",
							puntiF: 0,
						},
					],
				},
			],
		},
	];

	//@todo creare funzione random conta
	return (
		<main className="bg-euroPrimary/85 min-h-screen pb-2 ">
			<h2 className="h-auto   p-3 text-center w-full bg-euroTerziary text-white text-8xl">
				Giornate
			</h2>
			{/* section white */}

			<section className="bg-white mx-auto w-4/5 h-screen my-3 rounded pb-3  overflow-auto">
				{partite.map((el, _) => (
					// partite
					<PlaySquad
						key={_}
						Giornata={el.Giornata}
						Gironi={el.Gironi}
					/>
				))}
			</section>
			<ButtomSim />
		</main>
	);
}
