import { actionType } from "../actions";

const initialState = { items: [] };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.GET_PRODUCTS:
			return Object.assign(
				{},
				{
					items: action.payload.groups,
					allItems: action.payload.groups
				}
			);
		case actionType.GET_PRODUCT_DETAILS:
			return Object.assign(
				{},
				{
					items: state.allItems.filter(item => {
						return action.payload
							? action.payload === item.id
							: item;
					}),
					allItems: state.allItems
				}
			);
		default:
			return state;
	}
};

export default reducer;
