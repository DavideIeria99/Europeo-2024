"use client";

import { useState } from "react";
import { DirectContext, passNationType, PlayContext } from "./plays";

export default function DirectProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [passNation, setPassNation] = useState<passNationType[]>([]);

	function addPassNation(nazione: string, state: string) {
		const control = passNation.findIndex(
			(single) => single.nazione == nazione && single.state == state,
		);
		if (control === -1) {
			console.log("Adding match:", nazione);
			setPassNation((prev) => [...prev, { nazione, state }]);
			return; // Prevent adding duplicate matches
		} else {
			console.log("Match already exists:", nazione);
		}
	}

	return (
		<DirectContext.Provider
			value={{ passNation, setPassNation, addPassNation }}>
			{children}
		</DirectContext.Provider>
	);
}
