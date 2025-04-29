import TableComponent from "@/components/table/TableComponent";
import { GroupData } from "@/lib/CallPrisma";
import { sortingGroup } from "@/lib/utils";
import { Groups } from "@prisma/client";

export default async function page() {
	const nation: Groups[] = await GroupData();
	const groups = sortingGroup(nation);
	const day = 0 | nation[1].PG;

	return (
		<>
			<main className="bg-euroSecondary/80 min-h-screen pb-4  w-full relative ">
				<h1 className="font-bold text-8xl bg-euroTerziary text-white text-center">
					Fase a gironi
				</h1>
				<section className="mt-5 relative overflow-x-scroll z-20 bg-white grid grid-cols-1 lg:grid-cols-2  md:gap-4 w-[90%] md:p-2 mx-auto  rounded-t ">
					{groups.map((el, _) => (
						<TableComponent
							key={_}
							girone={el.girone}
							nation={el.nation}
						/>
					))}
				</section>
				<section className="mx-auto p-2 w-[90%] bg-white rounded-b flex justify-center">
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
