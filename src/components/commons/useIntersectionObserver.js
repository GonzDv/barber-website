// useIntersectionObserver.js
import { useEffect, useRef } from 'react';

export default function useIntersectionObserver(callback, options) {
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback(entry);
                }
            });
        }, options);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [callback, options]);

    return targetRef;
}