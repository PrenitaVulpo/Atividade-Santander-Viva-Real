const appendResultsTags = (city, state) => {
	const resultsTitle = document.querySelector(".result-tags");

	const tagsArea = document.createElement("div");
	tagsArea.classList.add("result-tags");

	const tag = document.createElement("span");
	tag.innerText = `${city.replace(/-/g, " ")} - ${state.toUpperCase()}`;
	tagsArea.appendChild(tag);

	resultsTitle.appendChild(tagsArea);
};

export default appendResultsTags;
