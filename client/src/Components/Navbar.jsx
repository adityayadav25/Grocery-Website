import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { useAppContext } from '../Context/AppContext';
import { assets } from '../assets/assets';
import toast from 'react-hot-toast';



const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [suggestions, setSuggestions] = useState([])
    const {
        user,
        setUser,
        setShowUserLogin,
        navigate,
        searchQuery,
        setSearchQuery,
        getCartCount,
        axios,
        products
    } = useAppContext();

    const logout = async () => {
        try {

            await axios.get('/api/user/logout')
            toast.success("Logged out successfully")
            setUser(null)
            navigate('/')

        } catch (error) {
            console.log(error)
            setUser(null)
            navigate('/')
        }
    }

    useEffect(() => {
        if (searchQuery.length > 0) {
            navigate("/products")
        }
    }, [searchQuery])


    useEffect(() => {
        if (!searchQuery.trim()) {
            setSuggestions([])
            return
        }
        const filtered = products.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setSuggestions(filtered.slice(0, 6))
    }, [searchQuery, products])


    useEffect(() => {
        setShowSearch(false)
    }, [])

    return (
        <nav className="sticky top-0 z-[999] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white transition-all">

            <NavLink to='/' onClick={() => setOpen(false)}>
                <h1 className='text-black text-[1.8rem] font-semibold'>
                    Gmart
                </h1>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8 text-[#44ae7c]">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>All Product</NavLink>
                <NavLink to='/'>Contact</NavLink>


                {/* Search bar */}
                <div className="hidden lg:flex relative flex-col">

                    <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full bg-white">

                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="py-1.5 w-72 bg-transparent outline-none placeholder-gray-500"
                            type="text"
                            placeholder="Search products"
                        />

                        <IoSearch className='w-6 h-6' />

                    </div>

                    {suggestions.length > 0 && (

                        <div className="absolute top-12 left-0 w-full bg-white shadow-xl border rounded-lg z-50 overflow-hidden">
                            {suggestions.map((item) => (
                                <div
                                    key={item._id}
                                    onClick={() => {
                                        navigate(`/products/${item.category.toLowerCase()}/${item._id}`)
                                        setSuggestions([])
                                        setSearchQuery("")
                                    }}
                                    className="flex items-center gap-3 p-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                                >
                                    <img
                                        src={item.image[0]}
                                        alt={item.name}
                                        className="w-12 h-12 object-cover"
                                    />

                                    <div className="flex-1">
                                        <p className="font-medium text-gray-800">
                                            {item.name}
                                        </p>

                                        <p className="text-green-600 font-semibold">
                                            ₹{item.offerPrice}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    )}

                    {/* Suggestion if not product match */}
                    {searchQuery.trim() && suggestions.length === 0 && (
                        <div className="absolute top-12 left-0 w-full bg-white shadow-xl border rounded-lg z-50 p-4 text-center">
                            <p className="text-red-500 font-medium">
                                No Product Found
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Try searching with another keyword
                            </p>
                        </div>
                    )}
                </div>



                <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
                    <FiShoppingCart className='w-5 h-5 opacity-80' />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>



                {!user ? (<button onClick={() => setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-[#44ae7c] hover:bg-primary transition text-white rounded-full">
                    Login
                </button>)
                    :
                    (
                        <div className='relative group'>
                            <img src={assets.profile_pic} alt="profile-picture" className=''
                                className='h-8 w-8 rounded-full' />
                            <ul className='hidden group-hover:block absolute top-9 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                                <li onClick={() => navigate("my-orders")} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My Orders</li>
                                <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Logout</li>
                            </ul>
                        </div>
                    )}
            </div>



            <div className='flex items-center gap-4 sm:hidden'>
                <button
                    onClick={() => {
                        setOpen(false)
                        setShowSearch(prev => !prev)
                    }}
                    aria-label="Search">
                    <IoSearch className='w-6 h-6 text-gray-600' />
                </button>

                <div onClick={() => {
                    setShowSearch(false)
                    navigate("/cart")
                }} className="relative cursor-pointer">
                    <FiShoppingCart className='w-5 h-5 opacity-80' />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
                        {getCartCount()}
                    </button>
                </div>

                <button
                    onClick={() => open ? setOpen(false) : setOpen(true)}
                    aria-label="Menu"
                    className="sm:hidden">
                    <RiMenu3Fill className='h-5 w-5 cursor-pointer' />
                </button>
            </div>



            {showSearch && (
                <div className="absolute top-[72px] left-0 w-full bg-white border-b shadow-md p-4 z-50 sm:hidden">
                    <div className="flex items-center border border-gray-300 rounded-full px-3">
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            type="text"
                            placeholder="Search products"
                            className="w-full py-2 bg-transparent outline-none" />
                        <IoSearch className="w-5 h-5 text-gray-500" />
                    </div>


                    {suggestions.length > 0 && (
                        <div className="mt-2 bg-white border rounded-lg overflow-hidden">

                            {suggestions.map((item) => (
                                <div
                                    key={item._id}
                                    onClick={() => {
                                        navigate(`/products/${item.category.toLowerCase()}/${item._id}`)
                                        setSuggestions([])
                                        setSearchQuery("")
                                        setShowSearch(false)
                                    }}
                                    className="flex items-center gap-3 p-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                                    <img
                                        src={item.image[0]}
                                        alt={item.name}
                                        className="w-10 h-10 object-cover" />

                                    <div>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-green-600">
                                            ₹{item.offerPrice}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}


                    {/* Suggestion if not product match */}
                    {searchQuery.trim() && suggestions.length === 0 && (
                        <div className="absolute top-12 left-0 w-full bg-white shadow-xl border rounded-lg z-50 p-4 text-center">
                            <p className="text-red-500 font-medium">
                                No Product Found
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Try searching with another keyword
                            </p>
                        </div>
                    )}
                </div>
            )}


            {/* Mobile Menu */}
            {(
                <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start z-50 gap-2 px-5 text-sm md:hidden`}>
                    <NavLink to='/' onClick={() => {
                        setShowSearch(false)
                        setOpen(prev => !prev)
                    }}>Home</NavLink>
                    <NavLink to='/products' onClick={() => setOpen(false)}>All Products</NavLink>

                    {user && (
                        <NavLink to='/products' onClick={() => setOpen(false)}>My Orders</NavLink>
                    )}

                    <NavLink to='/' onClick={() => setOpen(false)}>Contact</NavLink>

                    {!user ? (
                        <button onClick={() => {
                            setOpen(false)
                            setShowUserLogin(true)
                        }}
                            className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm">
                            Login
                        </button>
                    ) : (
                        <button onClick={logout}
                            className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm">
                            Logout
                        </button>
                    )}
                </div>
            )}
        </nav>
    )
}

export default Navbar
