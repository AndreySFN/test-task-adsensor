import { useEffect, useState } from 'react';

const THRESHOLD_WIDTH = 662
export const useMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= THRESHOLD_WIDTH);
    const checkIsMobile = () => {
        setIsMobile(window.innerWidth <= THRESHOLD_WIDTH);
    };

    useEffect(() => {
        window.addEventListener('resize', checkIsMobile);
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return isMobile;
};
