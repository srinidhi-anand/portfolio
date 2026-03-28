'use client'

import "../../welcome.css";
import "../about/about.css";
import "../../globals.css";
import Header from "../components/header";
import Title from "../components/title";
import Footer from "../components/footer";
import BackToTop from "../components/backtotop";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./contact.css";

export default function Contact() {
    const router = useRouter();
    const formRef = useRef(null);
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

    const validateForm = (formData) => {
        let errors = {};
        setErrors(errors);
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
        console.log(`errors`, errors);
        console.log(`formData`, formData);
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
        console.log(`filed`, fieldName, fieldValue)
        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
        validateForm(formData);
    }

    useEffect(() => {
        const objLen = Object.values(formData).filter(n => n)
        console.log(`form len`, objLen)
        if (objLen.length > 0) { validateForm(formData); }
    }, [formData])

    const submitForm = async (e) => {
        // We don't want the page to refresh
        e.preventDefault()
        validateForm(formData);
        if (isFormValid === true) {
            const formURL = e.target.action
            const data = new FormData()

            // Turn our formData state into data we can use with a form submission
            Object.entries(formData).forEach(([key, value]) => {
                data.append(key, value);
            })
            const response = await fetch('/freelancer/api/contact', {
                method: 'post',
                body: data,
            });
            if (response.status === 200) {
                setFormSuccess(response.status);
            }
            else {
                setFormSuccess(false);
            }
            formRef.current?.reset()
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
                    // <div className="center project-module-form project-module module form texteditor-contact w-full">
                    <div className="page-section" id="fl-contact">
                        <section className="fl-contact">
                            <div className="fl-section-label">Get in touch</div>
                            <div className="fl-section-title">Let's Work Together</div>
                            <p>Have a project in mind? Fill in the details and I'll get back within <strong>24 hours</strong>.</p>
                            <div className="fl-contact-card">
                                <div className="fl-field-row">
                                    <form ref={formRef} autoComplete="off" className="contact-form" method="POST" action="#" onSubmit={submitForm}>
                                        <div className="fl-field form-input flex flex-col">
                                            <label htmlFor="name" className="required">Name</label>
                                            <input type="text" name="name" data-validate="required,Generic" placeholder="Your Name..." required value={formData.name} onChange={(e) => handleInput(e)} />
                                            {errors && errors.name && <p className="error">{errors.name}</p>}
                                        </div>

                                        <div className="fl-field form-input flex flex-col">
                                            <label htmlFor="email" className="required">Email</label>
                                            <input placeholder="Your Email..." type="text" onChange={(e) => handleInput(e)} name="email" value={formData.email} required />
                                            {errors && errors.email && <p className="error">{errors.email}</p>}
                                        </div>

                                        <div className="fl-field form-input flex flex-col">
                                            <label htmlFor="mobile" className="required">Mobile No.</label>
                                            <input placeholder="Enter your valid Mobile Number" onChange={(e) => handleInput(e)} type="number" value={formData.mobile} name="mobile" required />
                                            {errors && errors.mobile && <p className="error">{errors.mobile}</p>}
                                        </div>

                                        <div className="form-input flex flex-col fl-field">
                                            <label htmlFor="projectDetails" className="required">What are you building?</label>
                                            <select name="projectDetails" value={formData.projectDetails} onChange={(e) => handleInput(e)}>
                                                <option >Select</option>
                                                <option >Web Application</option>
                                                <option >E-Commerce Platform</option>
                                                <option >Mobile App</option>
                                                <option >AI / Data Feature</option>
                                                <option >Other</option>
                                            </select>
                                            {errors && errors.projectDetails && <p className="error">{errors.projectDetails}</p>}
                                        </div>

                                        {/* <div className="fl-field form-input flex flex-col">
                                            <label htmlFor="projectDetails" className="required">What are you building?</label>
                                            <textarea placeholder="Provide the tech stack e.g Python, React.js" name="projectDetails" value={formData.projectDetails} onChange={(e) => handleInput(e)} required></textarea>
                                            {errors && errors.projectDetails && <p className="error">{errors.projectDetails}</p>}
                                        </div> */}

                                        <div className="fl-field form-input flex flex-col">
                                            <label htmlFor="message">Message</label>
                                            <textarea placeholder="Tell me about your project, timeline, and budget..." name="message" onChange={(e) => handleInput(e)} value={formData.message}></textarea>
                                        </div>

                                        {/* <div className="w-35 items-center center justify-start">
                                            <button className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center send">
                                                Send
                                                <svg width="15" height="15" viewBox="0 0 8 6" className="text-cyan-500 ml-2 " fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" fill="currentColor" />
                                                </svg>
                                            </button>
                                        </div> */}
                                        <button className="fl-submit">Send Inquiry →</button>
                                        <p className="fl-response-note">Typically responds within 24 hours · Connect on <a href="#">LinkedIn</a></p>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                    // </div>
                )}
            <BackToTop />
            <Footer />
        </>
    )
}