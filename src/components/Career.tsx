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
							<div className="relative inline-block group">
								<div className="p-2 bg-white text-white rounded-sm border-4 border-zinc-300 hover:border-blue-700 group transition ease-in duration-200">
									{" "}
									<div className="p-2 bg-white text-white rounded-sm border-4 border-zinc-300 group-hover:border-blue-700 transition ease-in duration-200"></div>
								</div>
								<div className="flex flex-col absolute left-1/2 -translate-x-1/2 mt-2 w-48 p-3 bg-white border border-gray-200 rounded-lg shadow-lg text-sm text-gray-700 opacity-100 md:opacity-0 scale-95 pointer-events-none transition duration-200 ease-out group-hover:opacity-100 group-hover:scale-100">
									<span className="text-md font-bold underline">
										{year.year}
									</span>
									{year.achievement}
								</div>
							</div>
						);
					} else {
						return (
							<>
								<div className="relative inline-block group">
									<div className="p-2 bg-white text-white rounded-sm border-4 border-zinc-300 hover:border-blue-700 group transition ease-in duration-200">
										{" "}
										<div className="p-2 bg-white text-white rounded-sm border-4 border-zinc-300 group-hover:border-blue-700 transition ease-in duration-200"></div>
									</div>
									<div className="flex flex-col absolute left-1/2 -translate-x-1/2 mt-2 w-48 p-3 bg-white border border-gray-200 rounded-lg shadow-lg text-sm text-gray-700 opacity-100 md:opacity-0 scale-95 pointer-events-none transition duration-200 ease-out group-hover:opacity-100 group-hover:scale-100">
										<span className="text-md font-bold underline">
											{year.year}
										</span>
										{year.achievement}
									</div>
								</div>
								<div className="px-1 md:px-3 h-2 bg-zinc-300 text-white rounded-lg"></div>
								<div className="px-1 md:px-3 h-2 bg-zinc-300 text-white rounded-lg"></div>
								<div className="px-1 md:px-3 h-2 bg-zinc-300 text-white rounded-lg"></div>
								<div className="px-1 md:px-3 h-2 bg-zinc-300 text-white rounded-lg"></div>
								<div className="px-1 md:px-3 h-2 bg-zinc-300 text-white rounded-lg"></div>
							</>
						);
					}
				})}
			</div>
		</div>
	);
};

export default Career;
