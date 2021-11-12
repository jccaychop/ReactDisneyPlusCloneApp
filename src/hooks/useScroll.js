import { useRef, useState } from "react";
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

export const useScroll = () => {

    const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 });
    const elementRef = useRef()

    // Element scroll position
    useScrollPosition(
        ({ currPos }) => {
            setElementPosition(currPos)
        }, [], elementRef
    )

    return [elementPosition];
};
