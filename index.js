import getRealState from "./JS/getRealState.js";
import appendTitle from "./JS/appendTitle.js";

const loadPage = async () => {
	const { result: realState, totalCount } = await getRealState();

	console.log(realState);
	appendTitle(totalCount);

	const cb = document.getElementById("toggle-button");
	cb.addEventListener("click", () => {
		console.log(cb.checked);
	});
};

loadPage();
