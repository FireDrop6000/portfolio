export async function retrieveRepos() {
	const cacheKey = "repoData";
	const cacheTimeKey = "repoDateTime";
	const now = Date.now();

	const cached = localStorage.getItem(cacheKey);
	const cachedTime = localStorage.getItem(cacheTimeKey);
	const cacheDuration = 10 * 60 * 1000;

	if (cached && cachedTime && now - Number(cachedTime) < cacheDuration) {
		return JSON.parse(cached);
	}

	let sortedRepos = [];

	try {
		const res = await fetch(
			"https://nt2ntzrpjnxsyrxn3hyk5trw5i0gxoea.lambda-url.ap-south-1.on.aws/",
		);

		if (!res.ok) {
			throw new Error(`HTTP invalid request: ${res.status}`);
		}

		sortedRepos = await res.json();
	} catch (err) {
		console.error("Failed to fetch repositories", err);
		return [];
	}

	localStorage.setItem(cacheKey, JSON.stringify(sortedRepos));
	localStorage.setItem(cacheTimeKey, String(now));

	return sortedRepos;
}
