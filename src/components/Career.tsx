import { AnimatePresence, motion } from "framer-motion";

const Career = () => {
	const careerDescription = [
		{
			year: "2020",
			achievement:
				"Graduated high school from South End School with First Division in PCM + Computer Science",
		},
		{
			year: "2024",
			achievement:
				"Graduated Computer Science and Engineering from Government College of Engineering and Leather Technology with 9.2 GPA",
		},
		{
			year: "2025",
			achievement: "Started as Data Analyst at DigitalSherpa.ai",
		},
	];
	return (
		<div className="flex">
			<div className="flex flex-col md:flex-row gap-4 items-center justify-center">
				{careerDescription.map((year, index) => {
					if (index === careerDescription.length - 1) {
						return (
							<div
								key={index}
								className="relative flex md:flex-col items-center group"
							>
								<div className="p-2 bg-none text-white rounded-sm border-4 border-zinc-400 hover:border-violet-400 group transition ease-in duration-200 -translate-x-20 md:translate-none">
									{" "}
									<div className="p-2 bg-none text-white rounded-sm border-4 border-zinc-400 group-hover:border-violet-400 transition ease-in duration-200"></div>
								</div>
								<div className="flex flex-col absolute  md:mt-13 w-48 p-3 border  rounded-lg  text-sm text-gray-700 opacity-100 md:opacity-0 scale-95 pointer-events-none  ease-out group-hover:opacity-100 group-hover:scale-100 -translate-x-5 md:translate-none dark:text-white bg-white/2.5 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]  transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none border-r border-white/50 overflow-hidden">
									<span className="text-md font-bold underline underline-offset-3">
										{year.year}
									</span>
									{year.achievement}
								</div>
							</div>
						);
					} else {
						return (
							<>
								<div
									key={index}
									className="relative flex md:flex-col items-center  group"
								>
									<div className="p-2 bg-none text-white rounded-sm border-4 border-zinc-400 hover:border-violet-400 group transition ease-in duration-200 -translate-x-20 md:translate-none">
										{" "}
										<div className="p-2 bg-none text-white rounded-sm border-4 border-zinc-400 group-hover:border-violet-400 transition ease-in duration-200"></div>
									</div>
									<div className="flex flex-col absolute  md:mt-13 w-48 p-3 border  rounded-lg  text-sm text-gray-700 opacity-100 md:opacity-0 scale-95 pointer-events-none  ease-out group-hover:opacity-100 group-hover:scale-100 -translate-x-5 md:translate-none dark:text-white bg-white/2.5 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]  transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none border-r border-white/50 overflow-hidden">
										<span className="text-md font-bold underline underline-offset-3">
											{year.year}
										</span>
										{year.achievement}
									</div>
								</div>
								<div className="px-1 md:px-3 h-2 bg-zinc-500 text-white rounded-lg -translate-x-20 md:translate-none"></div>
								<div className="px-1 md:px-3 h-2 bg-zinc-500 text-white rounded-lg -translate-x-20 md:translate-none"></div>
								<div className="px-1 md:px-3 h-2 bg-zinc-500 text-white rounded-lg -translate-x-20 md:translate-none"></div>
								<div className="px-1 md:px-3 h-2 bg-zinc-500 text-white rounded-lg -translate-x-20 md:translate-none"></div>
								<div className="px-1 md:px-3 h-2 bg-zinc-500 text-white rounded-lg -translate-x-20 md:translate-none"></div>
							</>
						);
					}
				})}
			</div>
		</div>
	);
};

export default Career;
