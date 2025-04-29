"use client";

import { create } from "@/lib/CallPrisma";
import Image from "next/image";

export default function Header() {
	return (
		<header className="w-full h-screen  flex bg-repeat bg-euroSecondary/80   ">
			<section className="w-1/2 h-full flex justify-center content-center flex-col ">
				<div className=" flex flex-col justify-center">
					<h1 className="text-white font-bold text-8xl text-balance text-center ">
						Simulazione Euro 2024
					</h1>

					<button
						onClick={() => create()}
						className="active:border-black border-2 border-transparent  text-center  text-white bg-euroTerziary hover:bg-euroSecondary p-2 w-auto mt-2 mx-auto rounded">
						Gioca
					</button>

					{/* <a
						className="bg-euroTerziary hover:bg-euroSecondary p-2 w-auto mt-2 mx-auto rounded"
						href="/groupStage">
						<button
							onClick={() => create()}
							className=" text-center  text-white">
							Gioca
						</button>
					</a> */}
				</div>
			</section>
			<section className=" w-1/2 uppercase p-2  flex justify-center flex-col ">
				<Image
					width={1500}
					height={1500}
					className="cover bg-center bg-no-repeat "
					src={"/media/logo.png"}
					alt={"Euro2024"}
				/>
			</section>
		</header>
	);
}
