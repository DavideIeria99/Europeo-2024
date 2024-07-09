import { GroupProps } from "@/lib/type";
import {
	Table,
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "../ui/table";

export default function TableComponent({ girone, nation }: GroupProps) {
	const nazions = girone.sort((a, b) => {
		if (b.DR == a.DR) {
			return b.victory - a.victory;
		}
		if (b.point == a.point) {
			return b.DR - a.DR;
		}

		return b.point - a.point;
	});

	return (
		<>
			<Table>
				<TableCaption>Girone {nation} Europeo 2024</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>PS</TableHead>
						<TableHead>Squadra</TableHead>
						<TableHead>PG</TableHead>
						<TableHead>V</TableHead>
						<TableHead>P</TableHead>
						<TableHead>S</TableHead>
						<TableHead className="text-right">GF</TableHead>
						<TableHead className="text-right">GS</TableHead>
						<TableHead className="text-right">DR</TableHead>
						<TableHead className="text-right">Pt</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{nazions.map((el, _) => (
						<TableRow
							key={_}
							className={
								_ < 2
									? "bg-euroSecondary hover:bg-euroPrimary hover:text-white"
									: ""
							}>
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
							<TableCell>{el.PG}</TableCell>
							<TableCell className="text-right">{el.victory}</TableCell>
							<TableCell className="text-right">{el.tie}</TableCell>
							<TableCell className="text-right">{el.loser}</TableCell>
							<TableCell className="text-right">{el.GS}</TableCell>
							<TableCell className="text-right">{el.GC}</TableCell>
							<TableCell className="text-right">{el.DR}</TableCell>
							<TableCell className="text-right">{el.point}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}
