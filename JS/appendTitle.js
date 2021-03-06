import appendResultsTags from "./appendResultsTags.js";

const appendTitle = (number, city, state) => {
	const resultsTitle = document.querySelector(".results-title");

	resultsTitle.innerHTML = "";

	const resultsNumber = document.createElement("h1");
	const resultsText = document.createElement("span");
	const resultsCity = document.createElement("span");
	const resultsState = document.createElement("span");

	resultsCity.className = "title-city";
	resultsState.className = "title-state";

	resultsNumber.innerText = number;
	resultsText.innerText = `Imóveis à venda em`;
	resultsCity.innerText = `${city.replace(/-/g, " ")}`;
	resultsState.innerText = `- ${state}`;

	resultsTitle.appendChild(resultsNumber);
	resultsTitle.appendChild(resultsText);
	resultsTitle.appendChild(resultsCity);
	resultsTitle.appendChild(resultsState);

	appendResultsTags(city, state);
};

export default appendTitle;
