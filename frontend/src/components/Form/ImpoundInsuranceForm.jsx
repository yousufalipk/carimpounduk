import React, { useState } from "react";

import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import SuccessTick from '../../assets/tick.gif';

import { toast } from 'react-toastify';

import axios from 'axios';

const InsuranceForm = () => {
    const apiUrl = process.env.REACT_APP_URL;

    const [formData, setFormData] = useState({
        mobileNumber: "",
        email: "",
        vehicleName: "",
        vehicleRegistrationNumber: "",
        vehiclePrice: "",
        insuranceDays: "30",
        insuranceStart: "immediate",
        insuranceStartDate: "",
        licenseType: "",
        title: "",
        firstName: "",
        surname: "",
        dateOfBirth: "",
        postalCode: "",
        address: "",
        licenseHeldDuration: "",
        contactMethods: {
            call: false,
            whatsapp: false,
            email: false,
        },
    });

    const [errors, setErrors] = useState({});

    const [showSuccessCard, setShowSuccessCard] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.mobileNumber.match(/^\+?\d{10,15}$/)) {
            newErrors.mobileNumber = "Invalid mobile number";
        }
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            newErrors.email = "Invalid email address";
        }
        if (!formData.vehicleName) {
            newErrors.vehicleName = "Vehicle name is required";
        }
        if (!formData.vehicleRegistrationNumber) {
            newErrors.vehicleRegistrationNumber = "Registration number is required";
        }
        if (!formData.vehiclePrice) {
            newErrors.vehiclePrice = "Vehicle price is required";
        }
        if (formData.insuranceStart === "date" && !formData.insuranceStartDate) {
            newErrors.insuranceStartDate = "Start date is required";
        }
        if (!formData.licenseType) {
            newErrors.licenseType = "License type is required";
        }
        if (!formData.title) {
            newErrors.title = "Title is required";
        }
        if (!formData.firstName) {
            newErrors.firstName = "First name is required";
        }
        if (!formData.surname) {
            newErrors.surname = "Surname is required";
        }
        if (!formData.dateOfBirth.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
            newErrors.dateOfBirth = "Invalid date format (dd/mm/yyyy)";
        }
        if (!formData.postalCode) {
            newErrors.postalCode = "Postal code is required";
        }
        if (!formData.address) {
            newErrors.address = "Address is required";
        }
        if (!formData.licenseHeldDuration) {
            newErrors.licenseHeldDuration = "License held duration is required";
        }
        if (
            !formData.contactMethods.call &&
            !formData.contactMethods.whatsapp &&
            !formData.contactMethods.email
        ) {
            newErrors.contactMethods = "At least one contact method is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData({
                ...formData,
                contactMethods: {
                    ...formData.contactMethods,
                    [name]: checked,
                },
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error('Invalid Format!');
            return
        };

        try {
            const response = await axios.post(`${apiUrl}/submit-form`, formData);

            if (response.data.status === 'success') {
                setShowSuccessCard(true);
                setTimeout(() => {
                    setShowSuccessCard(false);
                }, 5000);
                setFormData({
                    mobileNumber: "",
                    email: "",
                    vehicleName: "",
                    vehicleRegistrationNumber: "",
                    vehiclePrice: "",
                    insuranceDays: "30",
                    insuranceStart: "immediate",
                    insuranceStartDate: "",
                    licenseType: "",
                    title: "",
                    firstName: "",
                    surname: "",
                    dateOfBirth: "",
                    postalCode: "",
                    address: "",
                    licenseHeldDuration: "",
                    contactMethods: {
                        call: false,
                        whatsapp: false,
                        email: false,
                    },
                })
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    const generateDateOptions = () => {
        const dates = [];
        const today = new Date();
        for (let i = 0; i < 30; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            dates.push(date.toISOString().split("T")[0]);
        }
        return dates;
    };

    return (
        <div className="relative w-full h-full">
            {showSuccessCard && (
                <div
                    className="absolute z-50 top-0 w-[100vw] h-[100vh] bg-black bg-opacity-60 flex justify-center items-center"
                >
                    <div className="w-[30%] h-[60%] flex flex-col justify-center items-center gap-5 bg-black bg-opacity-70 shadow-sm shadow-white border border-gray-800 rounded-lg p-5">
                        <img src={SuccessTick} alt="successTick" width={250} />
                        <h1 className="text-firstColor text-4xl font-bold text-center">Insurance form submitted successfully!</h1>
                        <p className="text-lg font-semibold text-center px-10 text-gray-300">
                            You will be contacted in 30 minutes from our representative.
                        </p>
                    </div>

                </div>
            )}
            <div className="w-full h-full overflow-y-scroll overflow-x-hidden bg-backgroundColor">
                <div className="w-full h-[12vh] flex justify-center items-center z-50 bg-backgroundColor">
                    <NavBar />
                </div>
                <h1 className="text-center text-2xl md:text-5xl font-bold">
                    Impound Insruance Form
                </h1>
                <form onSubmit={handleSubmit} className="w-[95%] md:w-[60%] mx-auto p-4 space-y-4">
                    {/* Mobile Number */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            Mobile Number
                        </label>
                        <input
                            type="text"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-transparent"
                        />
                        {errors.mobileNumber && (
                            <p className="text-red-500 text-sm">{errors.mobileNumber}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-white">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-transparent"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                    </div>

                    {/* Vehicle Name */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            Vehicle Name
                        </label>
                        <input
                            type="text"
                            name="vehicleName"
                            value={formData.vehicleName}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-transparent"
                        />
                        {errors.vehicleName && (
                            <p className="text-red-500 text-sm">{errors.vehicleName}</p>
                        )}
                    </div>

                    {/* Vehicle Registration Number */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            Vehicle Registration Number
                        </label>
                        <input
                            type="text"
                            name="vehicleRegistrationNumber"
                            value={formData.vehicleRegistrationNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-transparent"
                        />
                        {errors.vehicleRegistrationNumber && (
                            <p className="text-red-500 text-sm">{errors.vehicleRegistrationNumber}</p>
                        )}
                    </div>

                    {/* Vehicle Price */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            Vehicle Price
                        </label>
                        <select
                            name="vehiclePrice"
                            value={formData.vehiclePrice}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-transparent"
                        >
                            <option className='text-gray-800' value="">Select</option>
                            <option className='text-gray-800' value="a">1500 to 5000</option>
                            <option className='text-gray-800' value="b">5001 to 10000</option>
                            <option className='text-gray-800' value="c">10001 to 20000</option>
                            <option className='text-gray-800' value="d">20001 to 30000</option>
                            <option className='text-gray-800' value="e">30001 to 40000</option>
                            <option className='text-gray-800' value="f">40001 to 50000</option>
                            <option className='text-gray-800' value="g">50001 to 65000</option>
                            <option className='text-gray-800' value="h">65001 and over</option>
                        </select>
                        {errors.vehiclePrice && (
                            <p className="text-red-500 text-sm">{errors.vehiclePrice}</p>
                        )}
                    </div>

                    {/* Insurance Days */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            Days of Insurance
                        </label>
                        <input
                            type="text"
                            name="insuranceDays"
                            value={formData.insuranceDays}
                            readOnly
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100 bg-transparent"
                        />
                    </div>

                    {/* Insurance Start */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            When to Start Insurance
                        </label>
                        <select
                            name="insuranceStart"
                            value={formData.insuranceStart}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-transparent"
                        >
                            <option className="text-gray-800" value="immediate">Immediate</option>
                            <option className="text-gray-800" value="date">Select Date</option>
                        </select>
                        {formData.insuranceStart === "date" && (
                            <select
                                name="insuranceStartDate"
                                value={formData.insuranceStartDate}
                                onChange={handleChange}
                                className="mt-2 block w-full p-2 border border-gray-300 rounded-md bg-transparent"
                            >
                                <option className="text-gray-800" value="">Select Date</option>
                                {generateDateOptions().map((date) => (
                                    <option className="text-gray-800" key={date} value={date}>
                                        {date}
                                    </option>
                                ))}
                            </select>
                        )}
                        {errors.insuranceStartDate && (
                            <p className="text-red-500 text-sm">{errors.insuranceStartDate}</p>
                        )}
                    </div>

                    {/* License Type */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            License Type
                        </label>
                        <select
                            name="licenseType"
                            value={formData.licenseType}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-transparent"
                        >
                            <option className="text-gray-800" value="">Select</option>
                            <option className="text-gray-800" value="Full UK License">Full UK License</option>
                            <option className="text-gray-800" value="Full Northern Ireland License">
                                Full Northern Ireland License
                            </option>
                            <option className="text-gray-800" value="Full EU License">Full EU License</option>
                            <option className="text-gray-800" value="Full International">Full International</option>
                            <option className="text-gray-800" value="Provisional UK License">Provisional UK License</option>
                        </select>
                        {errors.licenseType && (
                            <p className="text-red-500 text-sm">{errors.licenseType}</p>
                        )}
                    </div>

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-white">Title</label>
                        <select
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-transparent"
                        >
                            <option className="text-gray-800" value="">Select</option>
                            <option className="text-gray-800" value="Mr">Mr</option>
                            <option className="text-gray-800" value="Mrs">Mrs</option>
                            <option className="text-gray-800" value="Miss">Miss</option>
                            <option className="text-gray-800" value="Ms">Ms</option>
                        </select>
                        {errors.title && (
                            <p className="text-red-500 text-sm">{errors.title}</p>
                        )}
                    </div>

                    {/* First Name */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-transparent"
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm">{errors.firstName}</p>
                        )}
                    </div>

                    {/* Surname */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            Surname
                        </label>
                        <input
                            type="text"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-transparent"
                        />
                        {errors.surname && (
                            <p className="text-red-500 text-sm">{errors.surname}</p>
                        )}
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            Date of Birth (dd/mm/yyyy)
                        </label>
                        <input
                            type="text"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-transparent"
                        />
                        {errors.dateOfBirth && (
                            <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>
                        )}
                    </div>

                    {/* Postal Code */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            Postal Code
                        </label>
                        <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-transparent"
                        />
                        {errors.postalCode && (
                            <p className="text-red-500 text-sm">{errors.postalCode}</p>
                        )}
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-transparent"
                        />
                        {errors.address && (
                            <p className="text-red-500 text-sm">{errors.address}</p>
                        )}
                    </div>

                    {/* License Held Duration */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            Driver License Held Duration
                        </label>
                        <select
                            name="licenseHeldDuration"
                            value={formData.licenseHeldDuration}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-transparent"
                        >
                            <option className="text-gray-800" value="">Select</option>
                            <option className="text-gray-800" value="0 to 5 months">0 to 5 months</option>
                            <option className="text-gray-800" value="6 to 11 months">6 to 11 months</option>
                            <option className="text-gray-800" value="1 year">1 year</option>
                            <option className="text-gray-800" value="2 years">2 years</option>
                            <option className="text-gray-800" value="3 years">3 years</option>
                            <option className="text-gray-800" value="4 years">4 years</option>
                            <option className="text-gray-800" value="5 to 9 years">5 to 9 years</option>
                            <option className="text-gray-800" value="10+ years">10+ years</option>
                        </select>
                        {errors.licenseHeldDuration && (
                            <p className="text-red-500 text-sm">{errors.licenseHeldDuration}</p>
                        )}
                    </div>

                    {/* Contact Methods */}
                    <div>
                        <label className="block text-sm font-medium text-white">
                            Confirmation Method (Choose at least one)
                        </label>
                        <div className="mt-2 space-y-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="call"
                                    checked={formData.contactMethods.call}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Call
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="whatsapp"
                                    checked={formData.contactMethods.whatsapp}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                WhatsApp
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="email"
                                    checked={formData.contactMethods.email}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Email
                            </label>
                        </div>
                        {errors.contactMethods && (
                            <p className="text-red-500 text-sm">{errors.contactMethods}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-firstColor text-white p-2 rounded-md hover:bg-secondColor transition-all duration-300 ease-out font-bold"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className="w-full mx-auto">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default InsuranceForm;