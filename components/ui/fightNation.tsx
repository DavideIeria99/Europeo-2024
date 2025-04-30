import React from "react";
import Loading from "./loading";

interface nationFightProps {
	nazioneH: string;
	nazioneF: string;
	pointH: number;
	pointF: number;
	load?: boolean;
}
export default function FightNation(props: nationFightProps) {
	return (
		<section className="flex justify-center text-white font-bolder py-2">
			<h4 className="bg-euroSecondary capitalize  w-48 rounded text-right p-2">
				{props.nazioneH}
			</h4>
			{props.load ? (
				<Loading />
			) : (
				<p className="mx-10 w-24 text-4xl text-black">
					<span>{props.pointH}</span> - <span>{props.pointF}</span>
				</p>
			)}
			<h4 className="bg-euroSecondary capitalize  w-48 rounded text-left p-2">
				{props.nazioneF}
			</h4>
		</section>
	);
}
