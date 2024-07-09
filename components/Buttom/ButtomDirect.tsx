"use client";
import { DataDirect } from "@/lib/CallPrisma";
import { Groups } from "@prisma/client";
import React from "react";

interface buttonProps {
	arr: Groups[];
}

export default function ButtomDirect({ arr }: buttonProps) {
	return (
		<button
			onClick={() => DataDirect(arr)}
			className="text-center bg-euroPrimary hover:bg-euroSecondary hover:text-white">
			diretta
		</button>
	);
}
