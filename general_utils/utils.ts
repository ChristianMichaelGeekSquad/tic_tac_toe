import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const tailwindMerge = (...inputs: Array<ClassValue>): string => twMerge(clsx(...inputs));
