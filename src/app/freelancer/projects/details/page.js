'use client';

import "../../../welcome.css";
import "../../about/about.css";
import "../../../globals.css";
import "../projects.css";
import Title from "../../components/title";
import BackToTop from "../../components/backtotop";
import SubHeader from "../../components/subheader";
import Subcontent from "../../components/subcontent";
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