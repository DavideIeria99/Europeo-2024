import { Groups } from "@prisma/client";
import { type ClassValue, clsx } from "clsx"

import { twMerge } from "tailwind-merge"
import { GroupProps, nazionData } from "./type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function order(a: nazionData, b: nazionData) {
  if (b.pts !== a.pts) return b.pts - a.pts; // 1. Punti
  if (b.DR !== a.DR) return b.DR - a.DR; // 2. Differenza reti
  if (b.victory !== a.victory) return b.victory - a.victory; // 3. Vittorie
  if (b.GS !== a.GS) return b.GS - a.GS; // 4. Gol fatti
  return a.nations.localeCompare(b.nations); // 5. Alfabetico
}

export function sortingGroup(arr: Groups[]) {
  let gironi: GroupProps[] = [
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
    gironi.filter((group) =>
      group.nation == el.Groups
        ? group.girone.push({
          nations: el.nationName,
          victory: el.victory,
          PG: el.PG,
          tie: el.tie,
          loser: el.loser,
          GS: el.GS,
          DR: el.DR,
          GC: el.GC,
          pts: el.pts,
        })
        : "",
    );
  });
  return gironi;
}

export function orderDirect(nations: Groups[]) {
  // prendiamo i gironi
  const groupsSorted = sortingGroup(nations);
  //creiamo gli array divisi tra i migliori 1° 2° e le migliori 3°
  let qualificy = [];
  let playOff = [];

  //li mistiamo negli array precedentemente creati
  for (let i = 0; i < groupsSorted.length; i++) {
    const element = groupsSorted[i];
    const orderTeam = element.girone.sort((a, b) => order(a, b));
    qualificy.push(orderTeam[0], orderTeam[1]);
    playOff.push(orderTeam[2]);
  }
  // ci prendiamo le prime 4
  const majorThree = playOff.sort((a, b) => order(a, b)).slice(0, 4);
  //salviamo il tutto in un nuovo array
  const directStage = [...qualificy, ...majorThree];
  return directStage;
}