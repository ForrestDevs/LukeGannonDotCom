import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigationRoutes: string[] = [
    "home",
    "about",
    "projects",
    "blog",
    // "contact",
    // "resume",
  ];