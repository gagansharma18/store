import request from "request-promise";

const getProductsUri = "http://localhost:3000/index.json";

export const actionType = {
	GET_PRODUCTS: "get_products"
};

export function getProducts(params) {
	return async dispatch => {
		try {
			const response = await request.get(getProductsUri);
			dispatch({
				type: actionType.GET_PRODUCTS,
				payload: JSON.parse(response)
			});
		} catch (e) {
			console.error(e);
		}
	};
}
