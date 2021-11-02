const realStateURL = (state, city) =>
	`https://private-9e061d-piweb.apiary-mock.com/venda?state=${state}&city=${city}`;

const getRealState = async () => {
	const realStatePromise = fetch(
		"http://private-9e061d-piweb.apiary-mock.com/venda?state=sp&city=sao-paulo",
	).then((response) => response.json());

	let result = [];
	let totalCount = 0;

	await Promise.resolve(realStatePromise).then((realState) => {
		result = realState.search.result.listings;
		totalCount = realState.search.totalCount;
	});

	return { result, totalCount };
};

export default getRealState;
