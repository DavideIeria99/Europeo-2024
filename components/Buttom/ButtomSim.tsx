"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
interface buttomProps {
	href: string;
}
export default function ButtomSim({ href }: buttomProps) {
	const prova = useSearchParams().get("sim");
	return (
		<>
			{prova ? (
				<a
					href={`${href}`}
					className="bg-euroSecondary hover:bg-euroPrimary text-white p-4 absolute top-32 left-2 rounded ">
					<button className="uppercase"> avanti</button>
				</a>
			) : (
				<a
					href="?sim=true"
					className="bg-euroSecondary hover:bg-euroPrimary text-white p-4 absolute top-32 left-2 rounded ">
					<button className="uppercase">simula</button>
				</a>
			)}
		</>
	);
}
