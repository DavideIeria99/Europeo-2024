import Image from "next/image";
import React from "react";

export default function loading() {
	return (
		<>
			<div className="w-full h-screen bg-euroPrimary/50 relative text-white z-50 flex justify-center items-center flex-col ">
				<div className="absolute animate-spin rounded-full h-64 w-64 border-t-8 border-b-8 border-purple-500"></div>
				<Image
					className=" rounded h-64 w-64  p-10 "
					width={100}
					height={100}
					src={"/media/euro2024.png"}
					alt="coppa"
				/>
				{/* <h1 className="p-10 uppercase font-bold text-2xl ">loading...</h1> */}
			</div>
		</>
	);
}
