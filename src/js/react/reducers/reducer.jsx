const initianState = {
	menu: [],
	loading: true,
	error: false,
	items: [],
	total: 0,
};

const reducer = (state = initianState, action) => {
	// console.log(state);
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
			const findEl = (arr) => {
				return arr.find(item => item.id === id);
			}
			const itemWithId = findEl(state.menu);
			const newItem = {
				title: itemWithId.title,
				price: itemWithId.price,
				url: itemWithId.url,
				id: `${itemWithId.id}-${itemWithId.category}`,
				x: 1
			};
			// console.log(state.items);
			// if (findEl(state.items)) {
			// 	const findDuble = findEl(state.items);
			// 	findDuble.x += 1;
			// 	findDuble.id = `${findDuble.id}${findDuble.x}`
			// 	// console.log(findDuble);
			// 	return {
			// 		...state,
			// 		items: [
			// 			...state.items,
			// 		],
			// 	}
			// }
			return {
				...state,
				items: [
					...state.items,
					newItem
				],
				total: state.total + newItem.price,
			};

		case "ITEM_REMOVE_FROM_CARD":
			const ind = action.payload;
			const itemInd = state.items.findIndex((item) => item.id === ind);
			return {
				...state,
				total: state.total - state.items[itemInd].price,
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