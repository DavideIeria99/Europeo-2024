"use client";
import { reset } from "@/lib/CallPrisma";

import { useSearchParams } from "next/navigation";
import React from "react";
interface buttomProps {
	href?: string;
	home?: boolean;
}

export default function ButtomSim({ href, home }: buttomProps) {
	const sim = useSearchParams().get("sim");
	const classButton =
		"bg-euroSecondary hover:bg-euroPrimary text-white p-4 absolute top-32 left-2 rounded uppercase";

	if (home) {
		return (
			<button
				type="button"
				onClick={() => reset()}
				className={classButton}>
				Home
			</button>
		);
	}

	return (
		<>
			{sim ? (
				<a
					href={href}
					className={classButton}>
					avanti
				</a>
			) : (
				<a
					href="?sim=true"
					className={classButton}>
					simula
				</a>
			)}
		</>
	);
}
