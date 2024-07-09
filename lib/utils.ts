import { Groups } from "@prisma/client";
import { type ClassValue, clsx } from "clsx"

import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function order(a: Groups, b: Groups) {
  if (b.DR == a.DR) {
    return b.victory - a.victory;
  }
  if (b.pts == a.pts) {
    return b.DR - a.DR;
  }
  return b.pts - a.pts;
}