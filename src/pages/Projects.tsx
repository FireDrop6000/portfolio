import { useEffect, useState } from "react";
import Fork from "../icons/Fork";
import Star from "../icons/Star";
import { retrieveRepos } from "../scripts/RetrieveRepos";

const Projects = () => {
	const [sortedRepos, setSortedRepos] = useState<any[]>([]);

	useEffect(() => {
		const fetchRepos = async () => {
			const repos = await retrieveRepos();
			setSortedRepos(repos);
		};
		fetchRepos();
	}, []);

	return (
		<div className="flex flex-col items-center justify-center mt-64 mb-50">
			<h1 className="text-6xl underline font-bold">Projects</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-15 mt-32">
				{sortedRepos.map((repo) => (
					<a
						href={repo.html_url}
						target="_blank"
						className="max-w-sm p-6 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-md transition ease-in duration-200 animate-appear"
						rel="noopener noreferrer"
					>
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							{repo.name}
						</h5>
						{repo.description && (
							<p className="font-normal text-gray-700 dark:text-gray-400">
								{repo.description}
							</p>
						)}
						{repo.language && (
							<div className="text-xs text-black w-fit bg-zinc-200 px-2 py-1 rounded-md font-semibold mt-3">
								{repo.language}
							</div>
						)}
						{repo.stargazers_count || repo.forks_count ? (
							<div className="flex gap-2 mt-2">
								{repo.stargazers_count ? (
									<div className="flex gap-1 items-center justify-center text-black dark:text-white">
										<Star />
										<span>{repo.stargazers_count}</span>
									</div>
								) : null}
								{repo.forks_count ? (
									<div className="flex gap-1 items-center justify-center text-black dark:text-white">
										<Fork />
										<span>{repo.forks_count}</span>
									</div>
								) : null}
							</div>
						) : null}
					</a>
				))}
			</div>
		</div>
	);
};

export default Projects;
