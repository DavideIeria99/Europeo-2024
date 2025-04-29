"use client";
import { DataDirect, DeleteDirectData } from "@/lib/CallPrisma";
import { nazionData } from "@/lib/type";
import React from "react";

export default function ButtomDirect({ nations }: { nations: nazionData[] }) {
	return (
		<>
			<button
				onClick={() => DataDirect(nations)}
				className="text-center bg-euroPrimary hover:bg-euroSecondary hover:text-white">
				diretta
			</button>
			{/* <button
				onClick={() => DeleteDirectData()}
				className="text-center bg-euroPrimary hover:bg-euroSecondary hover:text-white">
				reset
			</button> */}
		</>
	);
}
