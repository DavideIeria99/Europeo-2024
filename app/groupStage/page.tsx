import TableComponent from "@/components/table/TableComponent";
import { GroupData } from "@/lib/CallPrisma";
import { GroupProps } from "@/lib/type";
import { Groups } from "@prisma/client";

function sortingGroup(arr: Groups[]) {
	let groupDefinitve: GroupProps[] = [
		{
			girone: [],
			nation: "A",
		},
		{
			girone: [],
			nation: "B",
		},
		{
			girone: [],
			nation: "C",
		},
		{
			girone: [],
			nation: "D",
		},
		{
			girone: [],
			nation: "E",
		},
		{
			girone: [],
			nation: "F",
		},
	];
	arr.forEach((el) => {
		groupDefinitve.filter((prova) =>
			prova.nation == el.Groups
				? prova.girone.push({
						nations: el.nationId,
						PG: el.PG,
						victory: el.victory,
						tie: el.tie,
						loser: el.loser,
						GS: el.GS,
						DR: el.DR,
						GC: el.GC,
						point: el.pts,
				  })
				: "",
		);
	});
	return groupDefinitve;
}
export default async function page() {
	const nation: Groups[] = await GroupData();
	const prova = sortingGroup(nation);

	const day = 0 | nation[1].PG;

	return (
		<>
			<main className="bg-euroSecondary/80 min-h-screen pb-4  w-full relative ">
				<h1 className="font-bold text-8xl bg-euroTerziary text-white text-center">
					Fase a gironi
				</h1>
				<section className="mt-5 relative z-20 bg-white flex flex-wrap  justify-evenly gap-3 w-4/5 mx-auto p-4 rounded-t ">
					{prova.map((el, _) => (
						<TableComponent
							key={_}
							girone={el.girone}
							nation={el.nation}
						/>
					))}
				</section>
				<section className="mx-auto p-2 w-4/5 bg-white rounded-b flex justify-center">
					{day < 3 ? (
						<a href={`/partite/${day + 1}`}>
							<button className="bg-euroPrimary hover:bg-euroSecondary hover:text-white  rounded p-1 ">
								partite
							</button>
						</a>
					) : (
						<a href="/directStage">
							<button className="bg-euroPrimary hover:bg-euroSecondary hover:text-white  rounded p-1 ">
								risultati
							</button>
						</a>
					)}
				</section>
			</main>
		</>
	);
}
