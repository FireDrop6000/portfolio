import * as echarts from "echarts";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { darkModeHandler } from "../scripts/DarkModeHandler";

echarts.registerTheme("custom-dark", {
	tooltip: {
		backgroundColor: "rgb(15, 23, 42)",
		textStyle: {
			color: "#fff",
		},
	},
	label: {
		color: "#fff",
	},
	legend: {
		textStyle: {
			color: "#fff",
		},
	},
});

echarts.registerTheme("custom-light", {
	label: {
		color: "#000",
	},
});

type LangData = {
	language: string;
	percentage: string;
};

interface Props {
	languages: LangData[];
}

const generateColors = (count: number) => {
	return Array.from(
		{ length: count },
		(_, i) => `hsl(${(i * 360) / count}, 65%, 55%)`,
	);
};

const PieComp: React.FC<Props> = ({ languages }) => {
	const chartRef = useRef<HTMLDivElement>(null);

	const isDark = darkModeHandler();

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!chartRef.current) return;

		const mediaQuery = chartRef.current;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.3 },
		);
		observer.observe(mediaQuery);

		const rect = mediaQuery.getBoundingClientRect();
		const inView = rect.top < window.innerHeight && rect.bottom > 0;
		if (inView) {
			setIsVisible(true);
			observer.disconnect();
		}
		return () => observer.disconnect();
	}, []);

	const [isSmall, setIsSmall] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => setIsSmall(window.innerWidth < 768);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		console.log("Languages passed to pie", languages);
		if (!isVisible || !chartRef.current) return;

		const chart = echarts.init(
			chartRef.current,
			isDark ? "custom-dark" : "custom-light",
		);

		const colors = generateColors(languages.length);

		chart.setOption({
			color: colors,
			tooltip: {
				trigger: "item",
			},
			legend: isSmall
				? {
						orient: "horizontal",
						bottom: "5%",
						left: "center",
						textStyle: { fontSize: 14, fontStyle: "bold" },
					}
				: undefined,
			series: [
				{
					name: "Languages",
					type: "pie",
					radius: ["40%", "70%"],
					center: ["50%", isSmall ? "40%" : "50%"],
					avoidLabelOverlap: true,
					padAngle: 0.5,
					itemStyle: {
						borderRadius: 5,
					},
					label: {
						show: !isSmall,
						fontSize: 15,
					},
					data: languages.map((item, index) => ({
						name: item.language,
						value: parseFloat(item.percentage),
						emphasis: {
							itemStyle: {
								shadowBlur: 15,
								shadowOffsetX: 0,
								shadowColor: colors[index],
							},
						},
						tooltip: {
							shadowColor: colors[index],
						},
					})),
					emphasis: {
						label: {
							fontSize: 17,
							fontStyle: "bold",
						},
					},
					animationType: "scale",
					animationEasing: "elasticOut",
					animationDelay: () => Math.random() * 200,
				},
			],
		});

		return () => {
			chart.dispose();
		};
	}, [isVisible, isSmall, languages, isDark]);
	return (
		<div
			ref={chartRef}
			className="w-screen h-[70vh] px-5 md:px-0 md:w-[55vw] md:h-[50vw] justify-center md:translate-x-5"
		></div>
	);
};

export default PieComp;
