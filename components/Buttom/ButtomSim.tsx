"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function ButtomSim() {
	const prova = useSearchParams().get("sim");
	return (
		<>
			{prova ? (
				<a
					href="/groupStage"
					className="bg-euroSecondary hover:bg-euroPrimary text-white p-4 absolute top-32 left-2 rounded ">
					<button className="uppercase"> gironi</button>
				</a>
			) : (
				<a
					href="?sim=true"
					className="bg-euroSecondary hover:bg-euroPrimary text-white p-4 absolute top-32 left-2 rounded ">
					<button className="uppercase"> simula</button>
				</a>
			)}
		</>
	);
}
