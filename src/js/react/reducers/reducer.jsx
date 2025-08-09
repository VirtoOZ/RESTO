const initianState = {
	menu: [],
	loading: true,
	error: false,
	items: [],
	total: 0,
};

const reducer = (state = initianState, action) => {
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

		case "ITEM_ADD_TO_CARD":
			const id = action.payload;
			const findEl = (arr) => {
				return arr.find(item => item.id === id);
			}
			if (findEl(state.items)) {
				console.log('yes');
				const findDubleWithId = findEl(state.items);
				console.log(findDubleWithId);
				findDubleWithId.x = findDubleWithId.x + 1;
				findDubleWithId.key = `${findDubleWithId.title} = x${findDubleWithId.x}`;
				return {
					...state,
					total: state.total + findDubleWithId.price,
				}
			} else {
				const itemWithId = findEl(state.menu);
				const newItem = {
					x: 1,
					title: itemWithId.title,
					price: itemWithId.price,
					url: itemWithId.url,
					id: itemWithId.id,
					key: `id=${itemWithId.id}`,
				};
				return {
					...state,
					items: [
						...state.items,
						newItem
					],
					total: state.total + newItem.price,
				};
			}

		case "ITEM_REMOVE_FROM_CARD":
			const ind = action.payload;
			const itemInd = state.items.findIndex((item) => item.id === ind);
			if (state.items[itemInd].x > 1) {
				state.items[itemInd].x -= 1;
				return {
					...state,
					total: state.total - state.items[itemInd].price,
				}
			} else {
				return {
					...state,
					total: state.total - state.items[itemInd].price,
					items: [
						...state.items.slice(0, itemInd),
						...state.items.slice(itemInd + 1),
					],
				};
			}
		default: return state;
	}
}

export default reducer;