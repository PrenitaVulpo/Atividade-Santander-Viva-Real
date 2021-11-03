const generateDictionary = () => {
	const dictionary = new Map();

	dictionary.set("sao-paulo", "sp");
	dictionary.set("sp", "sao-paulo");
	dictionary.set("saopaulo", "sao-paulo");
	dictionary.set("riodejaneiro", "rio-de-janeiro");
	dictionary.set("riode", "rio-de-janeiro");
	dictionary.set("rio", "rio-de-janeiro");
	dictionary.set("rj", "rio-de-janeiro");
	dictionary.set("rio-de-janeiro", "rj");

	return dictionary;
};

const formatSearch = (searchWord) => {
	console.log(searchWord);

	const normalizedWord = searchWord
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/\s/g, "")
		.toLowerCase();

	const dictionary = generateDictionary();

	let result = { state: "", city: "" };

	dictionary.get(`${normalizedWord}`)
		? (result = {
				city: dictionary.get(`${normalizedWord}`),
				state: dictionary.get(dictionary.get(`${normalizedWord}`)),
		  })
		: null;

	return result;
};

export default formatSearch;
