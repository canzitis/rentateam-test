import {api} from "../../api/api";

const SET_PRODUCTS = "SET_PRODUCTS"

let initialState = {
    products: [],
    orderPrice: 0,
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: [...action.products]
            }

        default:
            return state
    }
}


const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        products
    }
}

export const getProducts = () => {
    return async (dispatch) => {
        await api.getProducts()
        const data = await api.getProducts()
        if (data.status === 200) {
            dispatch(setProducts(data.data))
        }
    }
}

export default productReducer;
