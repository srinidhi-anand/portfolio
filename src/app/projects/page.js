'use client'

import "../welcome.css";
import "../about/about.css";
import "../globals.css";
import Header from "../components/header";
import Title from "../components/title";
import Footer from "../components/footer";
import BackToTop from "../components/backtotop";

export default function Projects() {

    return (
        <>
        <Header />
        <Title name="Projects" />
        <BackToTop />
        <Footer />
        </>
    )
}