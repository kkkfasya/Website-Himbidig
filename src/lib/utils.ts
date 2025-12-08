import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomClassId() {
  return Math.random().toString(36).slice(2, -1);
}

export function extractSourcePathRegex(pathString: string): string {
  const regex = /src\/(.+?)(\?|$)/;
  const match = pathString.match(regex);
  return match ? match[1] : "";
}
