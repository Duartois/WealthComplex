import React from "react";

/**
* Listens for window resize events and checks if the window's width and height
 * meet or exceed specified target values. Comparisons are inclusive (`>=`).
 *
 * @param {Object} params
 * @param {number} params.targetX - The minimum width to compare against.
 * @param {number} params.targetY - The minimum height to compare against.
 * @returns {Object} An object containing boolean values indicating whether the
 * window's width and height are at least the specified targets.
 */

export const useResize = ({ targetX = 768, targetY = 768 }) => {
    const [resized, setResized] = React.useState({
        resizedX: false,
        resizedY: false,
    });

    React.useEffect(() => {
        const handleResize = () => {
            setResized(() => ({
                resizedX: window.innerWidth >= targetX, // equality counts as resized
                resizedY: window.innerHeight >= targetY,
            }));
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [targetX, targetY]);
    return resized;
};