import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../Context/AppContext";
import { BsCart3 } from "react-icons/bs";

const ProductCard = ({ product }) => {
    const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();

    return product && (
        <div onClick={()=> {navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0,0)}} className="border border-gray-500/20 rounded-md px-3 py-2 bg-white w-full flex flex-col justify-between h-full ">
            
            <div className="group cursor-pointer flex items-center justify-center px-2">
                {/* ✅ FIX: image array ka first element use kiya */}
                <img 
                    className="group-hover:scale-105 transition max-w-30 lg:max-w-38 md:max-w-40" 
                    src={product.image?.[0]} 
                    alt={product.name}/>
            </div>

            <div className="text-gray-500/60 text-sm">
                <p>{product.category}</p>

                <p className="text-gray-700 font-medium text-lg truncate w-full">
                    {product.name}
                </p>

                <div className="flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (
                        <img 
                            key={i}
                            className="md:w-3 w-[.50rem]" 
                            src={i < 2   ? assets.star_icon : assets.dull_star_icon} 
                            alt="Star icon"/> 
                    ))}
                    <p>(4)</p>
                </div>

                <div className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base font-medium text-indigo-500">
                        {currency}{product.offerPrice}{" "}
                        <span className="text-gray-500/60 md:text-sm text-xs line-through">
                            {currency}${product.price}
                        </span>
                    </p>

                    <div onClick={(e)=> {e.stopPropagation();}} className="text-primary">
                        {/* ✅ FIX: optional chaining */}
                        {!cartItems?.[product._id] ? (
                            <button 
                                className="flex items-center justify-center gap-1 bg-primary/10  border border-primary md:w-[80px] w-[64px] h-[34px] rounded text-primary cursor-pointer" 
                                onClick={() => addToCart(product._id)}>
                                <BsCart3 />
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-indigo-500/25 rounded select-none">
                                <button 
                                    onClick={() => {removeFromCart(product._id)}} 
                                    className="cursor-pointer text-md px-2 h-full">
                                    -
                                </button>

                                {/* ✅ FIX: safe access */}
                                <span className="w-5 text-center">
                                    {cartItems?.[product._id]}
                                </span>

                                <button 
                                    onClick={()=> {addToCart(product._id)}} 
                                    className="cursor-pointer text-md px-2 h-full">
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;