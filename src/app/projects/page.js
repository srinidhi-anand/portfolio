'use client'

import "../welcome.css";
import "../about/about.css";
import "../globals.css";
import "./projects.css";
import Header from "../components/header";
import Title from "../components/title";
import Footer from "../components/footer";
import BackToTop from "../components/backtotop";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Projects() {
    const pathname = usePathname()
    let index = 0;
    const url = 'https://res.cloudinary.com/dsfayktkz/image/upload/c_fill,w_257,h_200,g_auto/'
    const projects = { 'PowerBI Project': `v1721561457/powerbi_iokw71.png`, 'E-Invoice Single Page': `v1721561450/e-invoice_ahx0hn.jpg`, 'Digital Cash': `v1721561825/cash_app_r801gr.png`, 'Breath Analyser & Motion Detector App': `v1721658466/dialclock_ahopnn.jpg`, 'Monarch': `v1721558705/agilent4_ppsw1i.jpg`, 'Razor Blade': `v1721558704/agilent1_setig4.png`, 'Biotek': `v1721558705/agilent3_tjq5le.jpg`, 'SAP CPQ Project 1 (OCTanner)': `v1721561808/sap2_s4oyfp.jpg` };

    const media_urls = Object.entries(projects).map(([key, value]) => {
        index += 1;
        return {
            id: index,
            title: key,
            url: `${url}${value}`,
        };
    });
    return (
        <>
            <Header />
            <Title name="Projects" />

            <div className='gallery'>
                {media_urls.map((media) => (

                    <div key={media.id} className="img__wrap">

                        <Image key={`img_${media.id + 1}`} width='257' height='200' src={media.url} className="img__img" alt={media.title}
                            style={{ objectFit: "contain" }} />

                        <Link
                            key={`link_${media.id + 1}`}
                            href={{
                                pathname: `/projects/${media.id}`,
                                query: { name: media.title },
                              }}
                            className={`img__img link ${pathname === `/projects/${media.id}` ? 'active' : ''}`}
                        >
                            <div key={`desc_${media.id + 1}`} className="img__description_layer">
                                <p key={`title_${media.id + 1}`} className="img__description">{media.title}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div><BackToTop /><Footer /></>

    )
}