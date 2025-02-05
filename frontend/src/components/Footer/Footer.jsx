import React from 'react';

import Logo from '../../assets/logo.png';

import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Twitter from '../../assets/twitter.svg';

const Footer = () => {


    const socialLinks = [
        {
            image: Facebook,
            link: 'https://www.facebook.com'
        },
        {
            image: Instagram,
            link: 'https://www.instagram.com'
        },
        {
            image: Twitter,
            link: 'https://www.twitter.com'
        },
    ]

    return (
        <>
            <div className='w-[85%] h-[10vh] md:h-[20vh] flex justify-between items-center mx-auto'>
                <div className='w-[20%] h-full flex justify-start items-center gap-2'>
                    <img src={Logo} alt="logo" width={100} />
                </div>
                <h1 className='w-[80%] justify-end text-end md:text-md text-xs'>© 2024 Impound Insurance Chambers. All Rights reserved</h1>
                {/*
                <div className='w-1/2 h-full flex justify-end items-center gap-2'>
                    {socialLinks.map((social, index) => {
                        return (
                            <div
                                onClick={() => {
                                    window.open(`${social.link}`, "_blank")
                                }}
                                key={index} className='h-12 w-12 rounded-full bg-white border border-btnBorder flex justify-center items-center hover:cursor-pointer transition-all duration-300 ease-out'
                            >
                                <img
                                    src={social.image}
                                    alt="Twitter Icon"
                                    width={25}
                                    className="w-6 h-6 filter brightness-75 invert-[60%] hover:scale-125 transition-all duration-300 ease-out"
                                />
                            </div>
                        )
                    })}
                </div>
                */}
            </div>

            {/* Ninth Section */}
            <div className='w-[85%] h-[40vh] md:h-[20vh] flex flex-col justify-center items-center mx-auto pb-10'>
                {/*
                <ul className='w-full h-1/2 flex justify-center items-center gap-5'>
                    <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out text-center'>
                        Privacy Policy
                    </li>
                    <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out text-center'>
                        Cookies
                    </li>
                    <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out text-center'>
                        Terms of Business
                    </li>
                </ul>
                */}
                <p className='text-center text-sm md:text-md'>
                    Impound Insurance Chambers offers quick and affordable impound insurance that meets the 30-day coverage requirement for vehicle release. Our streamlined process helps you avoid high storage fees and lengthy delays, ensuring you get back on the road fast. With our specialized, budget-friendly solutions, navigating the impound process is hassle-free and efficient.
                </p>
            </div>
        </>
    )
}

export default Footer;
