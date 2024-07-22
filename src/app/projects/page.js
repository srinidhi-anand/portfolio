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
import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Projects() {

    let index = 0;
    const url = 'https://res.cloudinary.com/dsfayktkz/image/upload/c_fill,w_257,h_200,g_auto/'
    const projects = { 'Power BI Project': `v1721561457/powerbi_iokw71.png`, 'E-Invoice Single Page':`v1721561450/e-invoice_ahx0hn.jpg`, 'Digital Cash': `v1721561825/cash_app_r801gr.png`, 'Breath Analyzer':`v1721658466/dialclock_ahopnn.jpg`, 'Razor Blade': `v1721558704/agilent1_setig4.png`, 'Monarch': `v1721558705/agilent4_ppsw1i.jpg`, 'Biotek': `v1721558705/agilent3_tjq5le.jpg`, 'OCtanner': `v1721561808/sap2_s4oyfp.jpg` };

    const media_urls = Object.entries(projects).map(([key, value]) => {
        index += 1;
        return {
            id: index,
            title: key,
            url: `${url}${value}`,
        };
    });

    const [hover, setHover] = useState(false);

    const onHover = (e) => {
        e.preventDefault()
        setHover(true)
        console.log("hovered")

    }

    const onHoverOver = (e) => {
        e.preventDefault()
        setHover(false)
    }

    const handleImageClick = (name) => {
        console.log('title >> ', name)
    }


    // handle mouse enter
    const handleMouseEnter = (e) => { }
    // handle mouse leave
    const handleMouseLeave = (e) => { }

    return (
        <>
            <Header />
            <Title name="Projects" />

            {/*  <div className="gallery"> {images.map(({ id, url }) => (
        <Link
          key={id}
          href={`/?photoId=${id}`}
          as={`/p/${id}`}
          shallow
          className="..."
        >
          <Image src={url} className="..."  />
        </Link>
      ))} </div>*/}
            {/* <h1 className='text-center'>Works</h1> */}

            <div className='gallery'>
                {media_urls.map((media) => (
                    <><div key={`head_${media.id+1}`} className="img__wrap">
                        <div key={media.id} className="gallery-item img__img" onClick={() => handleImageClick(media.title)}></div>
                            <Link
                                key={`key_${media.id+1}`}
                                href={`/projects`}
                                as={`/projects`}
                                shallow
                                className="img__img"
                            >
                                <img width='257' height='200' src={media.url} className="img__img" />
                            </Link>
                            <div key={`sub_${media.id+1}`}className="img__description_layer">
                                <p className="img__description">{media.title}</p>
                            </div>
                        </div></>
                                    ))}
                    </div><BackToTop /><Footer /></>
        
            )
}