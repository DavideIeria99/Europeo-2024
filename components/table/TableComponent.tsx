import Image from "next/image";
import {
	Table,
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "../ui/table";

interface nationalProprs {
	Girone: { nations: string; point: number }[];
	nation: string;
}

export default function TableComponent({ Girone, nation }: nationalProprs) {
	const prova = Girone.sort((a, b) => b.point - a.point);
	console.log(prova);

	return (
		<>
			<Table>
				<TableCaption>Girone {nation} Europeo 2024</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="">PS</TableHead>
						<TableHead>Squadra</TableHead>
						<TableHead>PG</TableHead>
						<TableHead>V</TableHead>
						<TableHead>P</TableHead>
						<TableHead>S</TableHead>
						<TableHead className="text-right">GF</TableHead>
						<TableHead className="text-right">GS</TableHead>
						<TableHead className="text-right">Pt</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{prova.map((el, _) => (
						<TableRow key={_}>
							<TableCell className="font-medium">{_ + 1}</TableCell>
							<TableCell className="capitalize">
								{/* <Image
									width={150}
									height={150}
									src={"/media/Italia.png"}
									alt={"Italia"}
								/> */}
								{el.nations}
							</TableCell>
							<TableCell>3</TableCell>
							<TableCell className="text-right">2</TableCell>
							<TableCell className="text-right">1</TableCell>
							<TableCell className="text-right">0</TableCell>
							<TableCell className="text-right">20</TableCell>
							<TableCell className="text-right">10</TableCell>
							<TableCell className="text-right">{el.point}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}
