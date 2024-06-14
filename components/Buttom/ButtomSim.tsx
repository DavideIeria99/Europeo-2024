"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function ButtomSim() {
	const prova = useSearchParams().get("sim");
	return (
		<>
			{prova ? (
				""
			) : (
				<a
					href="?sim=true"
					className="bg-black text-white p-4 ">
					<button> simula</button>
				</a>
			)}
		</>
	);
}
