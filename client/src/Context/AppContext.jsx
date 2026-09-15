import React from "react";
import { useEffect } from "react";
import { Children, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import axios from "axios"

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY

    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState("")

    //fatch seller status
    const fatchSeller = async () => {
        try {
            const { data } = await axios.post('/api/seller/is-auth');
            if (data.success) {
                setIsSeller(true)
            } else {
                setIsSeller(false)
            }
        } catch (error) {
            setIsSeller(false)
        }
    }


    //Fetch User Auth status, User data and cart items
    const fatchUser = async () => {
        try {
            const { data } = await axios.get('/api/user/is-auth')
            if (data.success) {
                setUser(data.user)
                setCartItems(data.user.cartItems)
            }
        } catch (error) {
            setUser(null)
        }
    }


    //Fatch all Products    
    const fatchProducts = async () => {
        try {
            const { data } = await axios.get('/api/product/list')
            if (data.success) {
                setProducts(data.products)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    //Add products to cart
    const addToCart = async (itemId) => {

        let cartData = structuredClone(cartItems)
        if (cartData[itemId]) {
            cartData[itemId] += 1
        } else {
            cartData[itemId] = 1
        }
        setCartItems(cartData);
        if (user) {
            await axios.post('/api/cart/update', {
                userId: user._id,
                cartItems: cartData
            })
        }
        toast.success("Add to cart")
    }

    //Update cart Itme Quantity
    const updateCartItem = async (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;

    setCartItems(cartData)
    if (user) {
        await axios.post('/api/cart/update', {
            userId: user._id,
            cartItems: cartData
        })
    }
    toast.success("Cart Updated")
}

    //Remove product from cart
    const removeFromCart = async (itemId) => {

    let cartData = structuredClone(cartItems)
    if (cartData[itemId]) {
        cartData[itemId] -= 1
        if (cartData[itemId] === 0) {
            delete cartData[itemId];
        }
    }
    setCartItems(cartData)
    if (user) {
        await axios.post('/api/cart/update', {
            userId: user._id,
            cartItems: cartData
        })
    }
    toast.success("Remove from cart")
}


    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            totalCount += cartItems[item]
        }
        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            let itemInfo = products.find((product) => product._id === item)
            if (cartItems[item] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[item]
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }


    useEffect(() => {
        fatchUser();
        fatchSeller();
        fatchProducts();
    }, [])




    const value = {
        navigate, user, setUser, isSeller, setIsSeller,
        showUserLogin, setShowUserLogin, products, currency, addToCart,
        updateCartItem, removeFromCart, cartItems, searchQuery, setSearchQuery,
        getCartAmount, getCartCount, axios, fatchProducts,setCartItems
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}