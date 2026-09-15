import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../Context/AppContext'
import toast from 'react-hot-toast'

const InputFeild = ({ type, placeholder, name, handleChange, address }) => (
    <input className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition'
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={address[name]}
        required
    />
)


const AddAddress = () => {

    const { axios, user, navigate } = useAppContext();


    const [address, setAddress] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        phone: '',
    })


    const handleChange = (e) => {
        const { name, value } = e.target;

        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }))
    }




    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (!user) {
            toast.error("Please login first");
            return;
        }

        try {
            const { data } = await axios.post('/api/address/add', {
                address,
                userId: user._id
            });

            if (data.success) {
                toast.success(data.message);
                navigate('/cart');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }


    //  useEffect(()=>{
    //     if (!user) {
    //         navigate('/cart')
    //     }
    //  }, [])

    useEffect(() => {
        if (user === null) return;
    }, [user])


    return (
        <div className='mt-16 mb-16'>
            <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping <span>Address</span></p>
            <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
                <div className='flex-1 max-w-md'>
                    <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>
                        <div className='grid grid-cols-2 gap-4'>
                            <InputFeild handleChange={handleChange} address={address} name='firstName' type='text' placeholder='First Name' />
                            <InputFeild handleChange={handleChange} address={address} name='lastName' type='text' placeholder='Last Name' />
                        </div>

                        <InputFeild handleChange={handleChange} address={address} name='email' type='email' placeholder='Email Address' />
                        <InputFeild handleChange={handleChange} address={address} name='street' type='text' placeholder='Street' />

                        <div className='grid grid-cols-2 gap-4'>
                            <InputFeild handleChange={handleChange} address={address} name='city' type='text' placeholder='City' />
                            <InputFeild handleChange={handleChange} address={address} name='state' type='text' placeholder='State' />
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <InputFeild handleChange={handleChange} address={address} name='zipCode' type='number' placeholder='Zip Code' />
                            <InputFeild handleChange={handleChange} address={address} name='country' type='text' placeholder='Country' />
                        </div>

                        <InputFeild handleChange={handleChange} address={address} name='phone' type='text' placeholder='Phone' />

                        <button className='w-full mt-6 bg-primary text-white py-3 bg:hover-primary-dull transition cursor-pointer uppercase'>
                            Save Address
                        </button>

                    </form>
                </div>
                <img className='md:mr-16 mb-16 md:mt-0' src={assets.gps} alt="" />
            </div>

        </div>
    )
}

export default AddAddress
