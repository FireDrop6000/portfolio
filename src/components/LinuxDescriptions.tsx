import { AnimatePresence, motion } from "framer-motion";
import { textChanger } from "./CellHoverContext";

const LinuxDescriptions = () => {
	const { hoveredCell } = textChanger();

	const getText = () => {
		switch (hoveredCell) {
			case 1:
				return {
					heading: "Mac-Linux",
					description:
						"Pulled from the clean look of MacOS, this setup blends sleek theming, smooth widgets, and a fluid bar system - all stitched together with open-source tools and a bit of my own scripting magic.",
					glink: "https://github.com/FireDrop6000/hyprland-mydots",
				};
			case 2:
				return {
					heading: "Clean-Linux",
					description:
						"This one started as a mix between a Reddit post and a YouTube video, and it turned into one of the cleanest UIs I’ve ever pulled off.",
					glink: "https://github.com/FireDrop6000/eww_so_clean",
				};
			case 3:
				return {
					heading: "Ewwindows-Linux",
					description:
						"Have you ever wondered how Windows 12 might look like? Inspired from a Youtube video, this is the peak of my Yuck theming — leveled up with tighter mutex scripting, smarter listeners, and controls tuned exactly to my workflow.",
					glink: "https://github.com/FireDrop6000/ewwindows",
				};
			default:
				return {
					heading: "Linux Desktop Works",
					description:
						"These are some of my collection of works on Linux customisation. Feel free to have a look.",
				};
		}
	};

	return (
		<div className="w-[35vw] flex  wrap-normal h-90 items-center justify-center p-6  rounded-xl  glass-effect overflow-hidden">
			<AnimatePresence mode="wait">
				<motion.div
					key={hoveredCell}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{
						opacity: 0,
						y: -10,
					}}
					transition={{ duration: 0.4 }}
				>
					<h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
						{getText().heading}
					</h5>
					<p className="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">
						{getText().description}
					</p>
					{hoveredCell ? (
						<a
							href={getText().glink}
							className="inline-flex font-medium items-center text-blue-600 hover:underline"
						>
							Github
							<svg
								className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 18 18"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
								/>
							</svg>
						</a>
					) : null}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default LinuxDescriptions;
