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

            <div className="page-section" id="fl-projects">
                <section className="fl-projects">
                    <div className="fl-section-label fl-section-label-proj">Selected Work</div>
                    {/* <div className="fl-section-title">Projects</div> */}
                    <div className="fl-section-sub fl-section-sub-proj">Case studies from freelance and enterprise engagements</div>


                    <div className='gallery'>
                        {media_urls.map((media) => (

                            <>
                                <div key={media.id} className="img__wrap">

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

                                {ProjectCards[media.title] && (<div key={'card-' + media.id} className="fl-proj-body">
                                    {ProjectCards[media.title].badge && <span className="fl-proj-badge">{ProjectCards[media.title].badge}</span>}
                                    {(ProjectCards[media.title].name || media.title) && <h3>{ProjectCards[media.title].name || media.title}</h3>}
                                    <p>{ProjectCards[media.title].description}</p>
                                    <span className="fl-proj-outcome">{ProjectCards[media.title].outcome}</span>
                                </div>)}
                            </>
                        ))}
                        {/* </div> */}

                    </div>
                </section >
            </div >

            <BackToTop /><Footer /></>

    )
}