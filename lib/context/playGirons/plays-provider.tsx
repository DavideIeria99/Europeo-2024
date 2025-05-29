"use client";

import { nazionData } from "@/lib/type";
import { useState } from "react";
import { PlayContext } from "./plays";

export default function PlayProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [machts, setMachts] = useState<nazionData[]>([]);

	function addMach(nazions: nazionData) {
		const control = machts.find((single) => single.nations == nazions.nations);
		if (control === undefined) {
			console.log("Adding match:", nazions);
			setMachts((prev) => [...prev, nazions]);
			return; // Prevent adding duplicate matches
		} else {
			console.log("Match already exists:", nazions);
		}
	}

	return (
		<PlayContext.Provider value={{ addMach, machts }}>
			{children}
		</PlayContext.Provider>
	);
}
