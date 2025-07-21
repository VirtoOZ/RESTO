const menuLoaded = (newMenu) => {
	return {
		type: 'MENU_LOADED',
		payload: newMenu,
	};
};

const menuRequested = () => {
	return {
		type: 'MENU_REQUESTED',
	};
};

const addedToCard = (id) => {
	// console.log(`Сработка id:${id}`);
	return {
		type: 'ITEM_ADD_TO_CARD',
		payload: id,
	};
};

// const menuError = () => {
// 	return {
// 		type: 'MENU_ERROR',
// 	};
// };

const deleteFromCard = (id) => {
	return {
		type: 'ITEM_REMOVE_FROM_CARD',
		payload: id,
	};
};

const calcPrice = () => {
	return {
		type: 'ITEM_PRICE_TO_CARD',
	};
};

export {
	menuLoaded,
	menuRequested,
	// menuError,
	addedToCard,
	deleteFromCard,
	calcPrice,
}