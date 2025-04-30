/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { updateData } from "@/lib/CallPrisma";
import { nazionData, nazionProps } from "@/lib/type";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FightNation from "../ui/fightNation";

function setScores(
	nazion: string,
	pointH: number,
	pointF: number,
	Giornata: number,
) {
	let nazionState: nazionData = {
		PG: Giornata,
		DR: pointH - pointF,
		nations: nazion,
		pts: 0,
		GS: pointH,
		GC: pointF,
		victory: 0,
		tie: 0,
		loser: 0,
	};

	if (pointH > pointF) {
		nazionState.pts += 3;
		nazionState.victory = 1;
	} else if (pointH < pointF) {
		nazionState.loser = 1;
	} else if (pointH == pointF) {
		nazionState.pts += 1;
		nazionState.tie = 1;
	}
	return nazionState;
}

export default function TabelSquad(el: nazionProps) {
	const Sim = useSearchParams().get("sim");
	let [pointH] = useState(Math.floor(Math.random() * (4 - 0) + 0));
	let [pointF] = useState(Math.floor(Math.random() * (4 - 0) + 0));
	let [load, setload] = useState(true);

	async function data(pH: number, pF: number) {
		const NazionH = setScores(el.nazioneH, pH, pF, el.giornata);
		const NazionF = setScores(el.nazioneF, pF, pH, el.giornata);

		await (updateData(NazionH), updateData(NazionF));
	}

	if (Sim) {
		useEffect(() => {
			try {
				data(pointH, pointF);
				setload(false);
			} catch (error) {
				console.log(error);
			}
		}, []);

		return (
			<FightNation
				nazioneH={el.nazioneH}
				nazioneF={el.nazioneF}
				pointH={pointH}
				pointF={pointF}
				load={load}
			/>
		);
	}

	//in entrata
	return (
		<FightNation
			nazioneH={el.nazioneH}
			nazioneF={el.nazioneF}
			pointH={0}
			pointF={0}
		/>
	);
}
