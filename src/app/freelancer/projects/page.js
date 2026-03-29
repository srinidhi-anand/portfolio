'use client'

import "../../welcome.css";
import "../about/about.css";
import "../../globals.css";
import "./projects.css";
import Header from "../components/header";
import Title from "../components/title";
import Footer from "../components/footer";
import BackToTop from "../components/backtotop";
import Image from "next/image";
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { projects, ProjectCards } from "./projectDetails";


export default function Projects() {
    const pathname = usePathname()
    let index = 0;
    const url = 'https://res.cloudinary.com/dsfayktkz/image/upload/c_fill,w_257,h_200,g_auto/'

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
            <Title name="Projects" description="" cls="projectclass" />

            <div className="page-section-fl" id="fl-projects">
                <section className="fl-projects">
                    <div className="fl-section-label fl-section-label-proj">Selected Work</div>

                    <div className="fl-section-sub fl-section-sub-proj">Case studies from freelance and enterprise engagements</div>


                    <div className='gallery grid grid-cols-1 md:grid-cols-2 gap-8 p-4'>
                        {media_urls.map((media) => (

                            <React.Fragment key={media.id}>
                                <div className='flex flex-row items-start gap-4 border p-4 rounded-xl'>
                                    <div key={media.id} className="img__wrap w-32 h-32 rounded-lg object-cover flex-shrink-0">

                                        <Image key={`img_${media.id + 1}`} width='257' height='200' src={media.url} className="img__img" alt={media.title}
                                            style={{ objectFit: "contain" }} />
                                        <i className="arrow-icon fa-regular fa-circle-right"></i>

                                        <Link
                                            key={`link_${media.id + 1}`}
                                            href={{
                                                pathname: `/freelancer/projects/details`,
                                                query: { name: media.title, id: media.id },
                                            }}
                                            className={`img__img link ${pathname === `/freelancer/projects/details` ? 'active' : ''}`}
                                        >
                                            <div key={`desc_${media.id + 1}`} className="img__description_layer">
                                                <p key={`title_${media.id + 1}`} className="img__description">{media.title}</p>
                                            </div>
                                        </Link>
                                    </div>
                                    {
                                        ProjectCards[media.title] && (
                                            <div key={'card-' + media.id} className="flex flex-col gap-2 fl-proj-body">
                                                {ProjectCards[media.title].badge && <span className="fl-proj-badge">{ProjectCards[media.title].badge}</span>}
                                                {(ProjectCards[media.title].name || media.title) && <h3>{ProjectCards[media.title].name || media.title}</h3>}
                                                <p>{ProjectCards[media.title].description}</p>
                                                {
                                                    ProjectCards[media.title].npm && <div className="proj-links">
                                                        <a href={ProjectCards[media.title].npm}
                                                            target="_blank" rel="noopener noreferrer"
                                                            className="proj-link-npm">
                                                            Npm ↗
                                                        </a>
                                                        {
                                                            ProjectCards[media.title].yarn && <a href={ProjectCards[media.title].yarn}
                                                                target="_blank" rel="noopener noreferrer"
                                                                className="proj-link-npm">
                                                                Yarn ↗
                                                            </a>
                                                        }
                                                        <a href={ProjectCards[media.title].GitHub}
                                                            target="_blank" rel="noopener noreferrer"
                                                            className="proj-link-gh">
                                                            GitHub ↗
                                                        </a>
                                                    </div>
                                                }
                                                <span className="fl-proj-outcome">{ProjectCards[media.title].outcome}</span>
                                            </div>
                                        )
                                    }
                                </div>
                            </React.Fragment>
                        ))}


                    </div>
                </section >
            </div >

            <BackToTop /><Footer /></>

    )
}