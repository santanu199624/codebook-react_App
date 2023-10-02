import { createContext, useContext, useReducer } from "react"
import filterReducer from "../reducer/filterReducer"

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    rating: null
}

 const filterContext = createContext(filterInitialState)

 export const FilterProvider = ({children}) => {

    const [state, dispatch] = useReducer(filterReducer, filterInitialState)

    function initialProducts(products){
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        })
    }

    function bestSeller(products){
        return state.bestSellerOnly ? products.filter(product => product.best_seller === true) : products ;
    }

    function inStock(products){
        return state.onlyInStock ? products.filter(product => product.in_stock === true) : products ;
    }

    function sort(products){
        if(state.sortBy === "lowtohigh"){
            return products.sort((a,b) => Number(a.price) - Number(b.price))
        }
        if(state.sortBy === "hightolow"){
            return products.sort((a, b) => Number(b.price) - Number(a.price))
        }
        return products;
    }

    function rating(products){
        if(state.rating === "4STARSABOVE"){
            return products.filter(product => product.rating >= 4)
        }

        if(state.rating === "3STARSABOVE"){
            return products.filter(product => product.rating >= 3)
        }

        if(state.rating === "2STARSABOVE"){
            return products.filter(product => product.rating >= 2)
        }

        if(state.rating === "1STARSABOVE"){
            return products.filter(product => product.rating >= 1)
        }

        return products;
    }

    const filteredProductList = rating(sort(inStock(bestSeller(state.productList))))

    const value = {
        state,
        dispatch,
        products: filteredProductList,
        initialProducts
    }

    return (
        <filterContext.Provider value={value}>
            {children}
        </filterContext.Provider>
    )
}

export const useFilter = () => useContext(filterContext)








