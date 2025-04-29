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
import { order } from "@/lib/utils";
import Image from "next/image";

export default function TableComponent({ girone, nation }: GroupProps) {
	const nazions = girone.sort((a, b) => order(a, b));

	return (
		<>
			<Table className="md:w-full w-[550px]">
				<TableCaption>Girone {nation} Europeo 2024</TableCaption>
				<TableHeader>
					<TableRow className="bg-slate-200 ">
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
								el.PG == 3 && _ < 2
									? "bg-euroSecondary hover:bg-euroPrimary text-white"
									: ""
							}>
							<TableCell className="font-medium">{_ + 1}</TableCell>
							<TableCell className="capitalize sm:w-50 flex gap-x-1 items-center  ">
								<Image
									width={10}
									height={10}
									src={`/nation/${el.nations}.png`}
									className="object-cover size-5 rounded-full"
									alt={el.nations}
								/>
								{el.nations}
							</TableCell>
							<TableCell>{el.PG}</TableCell>
							<TableCell className="text-right">{el.victory}</TableCell>
							<TableCell className="text-right">{el.tie}</TableCell>
							<TableCell className="text-right">{el.loser}</TableCell>
							<TableCell className="text-right">{el.GS}</TableCell>
							<TableCell className="text-right">{el.GC}</TableCell>
							<TableCell className="text-right">{el.DR}</TableCell>
							<TableCell className="text-right">{el.pts}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}
