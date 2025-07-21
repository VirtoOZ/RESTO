const initianState = {
	menu: [],
	loading: true,
	error: false,
	items: [],
	price: 0,
};

const reducer = (state = initianState, action) => {
	console.log(state);
	switch (action.type) {
		case "MENU_LOADED":
			return {
				...state,
				menu: action.payload,
				loading: false,
			};

		case "MENU_REQUESTED":
			return {
				...state,
				menu: state.menu,
				loading: true,
			};

		// case "MENU_ERROR":
		// 	return {
		// 		...state,
		// 		error: true,
		// 	};

		case "ITEM_ADD_TO_CARD":
			const id = action.payload;
			const itemWithId = state.menu.find(item => item.id === id);
			const newItem = {
				title: itemWithId.title,
				price: itemWithId.price,
				url: itemWithId.url,
				id: itemWithId.id,
			};
			console.log(newItem);
			return {
				...state,
				items: [
					...state.items,
					newItem
				],
				price: state.price + newItem.price,
			};

		case "ITEM_REMOVE_FROM_CARD":
			const ind = action.payload;
			const itemInd = state.items.findIndex((item) => item.id === ind);
			return {
				...state,
				price: state.price - state.items[itemInd].price,
				items: [
					...state.items.slice(0, itemInd),
					...state.items.slice(itemInd + 1),
				],
			};

		// case 'ITEM_PRICE_TO_CARD':
		// 	return {
		// 		...state,

		// 	}
		default: return state;
	}
}

export default reducer;
