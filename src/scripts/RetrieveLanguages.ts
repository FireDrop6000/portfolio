export async function retrieveLanguages() {
	const cacheKey = "langData";
	const cacheTimeKey = "langDataTime";
	const now = Date.now();

	const cached = localStorage.getItem(cacheKey);
	const cachedTime = localStorage.getItem(cacheTimeKey);
	const cacheDuration = 10 * 60 * 1000;

	if (cached && cachedTime && now - Number(cachedTime) < cacheDuration) {
		return JSON.parse(cached);
	}

	let languages = [];

	try {
		const res = await fetch(
			"https://3lpajar4ehzslczoq7tqgtznp40seekp.lambda-url.ap-south-1.on.aws/",
		);

		if (!res.ok) {
			throw new Error(`HTTP invalid request: ${res.status}`);
		}

		languages = await res.json();
	} catch (err) {
		console.error("Failed to fetch languages: ", err);
		return [];
	}

	localStorage.setItem(cacheKey, JSON.stringify(languages));
	localStorage.setItem(cacheTimeKey, String(now));

	return languages;
}
