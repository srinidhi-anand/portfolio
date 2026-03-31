'use client';

import './service.css';
import Nav from '../components/navbar';
import Footer from '../components/footer';


export default function Service() {
    return (
        <>
            <Nav />
            <div className="page-section" id="sr-experience">
                <section className="sr-experience">
                    <div className="sr-section-title">Work Experience</div>
                    <div className="sr-section-sub">Enterprise, product, and R&D engagements across 7.5 years</div>
                    <div className="sr-timeline">
                        <div className="sr-exp-item">
                            <div className="sr-exp-dot"></div>
                            <div className="sr-exp-header">
                                <div className="sr-exp-role">Senior Product Developer — PowerBI </div>
                                <div className="sr-exp-company">Lumel Technologies LLP Private Limited (Senior Product Developer)</div>
                                <div className="sr-exp-date">2022 — Present · 3+ years</div>
                            </div>
                            <ul className="sr-exp-bullets">
                                <li>Architected and delivered Intelligent Testing Framework — AI-powered Jest generator with multi-LLM support (Gemini, OpenAI, Groq) and automated GitHub Actions CI/CD pipeline</li>
                                <li> Enhanced performance and availability through Docker/Kubernetes, Redis caching, optimized data pipelines, and reliable backend design patterns for high-traffic workloads</li>
                                <li>Translated functional requirements into technical specifications, API contracts, and integration workflows, enabling consistent delivery across cross-functional teams</li>
                                <li>Designed system architecture for full-stack products including authentication, microservices, database design and cloud deployment strategy</li>
                                <li>Led end-to-end delivery across Node.js, React and MSSQL stacks</li>
                            </ul>
                            <div className="sr-exp-tags"><span className="sr-exp-tag">React.js</span><span className="sr-exp-tag">Node.js</span><span className="sr-exp-tag">Kubernetes</span><span className="sr-exp-tag">Docker</span><span className="sr-exp-tag">AWS</span><span className="sr-exp-tag">Gen AI</span></div>
                        </div>
                        <div className="sr-exp-item">
                            <div className="sr-exp-dot"></div>
                            <div className="sr-exp-header">
                                <div className="sr-exp-role">Associate Developer — SAP CPQ</div>
                                <div className="sr-exp-company">Boston Harbor Consulting Private Limited</div>
                                <div className="sr-exp-date">2018 — 2022 · 3+ years</div>
                            </div>
                            <ul className="sr-exp-bullets">
                                <li>Built CPQ pricing modules with Pricebook Sets, Exchange Rates and custom SalesForce object integration</li>
                                <li>Profiled and optimised Python and SQL code, reducing query load time by ~40%</li>
                                <li>Designed custom UI layouts and Bootstrap tables for both standard and custom SAP CPQ objects</li>
                            </ul>
                            <div className="sr-exp-tags"><span className="sr-exp-tag">SAP CPQ</span><span className="sr-exp-tag">Knockout.js</span><span className="sr-exp-tag">Python</span><span className="sr-exp-tag">SQL</span><span className="sr-exp-tag">SalesForce</span></div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}