import {api} from "../../api/api";

const SET_PRODUCTS = "SET_PRODUCTS"
const SET_INITIALIZATION = "SET_INITIALIZATION"

let initialState = {
    data: null,
    orderPrice: 0,
    initialization: false,
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            debugger
            return {
                ...state,
                data: {...action.products},
                initialization: true
            }

        default:
            return state
    }
}


const setProducts = (products) => {
    debugger
    return {
        type: SET_PRODUCTS,
        products
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
            debugger
            dispatch(setProducts(data.data))
        }
    }
}

export default productReducer;
