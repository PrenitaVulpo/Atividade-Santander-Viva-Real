const appendTitle = (number) => {
	const resultsTitle = document.querySelector(".results-title");

	const resultsNumber = document.createElement("h1");
	const resultsText = document.createElement("span");

	resultsNumber.innerText = number;

	resultsText.innerText = `móveis à venda em `;

	resultsTitle.appendChild(resultsNumber);
	resultsTitle.appendChild(resultsText);
};

export default appendTitle;
