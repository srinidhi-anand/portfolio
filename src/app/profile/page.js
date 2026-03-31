'use client';
import './root.css';
import './home.css';
import Nav from './components/navbar';
import { useRouter } from "next/navigation";
import Footer from './components/footer';
import NeuralBackground from './components/neuralBackground';

export default function Profile() {

    const router = useRouter();

    const handleNavigation = (route) => {
        // Perform some action (e.g., form validation, API call)
        console.log("Navigating now...", route);

        // Navigate to the new page
        router.push(route);
    };

    return (

        <>
            <Nav />
            <div className="page-section visible" id="sr-home">
                <NeuralBackground />
                <section className="sr-hero">
                    <div className="sr-role-badge">Senior Full-Stack Engineer &nbsp;·&nbsp; <span>R&amp;D Focus</span></div>
                    <h1>Architect. Build. <em>Research.</em><br />Where systems meet intelligence.</h1>
                    <p>7.5 years building production-grade full-stack systems. Computer Vision & Deep Learning applied in real projects. Targeting R&D roles at product-based companies.</p>
                    <div className="sr-stack-row">
                        <span className="sr-stack-tag">Python</span><span className="sr-stack-tag">Next.js</span><span className="sr-stack-tag">React</span>
                        <span className="sr-stack-tag">Node.js</span><span className="sr-stack-tag">OpenCV</span><span className="sr-stack-tag">TensorFlow</span>
                        <span className="sr-stack-tag">AWS</span><span className="sr-stack-tag">Docker</span>
                    </div>
                    <div className="sr-cta-group">
                        <button className="sr-btn-primary" onClick={() => handleNavigation('/profile/projects')}>View Projects</button>
                        <button className="sr-btn-outline" onClick={() => window.open('https://drive.google.com/file/d/1FUhDazPGG-J-rZnK5y0kz3iDMkEIlIlz/view?usp=sharing', '_blank', 'noopener,noreferrer')}>View Resume</button>
                    </div>
                </section>
                <Footer />
            </div> </>
    )
}