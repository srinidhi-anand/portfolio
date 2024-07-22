'use client'

import "../welcome.css";
import "./about.css";
import "../globals.css";
import Header from "../components/header";
import Title from "../components/title";
import Footer from "../components/footer";
import BackToTop from "../components/backtotop";
import Image from "next/image";

export default function About() {

    return (
        <>
        <Header />
        <Title name="About" />
        <div className="flex flex-col">
            <div className="flex flex-col">
                <div className="project-module mt-8 flex flex-row">
                <div className="align w-1/4">
                <Image
                    src='/profile.jpeg'
                    alt='logo'
                    width='200'
                    height='200'
                /></div>
                <div className="w-3/4 break-word texteditor-inline"> I am a self-motivated Full stack App Developer from India. I have nearly 5 years of work experience journey on data management, website and mobile apps development. As a curious individual, I’d love to collaborate and contribute to real-world projects in order to explore and improve my skills.  As  I'm resilient, assertive and research minded, I find learning and exploring tech updates, as an incredible process. I am currently learning about deep learning models and my future plan is to learn about AI / ML to provide solutions for real time day-to-day challenges.</div>
                </div>
                <div className="project-module mt-8 flex flex-row">
                <div className="align w-1/4 mt-4 p-10">
                <Image
                    src='/qualification.png'
                    alt='logo'
                    width='200'
                    height='200'
                /></div>
                <div className="w-3/4 break-word flex flex-col">
                <div className="float-left sub-title">Qualification</div>
                <div  className="w-full span">
                    <span className="w-full mt-2">M.E (Applied Electronics)</span><br/>
                    <span className="w-full mt-2">Jerusalem College of Engineering, Chennai, Tamil Nadu, India.</span><br/>
                    <span className="w-full mt-2">JUNE 2022 - MAY 2024.</span><br/>
                </div>
                <div  className="w-full span">
                    <span className="w-full mt-5">B.E (Electronics and  Communication Engineering).</span><br/>
                    <span className="w-full mt-2">Sri Sai Ram Institute of Technology, Chennai, Tamil Nadu, India.</span><br/>
                    <span className="w-full mt-2">JUNE 2014 - MAY 2018.</span><br/>
                </div>
                <div className="float-left sub-title flex flex-row"><Image
                    src='/exp.png'
                    alt='logo'
                    width='35'
                    height='35'
                /><a className= "ml-3" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1Uy2vTLb-yMe3ZTxcX0fzLrX4MNdaVUdk/view?usp=sharing"><u>Resume</u></a></div></div>
                </div>
            </div>
        </div>
        <BackToTop />
        <Footer />
        </>
    )
}