import translateTags from "./translateTags.js";

const generateTags = (amenities) => {
	const tagsDictionary = translateTags();
	const amenitiesList = document.createElement("div");
	amenitiesList.classList.add("amenities-list");

	amenities.forEach((item) => {
		const tag = document.createElement("span");
		const translatedTag = tagsDictionary.get(item);
		tag.innerText = translatedTag;
		amenitiesList.appendChild(tag);
	});

	return amenitiesList;
};

const generateInfoDiv = (item) => {
	const infoDiv = document.createElement("div");
	infoDiv.classList.add("result-card-info-div");

	const infoDivTop = document.createElement("div");
	infoDivTop.classList.add("result-card-info-div-top");

	//top content
	const address = document.createElement("span");
	address.innerText = `${item.link.data.street}, ${item.link.data.streetNumber} - ${item.link.data.neighborhood}, ${item.link.data.city} - ${item.listing.address.stateAcronym}`;
	infoDivTop.appendChild(address);

	const description = document.createElement("h2");
	description.innerText = item.link.name;
	infoDivTop.appendChild(description);

	//characteristics list
	const characteristicsList = document.createElement("div");
	characteristicsList.classList.add("characteristics-list");

	const area = document.createElement("p");
	const areaValue = document.createElement("strong");
	areaValue.innerText = item.listing.usableAreas;
	const areaText = document.createElement("span");
	areaText.innerText = " m²";
	area.appendChild(areaValue);
	area.appendChild(areaText);

	const bedrooms = document.createElement("p");
	const bedroomsValue = document.createElement("strong");
	bedroomsValue.innerText = item.listing.bedrooms;
	const bedroomsText = document.createElement("span");
	bedroomsText.innerText = " Quartos";
	bedrooms.appendChild(bedroomsValue);
	bedrooms.appendChild(bedroomsText);

	const bathrooms = document.createElement("p");
	const bathroomsValue = document.createElement("strong");
	bathroomsValue.innerText = item.listing.bathrooms;
	const bathroomsText = document.createElement("span");
	bathroomsText.innerText = " Banheiros";
	bathrooms.appendChild(bathroomsValue);
	bathrooms.appendChild(bathroomsText);

	const parkingSpaces = document.createElement("p");
	const parkingSpacesValue = document.createElement("strong");
	parkingSpacesValue.innerText = item.listing.parkingSpaces;
	const parkingSpacesText = document.createElement("span");
	parkingSpacesText.innerText = " Vagas";
	parkingSpaces.appendChild(parkingSpacesValue);
	parkingSpaces.appendChild(parkingSpacesText);

	characteristicsList.appendChild(area);
	characteristicsList.appendChild(bedrooms);
	characteristicsList.appendChild(bathrooms);
	characteristicsList.appendChild(parkingSpaces);

	infoDivTop.appendChild(characteristicsList);

	//amenities
	infoDivTop.appendChild(generateTags(item.listing.amenities));

	//bottom content
	const infoDivBottom = document.createElement("div");
	infoDivBottom.classList.add("result-card-info-div-bottom");

	const itemPrice = document.createElement("p");
	itemPrice.innerText = Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(item.listing.pricingInfos[0].price);

	const condoFee = document.createElement("span");
	condoFee.innerText = "Condomínio: ";
	const condoFeeValue = document.createElement("strong");
	condoFeeValue.innerText = item.listing.pricingInfos[0].monthlyCondoFee
		? Intl.NumberFormat("pt-BR", {
				style: "currency",
				currency: "BRL",
		  }).format(item.listing.pricingInfos[0].monthlyCondoFee)
		: "não informado";

	condoFee.appendChild(condoFeeValue);

	infoDivBottom.appendChild(itemPrice);
	infoDivBottom.appendChild(condoFee);

	infoDiv.appendChild(infoDivTop);
	infoDiv.appendChild(infoDivBottom);
	return infoDiv;
};

const generateCards = (realState) => {
	let result = [];

	realState.forEach((item) => {
		const card = document.createElement("div");
		card.classList.add("result-card");

		//property picture
		const propertyImg = document.createElement("img");
		propertyImg.classList.add("propertyImg");
		propertyImg.src = `${item.medias[0].url}`;

		//generate info area
		const infoDiv = generateInfoDiv(item);

		//append stuf
		card.appendChild(propertyImg);
		card.appendChild(infoDiv);

		result.push(card);
	});

	return result;
};

export default generateCards;
