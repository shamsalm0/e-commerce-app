import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const { auth } = usePage().props; 
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage(); // Get the current URL

    // Function to get the active class based on current URL
    const getLinkClass = (path) => {
        return url === path ? 'text-[#FFA500]' : 'text-gray-600';
    };

    return (
        <div>
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        <div className="flex items-center justify-between w-full sm:w-1/4 ">
                            {/* Brand Logo */}
                            <div className="flex-shrink-0">
                                <Link href="/" className="text-xl font-bold text-[#FFA500]">
                                    MyEcommerce
                                </Link>
                            </div>
                            {/* Mobile Menu Button */}
                            <div className="mr-2  flex sm:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-600 focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                <IoMenu className='w-8 h-8'/>
                                </button>
                            </div>
                        </div>
                        {/* Search Bar and Cart Icon */}
                        <div className="hidden md:flex items-center">
                            <div className='flex'>
                                <Link href="/" className={`${getLinkClass('/')} hover:text-[#FFA500] block px-3 py-2 rounded-md text-base font-medium`}>
                                    Limited Edition
                                </Link>
                                <Link href="/products" className={`${getLinkClass('/products')} hover:text-[#FFA500] block px-3 py-2 rounded-md text-base font-medium`}>
                                    Store
                                </Link>
                                <Link href="/about" className={`${getLinkClass('/about')} hover:text-[#FFA500] block px-3 py-2 rounded-md text-base font-medium`}>
                                    About Us
                                </Link>
                                <Link href="/contact" className={`${getLinkClass('/contact')} hover:text-[#FFA500] block px-3 py-2 rounded-md text-base font-medium`}>
                                    Contact
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className='border flex items-center border-gray-300 rounded-md px-2 focus:ring-[#FFA500]'>
                                    <input
                                        type="text"
                                        className="appearance-none bg-transparent border-none px-0 outline-none focus:outline-none focus:ring-0"
                                        placeholder="Search products..."
                                    />
                                    <button><IoMdSearch fill='orange' className='h-5 w-5' /> </button>
                                </div>
                            </div>
                            <Link href="/cart" className="ml-4">
                                <FaCartShopping fill='orange' className="w-10 h-10" />
                            </Link>

                            
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="hover:text-[#FFA500] block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="hover:text-[#FFA500] block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="hover:text-[#FFA500] block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link href="/" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </Link>
                        <Link href="/products" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                            Products
                        </Link>
                        <Link href="/about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                            About Us
                        </Link>
                        <Link href="/contact" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
