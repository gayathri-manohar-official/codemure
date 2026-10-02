import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {

    const { pathname, hash } = useLocation();

    useEffect(() => {

        // If navigating to a hash on the home page,
        // let the navbar/homepage handle scrolling.
        if (hash) return;

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant" as ScrollBehavior,
        });

    }, [pathname, hash]);

    return null;
}