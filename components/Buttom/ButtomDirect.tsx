"use client";
import { DataDirect, DeleteDirectData } from "@/lib/CallPrisma";
import { nazionData } from "@/lib/type";
import React from "react";

export default function ButtomDirect({ nations }: { nations: nazionData[] }) {
	return (
		<>
			<div className="text-center">
				<button
					onClick={() => DataDirect(nations)}
					className="text-center w-1/3 p-2 my-5  rounded bg-euroPrimary hover:bg-euroSecondary font-bold uppercase text-white">
					diretta
				</button>
			</div>
			{/* <button
				onClick={() => DeleteDirectData()}
				className="text-center bg-euroPrimary hover:bg-euroSecondary hover:text-white">
				reset
			</button> */}
		</>
	);
}
