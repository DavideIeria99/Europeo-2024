/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { nazionUpdate, updateData } from "@/lib/CallPrisma";
import { nazionProps } from "@/lib/type";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../ui/loading";

function setScores(
	nazion: string,
	pointH: number,
	pointF: number,
	Giornata: number,
) {
	let nazionState: nazionUpdate = {
		PG: Giornata,
		nazion: nazion,
		punteggio: 0,
		GF: pointH,
		GS: pointF,
		V: 0,
		P: 0,
		S: 0,
	};

	if (pointH > pointF) {
		nazionState.punteggio += 3;
		nazionState.V = 1;
	} else if (pointH < pointF) {
		nazionState.S = 1;
	} else if (pointH == pointF) {
		nazionState.punteggio += 1;
		nazionState.P = 1;
	}
	return nazionState;
}

export default function TabelSquad(el: nazionProps) {
	const Sim = useSearchParams().get("sim");
	let [pointH, setPointH] = useState(0);
	let [pointF, setPointF] = useState(0);
	let [load, setload] = useState(true);
	const puntiH = Math.floor(Math.random() * (4 - 0) + 0);
	const puntiF = Math.floor(Math.random() * (4 - 0) + 0);

	async function data() {
		const NazionH = setScores(el.nazioneH, puntiH, puntiF, el.giornata);
		const NazionF = setScores(el.nazioneF, puntiF, puntiH, el.giornata);
		setPointH(puntiH);
		setPointF(puntiF);
		await (updateData(NazionH), updateData(NazionF));
	}

	if (Sim) {
		useEffect(() => {
			try {
				data();
				setload(false);
			} catch (error) {
				console.log(error);
			}
		}, []);

		return (
			<section className="flex justify-center text-white font-bolder py-2">
				<h4 className="bg-euroSecondary capitalize  w-48 rounded text-right p-2">
					{el.nazioneH}
				</h4>
				{load ? (
					<Loading />
				) : (
					<p className="mx-10 w-24 text-4xl text-black">
						<span>{pointH}</span> - <span>{pointF}</span>
					</p>
				)}
				<h4 className="bg-euroSecondary capitalize  w-48 rounded text-left p-2">
					{el.nazioneF}
				</h4>
			</section>
		);
	}

	//in entrata
	return (
		<div className="flex justify-center text-white font-bolder py-2">
			<h4 className="bg-euroSecondary capitalize  w-48 rounded text-right p-2">
				{el.nazioneH}
			</h4>
			<p className="mx-10 w-24 text-4xl text-black">
				<span>0</span> - <span>0</span>
			</p>

			<h4 className="bg-euroSecondary capitalize  w-48 rounded text-left p-2">
				{el.nazioneF}
			</h4>
		</div>
	);
}
