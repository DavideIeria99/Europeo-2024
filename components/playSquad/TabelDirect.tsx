/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { updateDataDirect } from "@/lib/CallPrisma";
import { DirectNazionProps } from "@/lib/type";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FightNation from "../ui/fightNation";

async function setScoresDirect(
	nazionH: string,
	pointH: number,
	pointF: number,
	nazionF: string,
	params: string,
) {
	console.log("calcolo");
	//if di controllo

	if (pointH > pointF) {
		await updateDataDirect(nazionH, params);
	} else if (pointH < pointF) {
		await updateDataDirect(nazionF, params);
	} else {
		await updateDataDirect(nazionH, params);
	}

	return `<spam>${pointH}}</spam> -<spam> ${pointF} </spam>`;
}

export default function TabelSquad({
	nazioneH,
	nazioneF,
	params,
}: DirectNazionProps) {
	const Sim = useSearchParams().get("sim");
	let [pointH] = useState(Math.floor(Math.random() * (4 - 0) + 0));
	let [pointF] = useState(Math.floor(Math.random() * (4 - 0) + 0));
	let [load, setload] = useState(true);

	async function data() {
		await setScoresDirect(nazioneH, pointH, pointF, nazioneF, params);
	}
	if (Sim) {
		useEffect(() => {
			console.log("inizio");
			try {
				data();
				setload(false);
			} catch (error) {
				console.log(error);
			}
			console.log("fine");
		}, []);
		return (
			<FightNation
				nazioneH={nazioneH}
				nazioneF={nazioneF}
				pointH={pointH}
				pointF={pointF}
				load={load}
			/>
		);
	}

	return (
		<FightNation
			nazioneH={nazioneH}
			nazioneF={nazioneF}
			pointH={0}
			pointF={0}
		/>
	);
}
