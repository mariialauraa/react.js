import { useEffect, useRef } from "react";

export default function useInterval(callback: () => void, delay: number) {

    const savedCallback = useRef<() => void>()

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        function tick() {
           savedCallback.current!() // ! confirma que vai ter esse valor
        }

        if (delay !== null) {
            const id = setInterval(tick, delay);

            return () => clearInterval(id);
        }
    }, [delay]);
}