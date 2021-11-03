import getRealState from "./JS/getRealState.js";
import appendTitle from "./JS/appendTitle.js";
import resultsNavClassControler from "./JS/resultsNavClassControler.js";
import formatSearch from "./JS/formatSearch.js";
import appendCards from "./JS/appendCards.js";

const loadPage = async () => {
	resultsNavClassControler();

	const s = "São Paulo";

	const { city, state } = formatSearch(s);

	let results = { properties: null, totalCount: 0 };

	results = { ...(await getRealState(state, city)) };

	appendTitle(results.totalCount, "são paulo", "sp");

	appendCards(results.properties);

	const locationField = document.querySelector("#location-field");
	locationField.addEventListener("blur", async (e) => {
		const { city, state } = formatSearch(e.target.value);

		results = { ...(await getRealState(state, city)) };

		appendTitle(results.totalCount, city, state);

		appendCards(results.properties);
	});

	const cb = document.getElementById("toggle-button");
	cb.addEventListener("click", () => {
		console.log(cb.checked);
	});
};

loadPage();
