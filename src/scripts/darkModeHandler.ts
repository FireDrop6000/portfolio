import { useEffect, useState } from "react";

export function darkModeHandler() {
	const [isDark, setIsDark] = useState(
		() => window.matchMedia("(prefers-color-scheme:dark)").matches,
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme:dark)");

		const handler = (event: MediaQueryListEvent) => setIsDark(event.matches);

		mediaQuery.addEventListener("change", handler);

		return () => mediaQuery.removeEventListener("change", handler);
	});

	return isDark;
}
