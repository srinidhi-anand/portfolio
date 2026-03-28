'use client';
import './contact.css';
import Nav from '../components/navbar';
import Footer from '../components/footer';
import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function Contact() {
    const router = useRouter();
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        mobile: "",
        role: "",
        message: ""
    });

    const notify = () => toast.success("Message sent successfully", {
        position: "top-right",
        hideProgressBar: true,
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

        if (!formData.company) {
            errors.company = 'Company name is required.';
        }

        if (!formData.email && !formData.mobile) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid.';
        }

        if (formData.role.length < 2) {
            errors.role = 'Role must be Valid';
        }

        if (!formData.email && !formData.mobile) {
            errors.mobile = 'Contact Number is required.';
        } else if ((!formData.mobile.startsWith('044') && (formData.mobile.length < 10 || formData.mobile.length > 10)) || (formData.mobile.startsWith('044') && (formData.mobile.length < 11 || formData.mobile.length > 11))) {
            errors.mobile = 'Contact Number must be valid.';
        }
        console.log(`errors`, errors);
        console.log(`formData`, formData);
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    const resetForm = () => {
        setFormData({
            name: "",
            company: "",
            email: "",
            mobile: "",
            role: "",
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
                notify()
            }
            else {
                setFormSuccess(false);
            }
            formRef.current?.reset();
            resetForm()
        } else {
            alert('Please fill the fields correctly and resolve errors before submitting.');
        }
    }

    return (
        <><Nav />
            <div className="page-section" id="sr-contact">
                <section className="sr-contact">
                    <div className="sr-contact-inner">
                        <div className="sr-contact-info">
                            <h2>Let's Connect</h2>
                            <p>Open to Senior / Lead Engineer roles at product-based companies with R&D culture. Remote-first. Targeting 28+ LPA. Happy to discuss PhD-sponsorship pathways.</p>
                            <div className="sr-contact-links">
                                <a href="https://www.linkedin.com/in/srianand27" target="_blank" rel="noopener noreferrer" className="sr-contact-link"><span className="sr-contact-link-icon" >in</span> linkedin.com/in/srinidhi-a</a>
                                <a href="https://github.com/srinidhi-anand" className="sr-contact-link" target="_blank" rel="noopener noreferrer"><span className="sr-contact-link-icon">gh</span> github.com/srinidhi-anand</a>
                                <a href="https://drive.google.com/file/d/1FUhDazPGG-J-rZnK5y0kz3iDMkEIlIlz/view?usp=sharing" className="sr-contact-link" target="_blank" rel="noopener noreferrer"><span className="sr-contact-link-icon">📄</span> Download Resume (PDF)</a>
                            </div>
                            <div className="sr-phd-box">
                                <h4>🎓 PhD Sponsorship Interest</h4>
                                <p>Actively seeking companies with IISc MoU (Walmart, Samsung, Intel, Flipkart, Cisco). Open to discussing sponsorship track during or post-joining.</p>
                            </div>
                        </div>
                        <div className="sr-form">
                            <form ref={formRef} autoComplete="off" className="contact-form" method="POST" action="#" onSubmit={submitForm}>
                                <div className="sr-field">
                                    <label className="required" htmlFor='name'>Name</label>
                                    <input name="name" type="text" placeholder="Your name" onChange={(e) => handleInput(e)} value={formData.name} />
                                    {errors && errors.name && <p className="error">{errors.name}</p>}
                                </div>
                                <div className="sr-field">
                                    <label className="required" htmlFor='company'>Company</label>
                                    <input name="company" type="text" placeholder="Company name" onChange={(e) => handleInput(e)} value={formData.company} />
                                    {errors && errors.company && <p className="error">{errors.company}</p>}
                                </div>
                                <div className="sr-field">
                                    <label className="required" htmlFor='email'>Contact Email</label>
                                    <input name="email" type="email" placeholder="Official Email Id" onChange={(e) => handleInput(e)} value={formData.email} />
                                    {errors && errors.email && <p className="error">{errors.email}</p>}
                                </div>
                                <div className="sr-field">
                                    <label className="required" htmlFor='mobile'>Mobile No</label>
                                    <input name="mobile" type="phone" placeholder="Contact Number" onChange={(e) => handleInput(e)} value={formData.mobile} />
                                    {errors && errors.mobile && <p className="error">{errors.mobile}</p>}
                                </div>
                                <div className="sr-field">
                                    <label className="required" htmlFor='role'>Role / Opportunity</label>
                                    <input type="text" name='role' placeholder="e.g. Senior Engineer, R&D Lead" onChange={(e) => handleInput(e)} value={formData.role} />
                                    {errors && errors.role && <p className="error">{errors.role}</p>}
                                </div>
                                <div className="sr-field">
                                    <label htmlFor='message'>Message</label>
                                    <textarea name="message" rows="4" placeholder="Tell me about the role, stack, and team..." onChange={(e) => handleInput(e)} value={formData.message}></textarea>
                                </div>
                                <button className="sr-submit">Send Message →</button>
                            </form>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>


        </>
    )
}