'use client';
import './about.css';
import Nav from '../components/navbar';
import Footer from '../components/footer';

export default function SrAbout() {
    return (
        <>
            <Nav />
            <div className="page-section" id="sr-about">
                <section className="sr-about">
                    <div className="sr-section-title">About Me</div>
                    <div className="sr-section-sub">Engineer with a research mindset — building systems that are intelligent by design.</div>
                    <div className="sr-about-grid">
                        <div className="sr-about-bio">
                            <p>I'm a full-stack architect and developer with <span className="sr-highlight">7.5 years</span> of experience building production-grade web applications, mobile platforms, and data-driven systems across enterprise and freelance engagements.</p>
                            <p>I've owned products end-to-end — from system architecture and database modelling to frontend UI and cloud deployment on AWS & Azure. My core stack is Python (Django, FastAPI, Flask), Node.js, Next.js, and React.</p>
                            <p>My research interest lies in <span className="sr-highlight">applied AI, distributed cloud computing, and computer vision</span>. I've built an emotion detection system using CNNs with OpenCV — applying deep learning to solve real-world perception problems. I'm actively pursuing R&D-aligned roles and long-term PhD-track opportunities.</p>
                            <div className="quals flex items-center gap-2 mb-2 mt-16">
                                <span className="text-xl">🎓</span>
                                <h2 className="text-xl font-semibold">Qualification</h2>
                            </div>
                            <div className="sr-edu-list">
                                <div className="sr-edu-item"><strong>M.E (Applied Electronics)</strong><span>Jerusalem College of Engineering · 2022–2024 · Thesis: Emotion Detection using CNN</span></div>
                                <div className="sr-edu-item"><strong>B.E (ECE)</strong><span>Sri Sai Ram Institute of Technology · 2014–2018</span></div>
                            </div>
                        </div>
                        <div className="sr-stats-col">
                            <div className="sr-stat-card"><strong>7.5</strong><span>Years of industry experience</span></div>
                            <div className="sr-stat-card"><strong>7+</strong><span>Production projects delivered</span></div>
                            <div className="sr-stat-card bc-accent"><strong className="sr-stat-card-color">R&amp;D</strong><span>Distributed Cloud Storage · CNN · DL · Computer Vision</span></div>
                            <div className="sr-stat-card"><strong>PhD</strong><span>Targeting IISc-sponsored program via product-co MoU</span></div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div></>
    );
}