const realStateURL = (state, city) =>
	`http://private-9e061d-piweb.apiary-mock.com/venda?state=${state}&city=${city}`;

const getRealState = async (state, city) => {
	const realStatePromise = fetch(realStateURL(state, city)).then((response) =>
		response.json(),
	);

	let properties = [];
	let totalCount = 0;

	await Promise.resolve(realStatePromise).then((realState) => {
		properties = realState.search.result.listings;
		totalCount = realState.search.totalCount;
	});

	return { properties, totalCount };
};

export default getRealState;
