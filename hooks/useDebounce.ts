import { useEffect, useState } from "react";
/**
 * A custom React hook that debounces the input value.
 *
 * @param value - The input value to debounce.
 * @param delay - The delay in milliseconds to wait before updating the debounced value. Default is 500ms.
 *
 * @returns The debounced value.
 *
 * @remarks
 * This hook uses the `useState` and `useEffect` hooks from React.
 * It sets up a debounced value that updates only after the specified delay.
 * The debounced value is returned by the hook.
 */
export function useDebounce(value: string, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}