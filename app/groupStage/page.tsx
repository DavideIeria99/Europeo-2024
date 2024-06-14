import TableComponent from "@/components/table/TableComponent";

export default function page() {
	const EU = [
		{
			girone: [
				{
					nations: "italy",
					point: 3,
				},
				{
					nations: "france",
					point: 7,
				},
				{
					nations: "germany",
					point: 8,
				},
				{
					nations: "Spain",
					point: 9,
				},
			],
			Nation: "A",
		},
		{
			girone: [
				{
					nations: "italy",
					point: 3,
				},
				{
					nations: "france",
					point: 7,
				},
				{
					nations: "germany",
					point: 8,
				},
				{
					nations: "Spain",
					point: 9,
				},
			],
			Nation: "B",
		},
	];
	return (
		<>
			<main className="ì bg-euroSecondary/80 min-h-screen pb-4  w-full relative ">
				<h1 className="font-bold text-8xl bg-euroTerziary text-white text-center">
					Fase a gironi
				</h1>
				<section className="mt-5 relative z-20 bg-white flex flex-wrap  justify-evenly gap-3 w-4/5 mx-auto p-4 rounded ">
					{EU.map((el, _) => (
						<TableComponent
							key={_}
							Girone={el.girone}
							nation={el.Nation}
						/>
					))}
				</section>
				<section className="mx-auto p-2 w-4/5 bg-white flex justify-around">
					<a href="/partite">
						<button className="bg-blue-500 rounded p-1 ">partite</button>
					</a>
					<a href="">
						<button className="bg-blue-500 rounded p-1 ">risultati</button>
					</a>
				</section>
			</main>
		</>
	);
}
