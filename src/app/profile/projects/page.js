'use client';

import './project.css';
import Nav from '../components/navbar';
import Footer from '../components/footer';


export default function Project() {
    return (
        <>
            <Nav />
            <div className="page-section" id="sr-projects">
                <section className="sr-projects">
                    <div className="sr-section-title">Projects</div>
                    <div className="sr-section-sub">R&D and production systems built across AI, fintech, and developer tooling</div>

                    {/* <!-- Featured: Emotion Detection --> */}
                    <div className="sr-proj-featured">
                        <span className="sr-feat-badge">R&amp;D FLAGSHIP PROJECT</span>
                        <h3>Emotion Detection System — Computer Vision &amp; Deep Learning</h3>
                        <p>Designed and trained a Convolutional Neural Network (CNN) for real-time facial emotion recognition using OpenCV. Built during M.E. Applied Electronics research. Classified 7 emotion categories from live video input with frame-by-frame inference pipeline.</p>
                        <div className="sr-proj-meta">
                            <div className="sr-proj-meta-item"><span>Architecture</span><strong>CNN · OpenCV Pipeline</strong></div>
                            <div className="sr-proj-meta-item"><span>Categories</span><strong>7 emotion classes</strong></div>
                            <div className="sr-proj-meta-item"><span>Domain</span><strong>Computer Vision · DL</strong></div>
                        </div>
                        <div className="proj-stack">
                            <span className="sr-proj-tech teal">Python</span><span className="sr-proj-tech teal">OpenCV</span><span className="sr-proj-tech teal">TensorFlow</span><span className="sr-proj-tech teal">CNN</span><span className="sr-proj-tech teal">NumPy</span><span className="sr-proj-tech teal">ML Models</span><span className="sr-proj-tech teal">YOLO</span><span className="sr-proj-tech teal">Deep Learning</span>
                        </div>
                    </div>

                    <div className="sr-proj-grid">
                        <div className="sr-proj-card">
                            <div className="sr-proj-card-icon">🧩</div>
                            <h3>Fabric 1P Project</h3>
                            <p>Collaborated with Microsoft to bring no-code planning, budgeting,
                                and forecasting capabilities directly into Microsoft Fabric and
                                Power BI semantic models — eliminating data movement and siloed
                                planning workflows.

                                Architected the data storage layer using OneLake with high-security
                                connectivity, ensuring enterprise-grade reliability and scalability.</p>
                            <div className="sr-proj-card-stack"><span className="sr-proj-tech">Node.js</span><span className="sr-proj-tech">TypeScript</span><span className="sr-proj-tech">.Net</span><span className="sr-proj-tech">GitHub Actions</span></div>
                        </div>
                        <div className="sr-proj-card">
                            <div className="sr-proj-card-icon">📊</div>
                            <h3>PowerBI Inforiver Project</h3>
                            <p>Built data visualization and scheduling features that enable
                                write-back capabilities directly from Power BI to customer-defined
                                destinations — eliminating manual data movement across pipelines.

                                Led PoC evaluation for feature feasibility and compatibility,
                                accelerating integration decisions for the core product roadmap.</p>
                            <div className="sr-proj-card-stack"><span className="sr-proj-tech">Node.js</span><span className="sr-proj-tech">TypeScript</span><span className="sr-proj-tech">React.js</span><span className="sr-proj-tech">GitHub Actions</span></div>
                        </div>
                        <div className="sr-proj-card">
                            <div className="sr-proj-card-icon">🧪</div>
                            <h3>Intelligent Testing Framework</h3>
                            <p>Published npm package — AI-powered Jest test case generator with multi-LLM providers (Gemini, OpenAI, Groq). Retry logic, CI/CD via GitHub Actions. Reduces manual test writing by ~70%.</p>
                            <div className="sr-proj-card-stack"><span className="sr-proj-tech">Node.js</span><span className="sr-proj-tech">TypeScript</span><span className="sr-proj-tech">LLM APIs</span><span className="sr-proj-tech">GitHub Actions</span></div>
                        </div>
                        <div className="sr-proj-card">
                            <div className="sr-proj-card-icon">💳</div>
                            <h3>Digital Cash — Fintech Platform</h3>
                            <p>Multilingual (Arabic/English) fintech app for bill payments and e-invoicing. Full-stack delivery across iOS, Android, and Web with AWS backend and MongoDB.</p>
                            <div className="sr-proj-card-stack"><span className="sr-proj-tech">Ionic</span><span className="sr-proj-tech">Angular</span><span className="sr-proj-tech">Node.js</span><span className="sr-proj-tech">MongoDB</span><span className="sr-proj-tech">AWS</span></div>
                        </div>
                        <div className="sr-proj-card">
                            <div className="sr-proj-card-icon">📱</div>
                            <h3>Breath &amp; Motion Analyser</h3>
                            <p>Health monitoring app using Python Kivy + Google Fit API. Real-time sleep motion detection with dial clock UI and Google Cloud telemetry integration.</p>
                            <div className="sr-proj-card-stack"><span className="sr-proj-tech">Python (Kivy)</span><span className="sr-proj-tech">Google Fit API</span><span className="sr-proj-tech">GCP</span><span className="sr-proj-tech">REST API</span></div>
                        </div>
                        <div className="sr-proj-card">
                            <div className="sr-proj-card-icon">⚙️</div>
                            <h3>SAP CPQ System — OCTanner</h3>
                            <p>Enterprise CPQ with custom Pricebook Sets, Exchange Rate modules and SalesForce object integration. 40% SQL query optimisation via Python profiling.</p>
                            <div className="sr-proj-card-stack"><span className="sr-proj-tech">SAP CPQ</span><span className="sr-proj-tech">Knockout.js</span><span className="sr-proj-tech">Python</span><span className="sr-proj-tech">SQL</span></div>
                        </div>
                    </div>
                </section >
                <Footer />
            </div >
        </>
    )
}