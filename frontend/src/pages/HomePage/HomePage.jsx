import React, { useState } from 'react';
import BackgroundImage from '../../assets/background.jpg';

import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import Icon1 from '../../assets/icon1.svg';
import Icon2 from '../../assets/icon2.svg';
import Icon3 from '../../assets/icon3.svg';

import Whatsapp from '../../assets/whatsapp.svg';

import Icon4 from '../../assets/icon4.svg';
import Icon5 from '../../assets/icon5.svg';
import Icon6 from '../../assets/icon6.svg';
import Icon7 from '../../assets/icon7.svg';
import Icon8 from '../../assets/icon8.svg';
import Icon9 from '../../assets/icon9.svg';

import GoogleIcon from '../../assets/google.png';

import { motion } from "framer-motion";

import LeftArrow from '../../assets/left.svg';
import RightArrow from '../../assets/right.svg';

import Email from '../../assets/email.png';

import { toast } from 'react-toastify';

import { useUser } from '../../context';

import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    const reviews = [
        {
            id: 1,
            image: "https://via.placeholder.com/150",
            name: "John Doe",
            message: "The service was exceptional. The staff was friendly and professional. Highly recommend!",
            star: 5,
            date: "2024-02-01",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150",
            name: "Jane Smith",
            message: "Had an amazing experience! Everything was well-organized, and the staff was very helpful.",
            star: 4,
            date: "2024-01-28",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/150",
            name: "Michael Johnson",
            message: "Absolutely loved the experience. The quality of service exceeded my expectations.",
            star: 5,
            date: "2024-01-20",
        },
        {
            id: 4,
            image: "https://via.placeholder.com/150",
            name: "Emily Davis",
            message: "It was good overall, but there are areas that could be improved. Customer service was decent.",
            star: 3,
            date: "2024-01-15",
        },
        {
            id: 5,
            image: "https://via.placeholder.com/150",
            name: "Robert Wilson",
            message: "Very friendly and professional staff. They made sure all my concerns were addressed properly.",
            star: 4,
            date: "2024-01-10",
        },
        {
            id: 6,
            image: "https://via.placeholder.com/150",
            name: "Sophia Brown",
            message: "Excellent quality and service! Everything was handled efficiently and on time. Great experience.",
            star: 5,
            date: "2024-01-05",
        },
    ];

    const { dots, buttonLoading, handleJoinCommunity, whatsappApi } = useUser();

    const [email, setEmail] = useState("");

    const [page, setPage] = useState(0);

    const reviewsPerPage = 3;

    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async () => {
        if (!email) {
            toast.error("Email is required!");
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address!");
            return;
        }

        try {
            const res = await handleJoinCommunity(email);
            if (res.success) {
                toast.success(res.mess);
                setEmail("");
            } else {
                toast.error(res.mess);
            }
        } catch (error) {
            console.log('Error', error);
            toast.error("Internal Server Error");
        }
    };

    const nextPage = () => {
        setPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <div className="w-full h-screen overflow-y-scroll bg-backgroundColor">
            {/* Whatsapp Button */}
            <div
                style={{
                    position: 'absolute',
                    zIndex: 50000
                }}
                onClick={() => {
                    window.open(whatsappApi, "_blank");
                }}
                className='animate-fadeInOutBounce hover:animate-none hover:cursor-pointer fixed rounded-full bottom-5 right-5 bg-[#25D366] p-3 flex justify-center items-center transform transition-transform duration-200 hover:translate-y-[-4px]'>
                <img src={Whatsapp} alt="whatsapp" className='invert' width={25} />
            </div>

            {/* Navbar */}
            <div
                style={{
                    position: 'fixed',
                    zIndex: 500000
                }}
                className="w-full h-[12vh] fixed top-0 flex justify-center items-center bg-backgroundColor"
            >
                <NavBar />
            </div>

            {/* First Section */}
            <div
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                id='home'
                className="relative w-[95%] h-[80%] flex justify-center items-center mx-auto mt-[25%] lg:mt-[7%] rounded-md"
            >
                <div className='bg-black bg-opacity-40 w-full h-full flex justify-center items-center absolute z-50 rounded-md'>
                    <div className="w-[85%] h-full flex flex-col justify-center items-start gap-6">
                        <h1 className="text-2xl lg:text-6xl font-bold text-white leading-snug">
                            Faster, Smarter <span className="text-[#25d366]">Impound</span> Insurance with Impound Insurance Chambers
                        </h1>
                        <p className="text-lg font-semibold text-gray-200">
                            Getting insured is simple with us – swift policies at affordable rates.
                        </p>
                        <button
                            onClick={() => {
                                navigate('/impound-insurance');
                            }}
                            className="py-3 px-5 rounded-lg bg-thirdColor hover:bg-fourColor transition-all duration-300 ease-in-out font-semibold text-white">
                            Get Your Impound Quote
                        </button>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div
                id='services'
                className="w-[95%] h-[120vh] md:h-[30%] border border-btnBorder my-5 lg:my-10 flex flex-col lg:flex-row justify-center items-center lg:px-5 mx-auto rounded-md bg-backgroundColor">
                <div className='w-[90%] lg:w-[30%] h-full flex justify-center items-center'>
                    <div className='w-[20%] lg:w-[30%] h-full flex justify-center items-center'>
                        <img src={Icon1} alt="icon" width={80} />
                    </div>
                    <div className='w-[80%] lg:w-[70%] h-full flex flex-col justify-center items-start'>
                        <h1 className='text-firstColor font-bold capitalize'>
                            Specialists in Impound Insurance
                        </h1>
                        <p>
                            As leading experts in impound insurance, we provide tailored policies to meet diverse needs. Whether you have a standard car, a commercial van, or hold a provisional license, we have you covered.
                        </p>
                    </div>
                </div>
                <div className='w-[90%] lg:w-[30%] h-full flex justify-center items-center'>
                    <div className='w-[20%] lg:w-[30%] h-full flex justify-center items-center'>
                        <img src={Icon2} alt="icon" width={80} />
                    </div>
                    <div className='w-[80%] lg:w-[70%] h-full flex flex-col justify-center items-start'>
                        <h1 className='text-firstColor font-bold capitalize'>
                            Flexible Coverage Options
                        </h1>
                        <p>
                            We understand that every situation is unique. Our flexible policies accommodate various scenarios and license types, ensuring you get the coverage that suits your specific requirements.
                        </p>
                    </div>
                </div>
                <div className='w-[90%] lg:w-[30%] h-full flex justify-center items-center'>
                    <div className='w-[20%] lg:w-[30%] h-full flex justify-center items-center'>
                        <img src={Icon3} alt="icon" width={80} />
                    </div>
                    <div className='w-[80%] lg:w-[70%] h-full flex flex-col justify-center items-start'>
                        <h1 className='text-firstColor font-bold capitalize'>
                            Instant Documentation
                        </h1>
                        <p>
                            Time is of the essence when retrieving an impounded vehicle. Our efficient process ensures that your insurance documents are delivered promptly, allowing for a quick and hassle-free release.
                        </p>
                    </div>
                </div>
            </div>

            {/* Third Section  */}
            {/*
            <div className='w-[95%] mx-auto lg:w-full h-[35%] lg:h-[50%] flex flex-col justify-center items-center gap-5 lg:gap-10'>
                <p className='w-full text-start lg:text-center text-md text-firstColor'>
                    SELECT THE RIGHT COVER FOR YOU
                </p>
                <h1 className='text-start lg:text-center text-3xl lg:text-6xl text-black w-full lg:w-[60%] font-bold'>
                    Impound Insurance or Temporary Insurance?
                </h1>
                <div className='w-full lg:w-[50%] h-[12%] flex justify-center items-center'>
                    <button
                        className='w-1/2 h-full flex justify-center items-center font-bold text-white bg-firstColor hover:bg-secondColor duration-300 ease-in-out rounded-l-md'
                    >
                        Impound
                    </button>
                    <button
                        className='w-1/2 h-full flex justify-center items-center font-bold text-firstColor hover:border hover:border-firstColor  duration-300 ease-in-out rounded-r-md'
                    >
                        Temporary
                    </button>
                </div>
            </div>

            <div className="w-[90%] h-[140%] lg:h-[80%] flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3 gap-4 mx-auto pb-24">
            <div className="rounded-md bg-white border border-btnBorder hover:border-firstColor hover:bg-firstColor hover:bg-opacity-30 p-5 flex justify-center items-center hover:cursor-pointer transition-all duration-300 ease-out">
                <div className='w-[25%] h-full flex justify-center items-center'>
                    <img src={Icon4} alt="icon" width={65} />
                </div>
                <div className='w-[75%] h-full flex flex-col justify-center items-start'>
                    <h1 className='text-firstColor font-bold'>
                        IMPOUND INSURANCE
                    </h1>
                    <p>
                        Impounded car insurance. Standard 30 day impound policies.
                    </p>
                </div>
            </div>
            <div className="rounded-md bg-white border border-btnBorder hover:border-firstColor hover:bg-firstColor hover:bg-opacity-30 p-5 flex justify-center items-center hover:cursor-pointer transition-all duration-300 ease-out">
                <div className='w-[25%] h-full flex justify-center items-center'>
                    <img src={Icon5} alt="icon" width={65} />
                </div>
                <div className='w-[75%] h-full flex flex-col justify-center items-start'>
                    <h1 className='text-firstColor font-bold'>
                        IMPOUNDED VAN INSURANCE
                    </h1>
                    <p>
                        Impound insurance for commercial vehicles.
                    </p>
                </div>
            </div>

            <div className="rounded-md bg-white border border-btnBorder hover:border-firstColor hover:bg-firstColor hover:bg-opacity-30 p-5 flex justify-center items-center hover:cursor-pointer transition-all duration-300 ease-out">
                <div className='w-[25%] h-full flex justify-center items-center'>
                    <img src={Icon6} alt="icon" width={65} />
                </div>
                <div className='w-[75%] h-full flex flex-col justify-center items-start'>
                    <h1 className='text-firstColor font-bold'>
                        PROVISIONAL IMPOUND INSURANCE
                    </h1>
                    <p>
                        Impound insurance for provisional holders.
                    </p>
                </div>
            </div>
            <div className="rounded-md bg-white border border-btnBorder hover:border-firstColor hover:bg-firstColor hover:bg-opacity-30 p-5 flex justify-center items-center hover:cursor-pointer transition-all duration-300 ease-out">
                <div className='w-[25%] h-full flex justify-center items-center'>
                    <img src={Icon7} alt="icon" width={65} />
                </div>
                <div className='w-[75%] h-full flex flex-col justify-center items-start'>
                    <h1 className='text-firstColor font-bold'>
                        UNDER 21 IMPOUND INSURANCE
                    </h1>
                    <p>
                        Impound insurance for those fortunate to be under 21 years old.
                    </p>
                </div>
            </div>

            <div className="rounded-md bg-white border border-btnBorder hover:border-firstColor hover:bg-firstColor hover:bg-opacity-30 p-5 flex justify-center items-center hover:cursor-pointer transition-all duration-300 ease-out">
                <div className='w-[25%] h-full flex justify-center items-center'>
                    <img src={Icon8} alt="icon" width={65} />
                </div>
                <div className='w-[75%] h-full flex flex-col justify-center items-start'>
                    <h1 className='text-firstColor font-bold'>
                        NON-UK LICENSE IMPOUND ONLY INSURANCE
                    </h1>
                    <p>
                        All licenses covered. Different schemes avaliable
                    </p>
                </div>
            </div>
            <div className="rounded-md bg-white border border-btnBorder hover:border-firstColor hover:bg-firstColor hover:bg-opacity-30 p-5 flex justify-center items-center hover:cursor-pointer transition-all duration-300 ease-out">
                <div className='w-[25%] h-full flex justify-center items-center'>
                    <img src={Icon9} alt="icon" width={65} />
                </div>
                <div className='w-[75%] h-full flex flex-col justify-center items-start'>
                    <h1 className='text-firstColor font-bold'>
                        NAMED DRIVER IMPOUND INSURANCE
                    </h1>
                    <p>
                        Nominated driver impound insurance. Bespoke schmes for those requiring a named driver.
                    </p>
                </div>
            </div>
        </div>
        */}
            <div
                id='about'
                className='w-[95%] h-[340vh] md:h-[140vh] lg:h-[160vh] flex justify-center items-center rounded-md bg-gradient-radial mx-auto'>
                <div className='w-[90%] md:w-[85%] h-full flex flex-col lg:flex-row justify-center items-center lg:py-20'>
                    <div className='w-full lg:w-1/2 h-[80%] lg:h-full flex flex-col justify-center items-start lg:pr-20'>
                        <h1 className='text-white text-4xl font-bold leading-normal'>
                            Quick and Budget-Friendly <span className='text-[#25d366]'>Impound</span> Insurance to Release Your Vehicle
                        </h1>
                        <div className="font-semibold py-5 space-y-4">
                            <p className='text-white'>Need to recover your impounded vehicle without delay?</p>

                            <p className='text-white'>Secure fast and cost-effective impound insurance with Impound Insurance Chambers to get your vehicle back quickly.</p>

                            <p className='text-white'>
                                When your vehicle is impounded, you must provide proof of insurance covering the next 30 days. Unfortunately, standard insurance policies usually don’t cover impounded vehicles. That’s where our specialised impound insurance makes all the difference.
                            </p>

                            <h2 className="text-white text-lg font-bold">Why Choose Our Impound Insurance?</h2>

                            <ul className="list-disc list-inside space-y-2">
                                <li className='text-white'><span className="font-bold text-white">Quick Vehicle Release:</span>We know time is critical when your vehicle is impounded. Our insurance is designed to speed up the release process, reducing delays and hassle.</li>
                                <li className='text-white'><span className="font-bold text-white">Affordable Coverage:</span>Daily storage and recovery fees can add up fast. Our budget-friendly impound insurance helps you save money while ensuring a prompt recovery.</li>
                                <li className='text-white'><span className="font-bold text-white">Simple Process:</span>We’ve streamlined the application process, making it easy and stress-free to get the insurance you need. No complicated steps—just fast, straightforward support.</li>
                            </ul>

                            <p className='text-white'>
                                At Impound Insurance Chambers, we specialise in impound insurance tailored to your situation. Don’t let an impound hold you back—take control and get back on the road with our reliable, fast-acting insurance solutions.
                            </p>

                            <p className='text-white'>
                                <span className="font-bold text-white">Get in touch</span> with us today to secure your impound insurance and speed up the release of your vehicle. With Impound Insurance Chambers, we’ll help you navigate the impound process smoothly and efficiently.
                            </p>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 h-[30%] lg:h-full flex flex-col justify-start items-center'>
                        <div className='lg:sticky top-[15%] w-full h-[90%] lg:h-[60%] bg-black bg-opacity-40 rounded-md flex flex-col items-start justify-center p-2 lg:p-10 gap-10'>
                            <h1 className='text-white text-2xl lg:text-4xl font-bold'>
                                Hassle-Free <span className='text-thirdColor'>Impound</span> Insurance.
                                Getting insured is <span className='text-thirdColor'>quick</span> and <span className='text-thirdColor'>simple</span>.
                            </h1>
                            <div className='w-full h-[50%] flex flex-col justify-center items-start gap-5 lg:gap-2'>
                                {/* Step 1 */}
                                <div className='w-full h-[33.33%] flex flex-col justify-start items-center lg:gap-0 gap-3'>
                                    <div className='w-full h-[90%] flex justify-start items-center gap-3'>
                                        <div className='flex justify-center items-center w-8 h-8 bg-secondColor rounded-full text-white font-bold text-md'>
                                            1
                                        </div>
                                        <p className='text-white text-md font-semibold w-[80%]'>
                                            Start by pressing the button below.
                                        </p>
                                    </div>
                                    <hr className='w-full border border-gray-400 mx-auto' />
                                </div>
                                {/* Step 2 */}
                                <div className='w-full h-[33.33%] flex flex-col justify-start items-center lg:gap-0 gap-3'>
                                    <div className='w-full h-[90%] flex justify-start items-center gap-3'>
                                        <div className='flex justify-center items-center w-8 h-8 bg-secondColor rounded-full text-white font-bold text-md'>
                                            2
                                        </div>
                                        <p className='text-white text-md font-semibold w-[80%]'>
                                            Provide your details in the form that opens.
                                        </p>
                                    </div>
                                    <hr className='w-full border border-gray-400 mx-auto' />
                                </div>
                                {/* Step 3 */}
                                <div className='w-full h-[33.33%] flex flex-col justify-start items-center lg:gap-0 gap-3'>
                                    <div className='w-full h-[90%] flex justify-start items-center gap-3'>
                                        <div className='flex justify-center items-center w-8 h-8 bg-secondColor rounded-full text-white font-bold text-md'>
                                            3
                                        </div>
                                        <p className='text-white text-md font-semibold w-[80%]'>
                                            One of our representatives will contact you to guide you through the process.
                                        </p>
                                    </div>
                                    <hr className='w-full border border-gray-400 mx-auto' />
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    navigate('/impound-insurance');
                                }}
                                className='w-full h-10 bg-thirdColor hover:bg-fourColor transition-all duration-300 ease-out font-bold rounded-md text-white'
                            >
                                Impound Quote
                            </button>
                        </div >
                    </div >
                </div >
            </div >

            {/* Sixth Section 
            <div div className='w-full h-[230vh] md:h-[120vh]' >
                <div className='w-full h-[10%] md:h-[20%] flex flex-col justify-center items-center'>
                    <p className='text-firstColor font-bold'>
                        OUR CUSTOMERS
                    </p>
                    <h1 className='text-6xl font-bold text-gray-700'>
                        Reviews
                    </h1>
                </div>
                <div className='w-full h-[80%] lg:h-[60%] md:h-[60%]'>
                    <div className="relative w-[75%] h-full mx-auto">
                        <div className="relative w-full h-full flex items-center overflow-hidden">
                            <motion.div
                                className="flex w-full h-full"
                                animate={{ x: `-${page * 100}%` }}
                                transition={{ type: "tween", duration: 0.5 }}
                            >
                                {[...Array(totalPages)].map((_, index) => (
                                    <div key={index} className="flex flex-col md:flex-row min-w-full h-full gap-5">
                                        {reviews
                                            .slice(index * reviewsPerPage, (index + 1) * reviewsPerPage)
                                            .map((review) => (
                                                <div
                                                    key={review.id}
                                                    className="bg-white rounded-md border border-btnBorder p-4 flex flex-col items-center justify-center w-full md:w-1/3 h-full gap-5"
                                                >
                                                    <img
                                                        src={`https://picsum.photos/200/300?random=${review.id}`}
                                                        alt={review.name}
                                                        className="w-10 h-10 rounded-full mb-2"
                                                    />
                                                    <div className='w-full flex flex-col justify-center items-center'>
                                                        <h3 className="font-semibold text-gray-700">{review.name}</h3>
                                                        <h3 className="font-semibold">{review.date}</h3>
                                                    </div>
                                                    <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                                                    <p className="text-md text-gray-600 text-center">
                                                        {review.message}
                                                    </p>
                                                    <div className='w-full flex justify-center items-center gap-2'>
                                                        <p>POSTED ON</p>
                                                        <img src={GoogleIcon} alt="google_icon" width={25} />
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <button
                            onClick={prevPage}
                            className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-white border border-btnBorder h-10 w-10 text-white p-2 rounded-full hover:bg-backgroundColor transition-all duration-300 ease-out"
                        >
                            <img src={LeftArrow} alt="leftArrow" width={50} />
                        </button>
                        <button
                            onClick={nextPage}
                            className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white border border-btnBorder h-10 w-10 text-white p-2 rounded-full hover:bg-backgroundColor transition-all duration-300 ease-out"
                        >
                            <img src={RightArrow} alt="rightArrow" width={50} />
                        </button>
                    </div>
                </div>
                <div className='w-full h-[10%] md:h-[20%] flex justify-center items-center gap-2'>
                    <img src={GoogleIcon} alt="google_icon" width={35} />
                    <p className='text-gray-700 font-semibold'>5.0 FROM OVER 780 REVIEWS</p>
                </div>
            </div >

            */}

            {/* Seventh Section
            <div div className='w-[85%] h-[150vh] md:h-[60vh] mx-auto flex flex-col md:flex-row justify-center items-center md:gap-0 gap-3' >
                <div className='w-full md:w-[23.33%] h-full flex flex-col jus-startnter i-start gap-3'>
                    <h1 className='text-gray-800 font-bold'>
                        Impound Insurance
                    </h1>
                    <ul className='flex flex-col justify-start items-start gap-3'>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>Impound Insurance</li>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>Impounded Van Insurance</li>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>Under 21 Impound Insurance</li>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>Provisional Impound Insurance</li>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>Non UK Licence Impound Insurance</li>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>Named driver Impound Insurance</li>
                    </ul>
                </div>
                <div className='w-full md:w-[23.33%] h-full flex flex-col justify-start items-start gap-3'>
                    <h1 className='text-gray-800 font-bold'>
                        Temporary Insurance
                    </h1>
                    <ul className='flex flex-col justify-start items-start gap-3'>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>Temporary Car Insurance</li>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>Temporary Van Insurance</li>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>Learner Driver Insurance</li>
                    </ul>
                </div>
                <div className='w-full md:w-[23.33%] h-full flex flex-col justify-start items-start gap-3'>
                    <h1 className='text-gray-800 font-bold'>
                        Help
                    </h1>
                    <ul className='flex flex-col justify-start items-start gap-3'>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>Impound Portal</li>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>Help</li>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>About</li>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>Contact</li>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>Consumer Duty</li>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>Complaints Procedure</li>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>Terms of Business</li>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>DVLA Share Code</li>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>Financial Ombudsman</li>
                        <li className='hover:text-firstColor hover:cursor-pointer transition-all divide-purple-300 ease-out'>Financial Conduct Authority</li>
                    </ul>
                </div>
                <div className='w-full md:w-[30%] h-full flex flex-col justify-start items-start gap-3'>
                    <h1 className='text-gray-800 font-bold'>
                        Join Dash Community
                    </h1>
                    <div className="w-full h-12 flex items-center relative">
                        <img
                            src={Email}
                            alt="email"
                            width={20}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 grayscale"
                        />
                        <input
                            type="text"
                            placeholder="Enter Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-12 pl-12 rounded-md border border-btnBorder focus:outline-none focus:ring-0 focus:border-2"
                        />
                    </div>
                    <button
                        onClick={() => {
                            handleSubmit()
                        }}
                        className='h-10 w-[33%] rounded-md bg-firstColor hover:bg-secondColor transition-all divide-purple-300 ease-out text-white font-bold'
                    >
                        {
                            buttonLoading ? (
                                <span className="flex justify-center items-center text-5xl font-bold w-full">
                                    <p className="absolute -mt-6">
                                        {dots}
                                    </p>
                                </span>
                            ) : (
                                <>
                                    Join!
                                </>
                            )
                        }
                    </button>
                </div>
            </div >

            */}

            {/* Footer  */}
            <div div className='w-[85%] h-[15vh] md:h-[20vh] mx-auto' >
                <Footer />
            </div >

        </div >

    )
}

export default HomePage;
