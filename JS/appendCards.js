import generateCards from "./generateCards.js";

const appendCards = (realState) => {
	const resultArea = document.querySelector(".results-cards-area");

	const cards = generateCards(realState);

	cards.forEach((card) => {
		resultArea.appendChild(card);
	});
};

export default appendCards;
