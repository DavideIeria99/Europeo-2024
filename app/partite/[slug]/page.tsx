import PlaySquad from "@/components/playSquad/PlaySquad";
import { GroupData } from "@/lib/CallPrisma";
import { paramsprops, playProps } from "@/lib/type";
import { Gare } from "@/PlayDays";
import { Groups } from "@prisma/client";
import { redirect } from "next/navigation";

export default async function page({ params }: paramsprops) {
	const nation: Groups[] = await GroupData();
	const day = parseInt(params.slug);

	if (day >= 4) {
		redirect("/groupStage");
	}

	if (nation[1].PG > day) {
		redirect("/groupStage");
	}

	const DayPlay = Gare.filter((el: playProps) => el.giornata == day);
	return (
		<main className="bg-euroPrimary/85 min-h-screen pb-2 relative">
			<h2 className="h-auto p-3 text-center w-full bg-euroTerziary text-white text-8xl">
				Giornata {day}
			</h2>
			{/* section white */}

			<section className="bg-white mx-auto w-4/5 h-screen my-3 rounded pb-3  overflow-auto">
				{DayPlay.map((el, _) => (
					// partite
					<PlaySquad
						key={_}
						giornata={day}
						Gironi={el.Gironi}
					/>
				))}
			</section>
		</main>
	);
}
