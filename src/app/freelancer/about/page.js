'use client'

import "../../welcome.css";
import "./about.css";
import "../../globals.css";
import Header from "../components/header";
import Title from "../components/title";
import Footer from "../components/footer";
import BackToTop from "../components/backtotop";

export default function About() {

    return (
        <>
            <Header />
            <Title name="About" />
            <div className="page-section" id="fl-about">
                <section className="fl-about">
                    <div className="fl-section-label padding-28">Who I am</div>
                    <div className="fl-about-grid">
                        <div className="fl-avatar">SA</div>
                        <div className="fl-bio">
                            <p>I'm a full-stack architect and developer with 7+ years of experience building web applications, mobile apps, and data-driven platforms, across freelance projects and enterprise clients.</p>
                            <p>I've architected and delivered products end-to-end: from system design and database modelling to frontend UI and cloud deployment on AWS & Azure. My stack centres around Python (Django, FastAPI, Flask), Node.js, Next.js, and React.</p>
                            <p>Beyond web development, I've applied deep learning in computer vision, building an emotion detection system using CNNs. I'm driven by the intersection of intelligent systems and real-world products.</p>
                            <div className="flex items-center gap-2 mb-2 mt-16">
                                <span className="text-xl">🎓</span>
                                <h2 className="text-xl font-semibold">Qualification</h2>
                            </div>
                            <div className="fl-quals">
                                <div className="fl-qual-item"><strong>M.E (Applied Electronics)</strong><span>Jerusalem College of Engineering · Chennai · 2022–2024</span></div>
                                <div className="fl-qual-item"><strong>B.E (ECE)</strong><span>Sri Sai Ram Institute of Technology · Chennai · 2014–2018</span></div>
                            </div>
                            <div className="fl-stats-row">
                                <div className="fl-stat"><strong>7+</strong><span>Years Experience</span></div>
                                <div className="fl-stat"><strong>7+</strong><span>Projects Delivered</span></div>
                                <div className="fl-stat"><strong>3</strong><span>Freelance Clients</span></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <BackToTop />
            <Footer />
        </>
    )
}