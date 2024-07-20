'use client'

import "../welcome.css";
import "../about/about.css";
import "../globals.css";
import Header from "../components/header";
import Title from "../components/title";
import Footer from "../components/footer";
import BackToTop from "../components/backtotop";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./contact.css";

export default function Contact() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        projectDetails: "",
        message: ""
    });

    const [formSuccess, setFormSuccess] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};

        if (!formData.name) {
            errors.name = 'Name is required.';
        }

        if (!formData.email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid.';
        }

        if (!formData.projectDetails) {
            errors.projectDetails = 'projectDetails is required.';
        } else if (formData.projectDetails.length < 2) {
            errors.projectDetails = 'projectDetails must be Valid';
        }

        if (!formData.mobile) {
            errors.mobile = 'Mobile Number is required.';
        } else if (formData.mobile.length < 10 || formData.mobile.length > 10) {
            errors.mobile = 'Mobile Number must be valid.';
        }
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            mobile: "",
            projectDetails: "",
            message: ""
        });
        setErrors({});
        setIsFormValid(false)
        setFormSuccess(false);
        router.refresh();
    }

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const submitForm = async (e) => {
        // We don't want the page to refresh
        e.preventDefault()
        validateForm();
        if (isFormValid === true) {
            const formURL = e.target.action
            const data = new FormData()

            // Turn our formData state into data we can use with a form submission
            Object.entries(formData).forEach(([key, value]) => {
                data.append(key, value);
            })
            console.log('form Data framed', data);
            const response = await fetch('/api/contact', {
                method: 'post',
                body: data,
            });
            console.log(response);
            if (response.status === 200) {
                setFormSuccess(response.status);
            }
            else {
                setFormSuccess(false);
            }
        } else {
            alert('Please fill the fields correctly and resolve errors before submitting.');
        }
    }

    return (
        <>
            <Header />
            <Title
                name="Contact"
                description="You can send an inquiry or any work quotation here!"
            />
            {formSuccess ?
                <><div className="center contact-form texteditor-contact">Submitted. Thanks for Reaching Out! </div><div className="center contact-form texteditor-contact"> <button className="center contact-form texteditor-contact primary" onClick={resetForm}> Submit Another Request</button></div></>
                : (
                    <div className="center project-module-form project-module module form texteditor-contact w-full">
                        <form className="contact-form" method="POST" action="#" onSubmit={submitForm}>
                            <div className="form-input flex flex-col">
                                <label htmlFor="name" className="required">Name</label>
                                <input type="text" name="name" data-validate="required,Generic" placeholder="Your Name..." required value={formData.name} onChange={handleInput} />
                                {errors && errors.name && <p className="error">{errors.name}</p>}
                            </div>

                            <div className="form-input flex flex-col">
                                <label htmlFor="email" className="required">Email</label>
                                <input placeholder="Your Email..." type="text" onChange={handleInput} name="email" value={formData.email} required />
                                {errors && errors.email && <p className="error">{errors.email}</p>}
                            </div>

                            <div className="form-input flex flex-col">
                                <label htmlFor="mobile" className="required">Mobile No.</label>
                                <input placeholder="Enter your valid Mobile Number" onChange={handleInput} type="number" value={formData.mobile} name="mobile" required />
                                {errors && errors.mobile && <p className="error">{errors.mobile}</p>}
                            </div>

                            <div className="form-input flex flex-col">
                                <label htmlFor="projectDetails" className="required">Project Tech Requirements</label>
                                <textarea placeholder="Provide the tech stack e.g Python, React.js" name="projectDetails" value={formData.projectDetails} onChange={handleInput} required></textarea>
                                {errors && errors.projectDetails && <p className="error">{errors.projectDetails}</p>}
                            </div>

                            <div className="form-input flex flex-col">
                                <label htmlFor="message">Message</label>
                                <textarea placeholder="Your Message..." name="message" onChange={handleInput} value={formData.message}></textarea>
                            </div>

                            <div className="w-35 items-center center justify-start">
                                <button className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center send">
                                    Send
                                    <svg width="15" height="15" viewBox="0 0 8 6" className="text-cyan-500 ml-2 " fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" fill="currentColor" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            <BackToTop />
            <Footer />
        </>
    )
}