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
			<main className="min-h-screen  w-full bg-euroPrimary  relative bg-repeat bg-[url(/media/campo.png)]">
				<div className="bg-euroSecondary/80 min-h-screen pb-4">
					<h1 className="font-bold text-8xl bg-euroTerziary text-white text-center">
						Fase a gironi
					</h1>
					<section className="my-5 relative z-20 bg-white flex flex-wrap  justify-evenly gap-3 w-4/5 mx-auto p-4 rounded ">
						{EU.map((el, _) => (
							<TableComponent
								key={_}
								Girone={el.girone}
								nation={el.Nation}
							/>
						))}
					</section>
				</div>
			</main>
		</>
	);
}
