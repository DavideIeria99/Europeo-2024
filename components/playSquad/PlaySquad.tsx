"use client";

import { playProps } from "@/lib/type";

import ButtomSim from "../Buttom/ButtomSim";
import TabelSquad from "./TabelSquad";
import { usePlayContext } from "@/lib/context/playGirons/plays";
import { updateData } from "@/lib/CallPrisma";
import { useEffect } from "react";

export default function PlaySquad(props: playProps) {
	const { machts } = usePlayContext();
	useEffect(() => {
		if (machts.length === 48) {
			updateData(machts.slice(0, 24));
		}
		console.log("PlaySquad machts:", machts.length);
	}, [machts]);
	return (
		<section>
			<ButtomSim href="/groupStage" />

			{props.Gironi.map((nazion, _) => (
				<section
					key={_}
					className=" pb-3">
					<h3 className="text-center bg-euroPrimary text-white font-bold text-2xl p-4 mb-3  sticky top-0 z-20">
						Girone {nazion.tipo}
					</h3>
					{nazion.partite.map((el, _) => (
						<TabelSquad
							key={_}
							giornata={props.giornata}
							nazioneH={el.nazioneH}
							nazioneF={el.nazioneF}
						/>
					))}
				</section>
			))}
		</section>
	);
}
