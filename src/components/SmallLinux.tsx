import { AnimatePresence, motion } from "framer-motion";
import Linux2 from "../images/clean.png";
import Linux3 from "../images/ewwindows.png";
import Linux1 from "../images/mac.png";

const SmallLinux = () => {
	const ssDetails = [
		{
			fileName: Linux1,
			heading: "Mac-Linux",
			description:
				"Pulled from the clean look of MacOS, this setup blends sleek theming, smooth widgets, and a fluid bar system - all stitched together with open-source tools and a bit of my own scripting magic.",
			glink: "https://github.com/FireDrop6000/hyprland-mydots",
		},
		{
			fileName: Linux2,
			heading: "Clean-Linux",
			description:
				"This one started as a mix between a Reddit post and a YouTube video, and it turned into one of the cleanest UIs I’ve ever pulled off.",
			glink: "https://github.com/FireDrop6000/eww_so_clean",
		},
		{
			fileName: Linux3,
			heading: "Ewwindows-Linux",
			description:
				"Have you ever wondered how Windows 12 might look like? Inspired from a Youtube video, this is the peak of my Yuck theming — leveled up with tighter mutex scripting, smarter listeners, and controls tuned exactly to my workflow.",
			glink: "https://github.com/FireDrop6000/ewwindows",
		},
	];
	return (
		<div className="flex flex-col md:hidden mt-30 p-1 items-center justify-center">
			<h5 className="text-3xl font-bold underline underline-offset-14 mb-10 whitespace-nowrap">
				Linux Desktop Works
			</h5>
			<div className="flex flex-col gap-5">
				{ssDetails.map((ssDetail) => {
					return (
						<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
							<AnimatePresence mode="wait">
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.6 }}
									transition={{ duration: 0.6, ease: "easeOut" }}
								>
									<img
										src={ssDetail.fileName}
										alt="Screenshot"
										className="rounded-t-lg"
									/>
								</motion.div>
							</AnimatePresence>
							<AnimatePresence mode="wait">
								<motion.div
									initial={{ opacity: 0, x: 30 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, amount: 0.6 }}
									transition={{ duration: 0.6, ease: "easeOut" }}
								>
									<div className="flex flex-col text-black dark:text-white wrap-normal text-justify p-2 gap-1">
										<h5 className="text-md font-bold underline underline-offset-5">
											{ssDetail.heading}
										</h5>
										<p className="text-sm">{ssDetail.description}</p>
										<a
											href={ssDetail.glink}
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
									</div>
								</motion.div>
							</AnimatePresence>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SmallLinux;
