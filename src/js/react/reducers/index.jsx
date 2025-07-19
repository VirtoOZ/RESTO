const initianState = {
	menu: [],
};
const reducer = (state = initianState, action) => {
	switch (action.type) {
		case "MENU_LOADED":
			return {
				menu: action.payload,
			};
		default: return state;
	}
}

export default reducer;