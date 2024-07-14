"use client";
import { reset } from "@/lib/CallPrisma";

import { useSearchParams } from "next/navigation";
import React from "react";
interface buttomProps {
	href?: string;
	home?: boolean;
}

export default function ButtomSim({ href, home }: buttomProps) {
	const prova = useSearchParams().get("sim");

	if (home) {
		return (
			<button
				onClick={() => reset()}
				className="bg-euroSecondary hover:bg-euroPrimary text-white p-4 absolute top-32 left-2 rounded uppercase">
				Home
			</button>
		);
	}

	return (
		<>
			{prova && href ? (
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
