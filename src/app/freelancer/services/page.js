'use client'

import "../../welcome.css";
import "../about/about.css";
import "../../globals.css";
import "./services.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "../components/header";
import Title from "../components/title";
import Footer from "../components/footer";
import BackToTop from "../components/backtotop";
import { services } from "./servicecard";

export default function About() {

    // const skills = 'E-Invoice Page Development; Back-end Development for mobile Apps using frameworks like Kivy, Ionic, Django; Cross Platform App Development; Website Development; Single Page Web App Development; Mobile App Development; Custom JavaScript Development with Frameworks; Single-page Applications Development; Database Management; Database as a service (DBaaS); Progressive Web App Development; Deployment / Integration Of DBaaS platforms include Amazon Web Services (AWS) RDS, Microsoft Azure Database, Google Cloud SQL, and Heroku Postgres';

    return (
        <>
            <Header />
            <Title name="Services" />
            <div className="page-section" id="fl-services">
                <section className="fl-services">
                    <div className="fl-services-inner">
                        <div className="fl-section-label">What I offer</div>
                        {/* <div className="fl-section-title">Services</div> */}
                        <div className="fl-section-sub">Focused on 4 core areas — end-to-end ownership on every project</div>
                        <div className="fl-services-grid">
                            {
                                services.map((item, index) => {
                                    return (
                                        <>
                                            <div className="fl-service-card">
                                                <div className="fl-service-icon">{item.icon}</div>
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                                <div className="fl-service-tags">
                                                    {(item.tags).map((key, i) => <span id={'tag' + i} className={'fl-service-tag'} > {key}</span>)
                                                    }
                                                </div>
                                                <div className="fl-service-price">{item.cta}</div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div >
                        {/* {skills.split(';').map((i, index) =>
                            <div key={i} className="text-align">
                                <span key={i + index} className="texteditor-inline flex flex-row">
                                    <i className="bi bi-airplane-engines-fill icon"></i>
                                    <div key={i + index + 1} className=" service texteditor-inline">{i.trim()}</div>
                                </span>
                            </div>
                        )} */}
                    </div >
                </section>
            </div>
            <BackToTop></BackToTop>
            <Footer />
        </>
    )
}