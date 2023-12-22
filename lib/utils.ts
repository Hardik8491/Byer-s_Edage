import {type ClassValue,clsx} from "clsx";
import {twMerge} from 'tailwind-merge'
export function cn(...inputs:ClassValue[]){
    return twMerge(clsx(inputs))
}  

export const generateRandomStarRating = () => {
    return Math.floor(Math.random() * 5) + 1; // Generates a random number between 1 and 5
  };