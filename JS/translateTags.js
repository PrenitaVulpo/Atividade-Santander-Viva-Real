const translateTags = () => {
	const tagsDictionary = new Map();

	tagsDictionary.set("PARTY_HALL", "Salão de festas");
	tagsDictionary.set("FURNISHED", "Mobiliado");
	tagsDictionary.set("CINEMA", "Cinema");
	tagsDictionary.set("SAUNA", "Sauna");
	tagsDictionary.set("BARBECUE_GRILL", "Churrasqueira");
	tagsDictionary.set("AIR_CONDITIONING", "Ar-condicionado");
	tagsDictionary.set("ELEVATOR", "Elevador");
	tagsDictionary.set("SPORTS_COURT", "Quadra de esportes");
	tagsDictionary.set("GARDEN", "Jardim");
	tagsDictionary.set("FIREPLACE", "Lareira");
	tagsDictionary.set("POOL", "Piscina");
	tagsDictionary.set("PETS_ALLOWED", "Aceita animais");
	tagsDictionary.set("AMERICAN_KITCHEN", "Cozinha americana");
	tagsDictionary.set("TENNIS_COURT", "Quadra de tênis");
	tagsDictionary.set("BICYCLES_PLACE", "Bicicletário");
	tagsDictionary.set("GATED_COMMUNITY", "Condomínio fechado");
	tagsDictionary.set("PLAYGROUND", "Playground");
	tagsDictionary.set("LAUNDRY", "Lavanderia");
	tagsDictionary.set("GYM", "Academia");
	tagsDictionary.set("ELECTRONIC_GATE", "Portão eletrônico");

	return tagsDictionary;
};

export default translateTags;
