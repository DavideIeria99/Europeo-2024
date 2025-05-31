"use client";
import React, { useEffect } from "react";
import ButtomSim from "../Buttom/ButtomSim";
import TabelDirect from "./TabelDirect";
import { SortingDirectState } from "@/app/directStage/[slug]/page";
import { useDirectContext } from "@/lib/context/playGirons/plays";
import { updateDataDirect } from "@/lib/CallPrisma";

interface DirectNazionProps {
	nazioniDirect: SortingDirectState[];
	state: string;
}

export default function DirectSquad({
	nazioniDirect,
	state,
}: DirectNazionProps) {
	const [params, setParams] = React.useState<string>(state);
	const { passNation, setPassNation } = useDirectContext();

	useEffect(() => {
		console.log("Updating data with passNation:", nazioniDirect.length);
		console.log("Current passNation:", passNation);
		if (passNation.length === nazioniDirect.length * 2) {
			console.log("siamo qui");

			switch (params) {
				case "OneEight":
					setParams("OneFour");
					break;
				case "OneFour":
					setParams("Semifinal");
					break;
				case "Semifinal":
					setParams("Final");
					break;
				case "Final":
					setParams("Winner");
					break;
			}
			updateDataDirect(passNation.slice(0, passNation.length / 2));
			setPassNation([]); // Reset passNation after updating
		}
	}, [passNation]);
	return (
		// tutti gli altri casi
		<>
			<ButtomSim href={`/directStage/${params}`} />
			{/* section white */}

			<section className="bg-white mx-auto w-4/5  my-3 rounded pb-3  overflow-auto">
				{nazioniDirect &&
					nazioniDirect.map((el, _) => (
						<div
							className="flex justify-center text-white font-bolder py-2"
							key={_}>
							<TabelDirect
								nazioneH={el.nationH}
								nazioneF={el.nationF}
								params={state}
							/>
						</div>
					))}
			</section>
		</>
	);
}
