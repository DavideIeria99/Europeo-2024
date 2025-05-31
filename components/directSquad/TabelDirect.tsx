/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { DirectNazionProps } from "@/lib/type";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FightNation from "../ui/fightNation";
import { useDirectContext } from "@/lib/context/playGirons/plays";

export default function TabelDirect({
	nazioneH,
	nazioneF,
	params,
}: DirectNazionProps) {
	const Sim = useSearchParams().get("sim");
	let [pointH] = useState(Math.floor(Math.random() * (4 - 0) + 0));
	let [pointF] = useState(Math.floor(Math.random() * (4 - 0) + 0));
	let [load, setload] = useState(true);
	const { addPassNation } = useDirectContext();

	async function data() {
		if (pointH > pointF) {
			addPassNation(nazioneH, params);
		} else if (pointH < pointF) {
			addPassNation(nazioneF, params);
		} else {
			addPassNation(nazioneH, params);
		}
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
