import { useLayoutEffect, useState } from 'react';
import {useDebounce} from "@/lib/hooks";

const useIsMobile = (): boolean => {
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const updateSize = (): void => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', useDebounce(updateSize, 250));
        // updateSize();
        return (): void => window.removeEventListener('resize', updateSize);
    }, []);

    return isMobile;
};

export default useIsMobile;
