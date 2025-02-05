const mongoose = require("mongoose");

const InsuranceSchema = new mongoose.Schema({
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true },
    vehicleName: { type: String, required: true },
    vehicleRegistrationNumber: { type: String, required: true },
    vehiclePrice: { type: String, required: true },
    insuranceDays: { type: String, default: "30" },
    insuranceStart: { type: String, required: true },
    insuranceStartDate: { type: String },
    licenseType: { type: String, required: true },
    title: { type: String, required: true },
    firstName: { type: String, required: true },
    surname: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    postalCode: { type: String, required: true },
    address: { type: String, required: true },
    licenseHeldDuration: { type: String, required: true },
    contactMethods: {
        call: { type: Boolean, default: false },
        whatsapp: { type: Boolean, default: false },
        email: { type: Boolean, default: false },
    },
}, { timestamps: true });

module.exports = mongoose.model("Insurance", InsuranceSchema);
