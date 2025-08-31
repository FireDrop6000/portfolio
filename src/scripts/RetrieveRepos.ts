import { Octokit } from "@octokit/rest";
import type { Endpoints } from "@octokit/types";

export async function retrieveRepos() {
	const octokit = new Octokit();

	type Repo =
		Endpoints["GET /users/{username}/repos"]["response"]["data"][number];

	let sortedRepos: Repo[] = [];

	try {
		const repos = await octokit.rest.repos.listForUser({
			username: "FireDrop6000",
			per_page: 100,
			type: "owner",
		});

		if (repos.status === 200) {
			sortedRepos = repos.data
				.filter((repo) => !repo.private && !repo.fork)
				.sort((a, b) => {
					return (b.stargazers_count || 0) - (a.stargazers_count || 0);
				});
		}
	} catch (error) {
		console.error("Failed to fetch repositories");
	}

	return sortedRepos;
}
