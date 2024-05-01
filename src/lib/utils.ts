import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 *
 * @param inputs
 * Helper utility ensuring that classNames are appropriately merged and any conflicts are resolved, making the component styling more consistent and maintainable.
 *
 * @returns string
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
