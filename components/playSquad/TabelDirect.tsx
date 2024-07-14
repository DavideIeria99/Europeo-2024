/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { updateDataDirect } from "@/lib/CallPrisma";
import { DirectNazionProps } from "@/lib/type";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export async function setScoresDirect(
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

	console.log("risultato");
	return `<spam>${pointH}}</spam> -<spam> ${pointF} </spam>`;
}

export default function TabelSquad({
	nazioneH,
	nazioneF,
	params,
}: DirectNazionProps) {
	const prova = useSearchParams().get("sim");
	let [pointH, setPointH] = useState(0);
	let [pointF, setPointF] = useState(0);

	async function data() {
		await setScoresDirect(nazioneH, pointH, pointF, nazioneF, params);
	}
	if (prova) {
		useEffect(() => {
			console.log("inizio");
			try {
				let puntiH = Math.floor(Math.random() * (4 - 0) + 0);
				let puntiF = Math.floor(Math.random() * (4 - 0) + 0);
				setPointH(puntiH);
				setPointF(puntiF);
				data();
			} catch (error) {
				console.log(error);
			}
			console.log("fine");
		}, []);
	}
	return (
		<div className="flex justify-center text-white font-bolder py-2">
			<h4 className="bg-euroSecondary capitalize  w-48 rounded text-right p-2">
				{nazioneH}
			</h4>
			<p className="mx-10 w-24 text-4xl text-black">
				<span>{pointH}</span> - <span>{pointF}</span>
			</p>

			<h4 className="bg-euroSecondary capitalize  w-48 rounded text-left p-2">
				{nazioneF}
			</h4>
		</div>
	);
}
