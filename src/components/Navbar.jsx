import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="bg-green-950 text-white p-3">
            <div className="container mx-auto flex justify-around items-center">
                {/* Logo or Brand Name */}
                <div className="text-xl font-bold">OnePoint</div>

                {/* Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden block text-white focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>

                {/* Links */}
                <ul
                    className={`lg:flex flex-col lg:flex-row lg:gap-28 items-center lg:static absolute bg-green-950 w-full lg:w-auto left-0 ${isOpen ? 'top-12' : 'top-[-1000px]'
                        } transition-all duration-300 ease-in-out`}
                >
                    <li className="p-3 lg:p-0 cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="p-3 lg:p-0 cursor-pointer">
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li className="p-3 lg:p-0 cursor-pointer">
                        <Link to="/about">About</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar
