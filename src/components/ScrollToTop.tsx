import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
	const location = useLocation();
	useEffect(() => {
		if (!location.hash) {
			window.scrollTo(0, 0);
		}
	}, [location]);
	return <></>;
};

export default ScrollToTop;
