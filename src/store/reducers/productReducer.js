import {api} from "../../api/api";

const SET_PRODUCTS = "SET_PRODUCTS"
const SET_INITIALIZATION = "SET_INITIALIZATION"

let initialState = {
    categories: [],
    footer: null,
    orderPrice: 0,
    initialization: false,
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                categories: [...action.data.categories],
                footer: {...action.data.footer},
                initialization: true
            }

        default:
            return state
    }
}


const setProducts = (data) => {
    return {
        type: SET_PRODUCTS,
        data
    }
}

const setInitialization = (initialization) => {
    return {
        type: SET_INITIALIZATION,
        initialization
    }
}

export const getProducts = () => {
    return async (dispatch) => {
        await api.getProducts()
        dispatch(setInitialization(false))
        const data = await api.getProducts()
        if (data.status === 200) {
            dispatch(setProducts(data.data))
        }
    }
}

export default productReducer;
