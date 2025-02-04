import React, { useState } from 'react';
import BackgroundImage from '../../assets/homeBg.jpg';

import NavBar from '../../components/Navbar/Navbar';

import Logo from '../../assets/logo.svg';

import Icon1 from '../../assets/icon1.svg';
import Icon2 from '../../assets/icon2.svg';
import Icon3 from '../../assets/icon3.svg';

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

import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Twitter from '../../assets/twitter.svg';
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

    const { dots, buttonLoading, handleJoinCommunity } = useUser();

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
            {/* Navbar */}
            <div className="w-full h-[12vh] fixed top-0 flex justify-center items-center z-50 bg-backgroundColor">
                <NavBar />
            </div>

            {/* First Section */}
            <div
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                className="w-[95%] h-[80%] flex justify-center items-center relative mx-auto mt-[25%] lg:mt-[7%] rounded-md"
            >
                <div className="w-[85%] h-full flex flex-col justify-center items-start gap-6">
                    <h1 className="text-5xl lg:text-6xl font-bold text-white leading-snug">
                        <span className="text-fourColor">Impound</span> Insurance, Quicker & Better with Dash
                    </h1>
                    <p className="text-xl font-semibold text-gray-200">
                        Insurance has never been easier with Dash - quicker policies at competitive prices.
                    </p>
                    <button className="w-40 h-12 rounded-lg bg-thirdColor hover:bg-fourColor transition-all duration-300 ease-in-out font-semibold text-white">
                        Impound Quote
                    </button>
                </div>
            </div>

            {/* Second Section */}
            <div className="w-[95%] h-[70%] lg:h-[30%] border border-btnBorder my-5 lg:my-10 flex flex-col lg:flex-row justify-center items-center lg:px-5 mx-auto rounded-md bg-white">
                <div className='w-[90%] lg:w-[30%] h-full flex justify-center items-center'>
                    <div className='w-[20%] lg:w-[30%] h-full flex justify-center items-center'>
                        <img src={Icon1} alt="icon" width={60} />
                    </div>
                    <div className='w-[80%] lg:w-[70%] h-full flex flex-col justify-center items-start'>
                        <h1 className='text-firstColor font-bold'>
                            IMPOUND SPECIALIST INSURANCE
                        </h1>
                        <p>
                            Leading impound specialist. We quote online and over the phone.
                        </p>
                    </div>
                </div>
                <div className='w-[90%] lg:w-[30%] h-full flex justify-center items-center'>
                    <div className='w-[20%] lg:w-[30%] h-full flex justify-center items-center'>
                        <img src={Icon2} alt="icon" width={60} />
                    </div>
                    <div className='w-[80%] lg:w-[70%] h-full flex flex-col justify-center items-start'>
                        <h1 className='text-firstColor font-bold'>
                            FLEXIBLE POLICIES
                        </h1>
                        <p>
                            We cover most scenrarios, licences and allow named drivers if suitable
                        </p>
                    </div>
                </div>
                <div className='w-[90%] lg:w-[30%] h-full flex justify-center items-center'>
                    <div className='w-[20%] lg:w-[30%] h-full flex justify-center items-center'>
                        <img src={Icon3} alt="icon" width={60} />
                    </div>
                    <div className='w-[80%] lg:w-[70%] h-full flex flex-col justify-center items-start'>
                        <h1 className='text-firstColor font-bold'>
                            INSTANT DOCUMENTS
                        </h1>
                        <p>
                            Fast and secure documents, emailed or accesses through your portal
                        </p>
                    </div>
                </div>
            </div>

            {/* Third Section  */}
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

            {/* Fourth Section */}
            <div className="w-[90%] h-[140%] lg:h-[80%] flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3 gap-4 mx-auto pb-24">
                {/* Row 1 */}
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

                {/* Row 2 */}
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

                {/* Row 3 */}
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

            {/* Fifth Sections */}
            <div
                className='w-[95%] h-[280vh] md:h-[140vh] lg:h-[160vh] flex justify-center items-center rounded-md bg-gradient-radial mx-auto'>
                <div className='w-[85%] h-full flex flex-col lg:flex-row justify-center items-center lg:py-20'>
                    <div className='w-full lg:w-1/2 h-[80%] lg:h-full flex flex-col justify-center items-start lg:pr-20'>
                        <h1 className='text-white text-4xl font-bold leading-normal'>
                            Fast and Affordable <span className='text-fourColor'>Impound</span> Insurance to Retrieve Your Vehicle
                        </h1>
                        <div className="font-semibold py-5 space-y-4">
                            <p className='text-white'>Are you in a hurry to release your impounded vehicle?</p>

                            <p className='text-white'>Get fast and affordable impound insurance to retrieve your vehicle quickly with Dash.</p>

                            <p className='text-white'>
                                When your vehicle gets impounded, it's crucial to have proof of insurance for the next 30 days.
                                Unfortunately, most regular insurance policies don't cover impounded vehicles.
                                That's where our specialised impound insurance comes in.
                            </p>

                            <h2 className="text-white text-lg font-bold">Here's why our impound insurance is the perfect solution for you:</h2>

                            <ul className="list-disc list-inside space-y-2">
                                <li className='text-white'><span className="font-bold text-white">Swift Release:</span> We understand the urgency of getting your vehicle back on the road. Our impound insurance ensures a speedy release, minimising any delays and inconveniences.</li>
                                <li className='text-white'><span className="font-bold text-white">Cost-Effective:</span> With daily storage fees and recovery charges soon adding up, our impound insurance offers an affordable option to retrieve your vehicle promptly.</li>
                                <li className='text-white'><span className="font-bold text-white">Easy Process:</span> We've simplified the application process to make obtaining impound insurance hassle-free. Our streamlined approach allows you to focus on the important task of retrieving your impounded vehicle.</li>
                            </ul>

                            <p className='text-white'>
                                At Dash, we specialise in providing impound insurance that caters to your needs.
                                Don't let the impound process hold you back any longer.
                                Regain control and get back on the road quickly with our fast and reliable impound insurance.
                            </p>

                            <p className='text-white'>
                                <span className="font-bold text-white">Contact us now</span> to get your impound insurance and expedite the release of your vehicle.
                                With Dash, you can trust that we'll help you navigate the impound process smoothly and efficiently.
                            </p>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 h-[20%] lg:h-full flex flex-col justify-start items-center'>
                        <div className='lg:sticky top-[15%] w-full h-[90%] lg:h-[60%] bg-black bg-opacity-40 rounded-md flex flex-col items-start justify-center p-2 lg:p-10 gap-10'>
                            <h1 className='text-white text-2xl lg:text-4xl font-bold'>
                                <span className='text-thirdColor'>Impound</span> Insurance.
                                It's <span className='text-thirdColor'>quick</span> and <span className='text-thirdColor'>easy</span> to get insured.
                            </h1>
                            <div className='w-full h-[36%] flex flex-col justify-center items-start gap-5 lg:gap-2'>
                                {/* Step 1 */}
                                <div className='w-full h-[33.33%] flex flex-col justify-start items-center lg:gap-0 gap-2'>
                                    <div className='w-full h-[90%] flex justify-start items-center gap-3'>
                                        <div className='flex justify-center items-center w-8 h-8 bg-secondColor rounded-full text-white font-bold text-md'>
                                            1
                                        </div>
                                        <p className='text-white text-md font-semibold w-[80%]'>
                                            Click Get a quote below
                                        </p>
                                    </div>
                                    <hr className='w-full border border-gray-400 mx-auto' />
                                </div>
                                {/* Step 2 */}
                                <div className='w-full h-[33.33%] flex flex-col justify-start items-center lg:gap-0 gap-2'>
                                    <div className='w-full h-[90%] flex justify-start items-center gap-3'>
                                        <div className='flex justify-center items-center w-8 h-8 bg-secondColor rounded-full text-white font-bold text-md'>
                                            2
                                        </div>
                                        <p className='text-white text-md font-semibold w-[80%]'>
                                            Buy your compound policy online or refer to the team
                                        </p>
                                    </div>
                                    <hr className='w-full border border-gray-400 mx-auto' />
                                </div>
                                {/* Step 3 */}
                                <div className='w-full h-[33.33%] flex flex-col justify-start items-center lg:gap-0 gap-2'>
                                    <div className='w-full h-[90%] flex justify-start items-center gap-3'>
                                        <div className='flex justify-center items-center w-8 h-8 bg-secondColor rounded-full text-white font-bold text-md'>
                                            3
                                        </div>
                                        <p className='text-white text-md font-semibold w-[80%]'>
                                            User your impound insurance certificate to release your car
                                        </p>
                                    </div>
                                    <hr className='w-full border border-gray-400 mx-auto' />
                                </div>
                            </div>

                            <button
                                className='w-full h-10 bg-thirdColor hover:bg-fourColor transition-all duration-300 ease-out font-bold rounded-md text-white'
                            >
                                Impound Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sixth Section */}
            <div className='w-full h-[230vh] md:h-[120vh]'>
                <div className='w-full h-[10%] md:h-[20%] flex flex-col justify-center items-center'>
                    <p className='text-firstColor font-bold'>
                        OUR CUSTOMERS
                    </p>
                    <h1 className='text-6xl font-bold text-gray-700'>
                        Reviews
                    </h1>
                </div>
                {/* Carousel */}
                <div className='w-full h-[80%] lg:h-[60%] md:h-[60%]'>
                    <div className="relative w-[75%] h-full mx-auto">
                        <div className="relative w-full h-full flex items-center overflow-hidden">
                            {/* Sliding container */}
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

                        {/* Navigation Buttons */}
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
            </div>

            {/* Seventh Section */}
            <div className='w-[85%] h-[150vh] md:h-[60vh] mx-auto flex flex-col md:flex-row justify-center items-center md:gap-0 gap-3'>
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
            </div>

            {/* Eigth Section */}

            <div className='w-[85%] h-[15vh] md:h-[20vh] flex flex-col  md:flex-row justify-between items-center mx-auto'>
                <div className='w-full md:w-1/2 h-full flex justify-start items-center gap-2'>
                    <div className='w-full h-full flex justify-between md:justify-start items-center gap-1'>
                        <div
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className='w-[20%] h-full flex justify-start items-center hover:cursor-pointer'
                        >
                            <img src={Logo} alt="logo" width={100} />
                        </div>
                        <h1 className='w-[80%] md:w-[50%] justify-start'>© 2024 Dash. All Rights reserved</h1>
                    </div>
                </div>
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
            </div>

            {/* Ninth Section */}
            <div className='w-[85%] h-[50vh] md:h-[20vh] flex flex-col justify-center items-center mx-auto pb-10'>
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
                <p className='text-center text-sm md:text-md'>
                    Dash is a trading name of Dash Cover Ltd who are authorised and regulated by the Financial Conduct Authority. Registered in England & Wales at St Davids Court, Union Street, Wolverhampton, United Kingdom, WV1 3JE. Registered Number: 11534693. Registered with the information commissioner's office (ICO) ZA538428.
                </p>
            </div>
        </div>

    )
}

export default HomePage;
