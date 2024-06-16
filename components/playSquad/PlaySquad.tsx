"use client";

import { playProps } from "@/lib/type";
import { useSearchParams } from "next/navigation";

export const setScores = async (point: number) => {
	"use Server";
	return (point += Math.floor(Math.random() * (4 - 0) + 0));
};

export default function PlaySquad(props: playProps) {
	const prova = useSearchParams().get("sim");

	return (
		<section>
			<h3 className="text-center bg-euroPrimary text-white font-bold text-2xl p-4  sticky top-0 z-20">
				Giornata {props.giornata}
			</h3>
			{props.Gironi.map((el, _) => (
				<section key={_}>
					<h5 className="sticky top-16 bg-euroSecondary text-white font-extrabold py-2 z-10 m-0">
						{" "}
						Girone {el.tipo}
					</h5>
					{el.partite.map((el, _) => (
						<div
							className="flex justify-center text-white font-bolder py-2"
							key={_}>
							<h4 className="bg-euroSecondary capitalize  w-48 rounded text-right p-2">
								{el.nazioneH}
							</h4>
							{prova ? (
								<p className="mx-10 w-24 text-4xl text-black">
									{setScores(el.puntiH)} - {setScores(el.puntiF)}
								</p>
							) : (
								<p className="mx-10 w-24 text-4xl text-black">
									{el.puntiH} - {el.puntiF}
								</p>
							)}
							<h4 className="bg-euroSecondary capitalize  w-48 rounded text-left p-2">
								{el.nazioneF}
							</h4>
						</div>
					))}
				</section>
			))}
		</section>
	);
}
