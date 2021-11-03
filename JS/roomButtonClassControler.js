const roomButtonClassControler = () => {
	const roomButtons = document.querySelectorAll(".room-button");

	//varre a lista de elementos para atribuir o evento
	roomButtons.forEach((button) => {
		button.addEventListener("click", () => {
			console.log("click");
			//varre a lista novamente tirando a classe de selecionado
			const tabsReselct = document.querySelectorAll(".room-button");
			tabsReselct.forEach((singleTab) => {
				singleTab.classList.remove("room-button-active");
			});
			//adiciona a classe no elemento clicado
			tab.classList.add("room-button-active");
		});
	});
};

export default roomButtonClassControler;
