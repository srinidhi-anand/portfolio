'use client';
import './skills.css';
import Nav from '../components/navbar';
import Footer from '../components/footer';


export default function Skills() {
    return (
        <>
            <Nav />
            <div className="page-section" id="sr-skills">
                <section className="sr-skills">
                    <div className="sr-skills-inner">
                        <div className="sr-section-title">Technical Skills</div>
                        <div className="sr-section-sub">Core competencies across full-stack, AI/ML and infrastructure</div>
                        <div className="sr-skills-grid">
                            <div className="sr-skill-card">
                                <h4>Frontend</h4>
                                <div className="sr-skill-item"><span className="sr-skill-name">Next.js</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[92%]"></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">React.js</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[90%]" ></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">TypeScript</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[78%]" ></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">TailwindCSS</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[85%]" ></div></div></div>
                            </div>
                            <div className="sr-skill-card">
                                <h4>Backend</h4>
                                <div className="sr-skill-item"><span className="sr-skill-name">Python (FastAPI)</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[92%]" ></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">Node.js</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[90%]" ></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">Django / Flask</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[85%]" ></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">Fastify</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[42%]" ></div></div></div>
                            </div>
                            <div className="sr-skill-card">
                                <h4>AI / Computer Vision</h4>
                                <div className="sr-skill-item"><span className="sr-skill-name">OpenCV</span><div className="sr-skill-bar"><div className="sr-skill-fill  w-[80%]"></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">CNN Architecture</span><div className="sr-skill-bar"><div className="sr-skill-fill  w-[72%]" ></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">TensorFlow</span><div className="sr-skill-bar"><div className="sr-skill-fill  w-[65%]" ></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">Deep Learning</span><div className="sr-skill-bar"><div className="sr-skill-fill  w-[45%]" ></div></div></div>
                            </div>
                            <div className="sr-skill-card">
                                <h4>Cloud &amp; DevOps</h4>
                                <div className="sr-skill-item"><span className="sr-skill-name">AWS</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[80%]"></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">Docker</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[78%]" ></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">GitHub Actions</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[82%]" ></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">Azure</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[65%]" ></div></div></div>
                            </div>
                            <div className="sr-skill-card">
                                <h4>Databases</h4>
                                <div className="sr-skill-item"><span className="sr-skill-name">MongoDB</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[85%]" ></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">PostgreSQL</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[82%]" ></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">MySQL</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[75%]" ></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">MS SQL Server</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[70%]" ></div></div></div>
                            </div>
                            <div className="sr-skill-card">
                                <h4>Mobile &amp; Cross-Platform</h4>
                                <div className="sr-skill-item"><span className="sr-skill-name">Ionic</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[80%]" ></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">Angular</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[72%]" ></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">Python (Kivy)</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[70%]" ></div></div></div>
                                <div className="sr-skill-item"><span className="sr-skill-name">REST API Design</span><div className="sr-skill-bar"><div className="sr-skill-fill w-[90%]" ></div></div></div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div></>
    )
}