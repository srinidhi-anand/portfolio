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
            <div className="flex flex-row">
                <div className="project-module">
                <div className="align w-96">
                <Image
                    src='/logo.jpeg'
                    alt='logo'
                    width='50'
                    height='50'
                />
            </div>
                </div>
            </div>
        </div>
        <BackToTop />
        <Footer />
        </>
    )
}