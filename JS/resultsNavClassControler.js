const resultsNavClassControler = () => {
	const resultsTabs = document.querySelectorAll(".result-tab");

	//varre a lista de elementos para atribuir o evento
	resultsTabs.forEach((tab) => {
		tab.addEventListener("click", () => {
			console.log("click");
			//varre a lista novamente tirando a classe de selecionado
			const tabsReselct = document.querySelectorAll(".result-tab");
			tabsReselct.forEach((singleTab) => {
				singleTab.classList.remove("result-tab-selected");
			});
			//adiciona a classe no elemento clicado
			tab.classList.add("result-tab-selected");
		});
	});
};

export default resultsNavClassControler;
