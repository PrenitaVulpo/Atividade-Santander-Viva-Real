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

	infoDiv.appendChild(infoDivTop);
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

const createProductDivView = (value) => {
	const div = document.createElement("div");
	div.classList.add("productDiv");
	const img = document.createElement("img");
	img.classList.add("productPicture");
	img.src = `${value.medias[0].url}`;
	div.append(img);

	const divContact = document.createElement("div");
	divContact.classList.add("divContact");

	const pPhone = document.createElement("p");
	pPhone.innerText = "TELEFONE";
	divContact.append(pPhone);

	const pMessage = document.createElement("p");
	pMessage.innerText = "ENVIAR MENSAGEM";
	divContact.append(pMessage);

	div.append(divContact);

	const divAd = document.createElement("div");
	divAd.classList.add("productAd");

	const pAddress = document.createElement("p");
	pAddress.setAttribute("id", "pAddress");
	pAddress.innerText = `${value.link.data.street}, ${value.link.data.streetNumber} - ${value.link.data.neighborhood}, ${value.link.data.city} - ${value.listing.address.stateAcronym}`;
	divAd.append(pAddress);

	const pName = document.createElement("p");
	pName.setAttribute("id", "pName");
	pName.innerText = `${value.link.name}`;
	divAd.append(pName);

	const pListing = document.createElement("p"); // OU DIV SERÁ MELHOR?
	pListing.setAttribute("id", "pListing");
	//pListing.innerText = `${value.listing.usableAreas} m² ${(value.listing.bedrooms>1) ? `${(value.listing.bedrooms)} Quartos` : `${(value.listing.bedrooms)} Quarto`} ${(value.listing.bathrooms>1) ? `${(value.listing.bathrooms)} Banheiros` : `${(value.listing.bathrooms)} Banheiro`} ${(value.listing.parkingSpaces>1) ? `${(value.listing.parkingSpaces)} Vagas` : `${(value.listing.parkingSpaces)} Vaga`} `
	pListing.innerHTML = ` ${value.listing.usableAreas} <p>m²</p> ${
		value.listing.bedrooms > 1
			? `${value.listing.bedrooms} <p>Quartos</p>`
			: `${value.listing.bedrooms} <p>Quarto</p>`
	} ${
		value.listing.bathrooms > 1
			? `${value.listing.bathrooms} <p>Banheiros</p>`
			: `${value.listing.bathrooms} <p>Banheiro</p>`
	} ${
		value.listing.parkingSpaces > 1
			? `${value.listing.parkingSpaces} <p>Vagas</p>`
			: `${value.listing.parkingSpaces} <p>Vaga</p>`
	} `;
	divAd.append(pListing);

	const divAmenities = document.createElement("div");
	divAmenities.setAttribute("id", "divAmenities");
	value.listing.amenities.forEach((element) => {
		const p = document.createElement("p");
		p.classList.add("pAmenities");
		const dictionary = translate();
		const translatedWord = dictionary.get(element);
		p.append(translatedWord);
		divAmenities.append(p);
	});
	divAd.append(divAmenities);

	const divPricingInfos = document.createElement("div");
	divPricingInfos.setAttribute("id", "divPricingInfos");

	const h1PricingInfos = document.createElement("h1");
	h1PricingInfos.setAttribute("id", "h1PricingInfos");
	h1PricingInfos.innerText = `R$ ${Number(
		value.listing.pricingInfos[0].price,
	).toLocaleString()}`;
	divPricingInfos.append(h1PricingInfos);

	const divCondoPricingInfos = document.createElement("div");
	divCondoPricingInfos.setAttribute("id", "divCondoPricingInfos");

	const pCondoPricingInfos = document.createElement("p");
	pCondoPricingInfos.innerText = `R$  ${Number(
		value.listing.pricingInfos[0].monthlyCondoFee,
	).toLocaleString()}`;
	divCondoPricingInfos.innerText = "Condomínio:";
	divCondoPricingInfos.append(pCondoPricingInfos);
	value.listing.pricingInfos[0].monthlyCondoFee
		? divPricingInfos.append(divCondoPricingInfos)
		: null;
	divAd.append(divPricingInfos);

	div.append(divAd);
	dynamicDiv.append(div);
};
