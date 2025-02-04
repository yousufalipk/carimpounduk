import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import OpenMenu from "../../assets/OpenMenu.svg";

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    return (
        <div className="relative w-[80%] h-[12vh] flex justify-center items-center z-50">
            {/* Background Menu (Behind Navbar) */}
            <div
                className={`fixed top-0 left-0 w-full h-[70vh] bg-backgroundColor flex flex-col items-center justify-center transition-all duration-500 ease-in-out z-0
        ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
            >
                <ul className="w-full flex flex-col items-center gap-6">
                    <li className="hover:text-firstColor font-semibold">Impound</li>
                    <li className="hover:text-firstColor font-semibold">Temporary</li>
                    <li className="hover:text-firstColor font-semibold">Help</li>
                    <li className="hover:text-firstColor font-semibold">About</li>
                    <li className="hover:text-firstColor font-semibold">Contact</li>
                </ul>
            </div>

            {/* Navbar (Always on Top) */}
            <div className="absolute top-0 left-0 w-full h-[12vh] flex justify-center items-center z-10 bg-backgroundColor">
                {/* Logo */}
                <div
                    onClick={() => navigate("/")}
                    className="w-[80%] lg:w-[20%] h-full flex justify-start items-center hover:cursor-pointer"
                >
                    <img src={Logo} alt="website_logo" width={150} />
                </div>

                {/* Mobile Menu Open Button */}
                <div
                    onClick={() => toggleMenu()}
                    className="w-[20%] h-full flex lg:hidden justify-end items-center rounded-full"
                >
                    <div
                        className={`${menuOpen ? "bg-white rounded-full w-16 h-16 flex justify-center items-center" : ""
                            } transition-all duration-300 ease-in-out`}
                    >
                        <img src={OpenMenu} alt="openMenu" width={25} />
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="w-[50%] h-full hidden lg:flex justify-center items-center">
                    <ul className="w-full h-full flex justify-center items-center gap-10">
                        <li className="hover:text-firstColor font-semibold">Impound</li>
                        <li className="hover:text-firstColor font-semibold">Temporary</li>
                        <li className="hover:text-firstColor font-semibold">Help</li>
                        <li className="hover:text-firstColor font-semibold">About</li>
                        <li className="hover:text-firstColor font-semibold">Contact</li>
                    </ul>
                </div>

                {/* Desktop Buttons */}
                <div className="w-[30%] h-full hidden lg:flex justify-end items-center gap-3">
                    <button className="w-40 h-12 rounded-lg border-2 border-btnBorder hover:border-firstColor transition-all duration-300 ease-in-out font-semibold">
                        Login
                    </button>
                    <button className="w-40 h-12 rounded-lg bg-firstColor hover:bg-secondColor transition-all duration-300 ease-in-out font-semibold text-white">
                        Impound Quote
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
