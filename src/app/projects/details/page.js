'use client';

import "../../welcome.css";
import "../../about/about.css";
import "../../globals.css";
import "../projects.css";
import Title from "@/app/components/title";
import BackToTop from "@/app/components/backtotop";
import SubHeader from "@/app/components/subheader";
import Subcontent from "@/app/components/subcontent";

export default function Project1(props) {
    const { name: title } = props.searchParams;
    return (
        <>
            <SubHeader />
            <Title name={`${title}`} />
            <Subcontent title={`${title}`} />
            <BackToTop />
        </>
    )
}