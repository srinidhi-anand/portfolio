'use client';

import "../../../welcome.css";
import "../../about/about.css";
import "../../../globals.css";
import "../projects.css";
import Title from "@/app/freelancer/components/title";
import BackToTop from "@/app/freelancer/components/backtotop";
import SubHeader from "@/app/freelancer/components/subheader";
import Subcontent from "@/app/freelancer/components/subcontent";
import Footer from "../../components/footer";

export default function Project1(props) {
    const { name: title } = props.searchParams;
    return (
        <>
            <SubHeader />
            <Title name={`${title}`} IsDetails={true} />
            <Subcontent title={`${title}`} />
            <BackToTop />
            <Footer />
        </>
    )
}