import getRealState from "./JS/getRealState.js";
import appendTitle from "./JS/appendTitle.js";
import resultsNavClassControler from "./JS/resultsNavClassControler.js";
import formatSearch from "./JS/formatSearch.js";

const loadPage = async () => {
	resultsNavClassControler();

	const s = "São Paulo";

	const { city, state } = formatSearch(s);

	let { result: realState, totalCount } = await getRealState(state, city);

	appendTitle(totalCount, "são paulo", "sp");

	const cb = document.getElementById("toggle-button");
	cb.addEventListener("click", () => {
		console.log(cb.checked);
	});
};

loadPage();
