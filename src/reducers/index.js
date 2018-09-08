import { actionType } from "../actions";

const initialState = { items: [] };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.GET_PRODUCTS:
			return Object.assign(
				{},
				{
					items: action.payload.groups
				}
			);
		default:
			return state;
	}
};

export default reducer;
