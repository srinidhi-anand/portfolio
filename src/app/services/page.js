'use client'

import "../welcome.css";
import "../about/about.css";
import "../globals.css";
import "./services.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "../components/header";
import Title from "../components/title";
import Footer from "../components/footer";
import BackToTop from "../components/backtotop";

export default function About() {

    const skills = 'E-Invoice Page Development; Back-end Development for mobile Apps using frameworks like Kivy, Ionic, Django; Cross Platform App Development; Single Page Web App Development; Mobile App Development; Custom JavaScript Development with Frameworks; Single-page Applications Development; Database Management; Database as a service (DBaaS); Progressive Web App Development; Deployment / Integration Of DBaaS platforms include Amazon Web Services (AWS) RDS, Microsoft Azure Database, Google Cloud SQL, and Heroku Postgres';

    return (
        <>
            <Header />
            <Title name="Services" />
            <div className="standard-modules modules text project-module-text">
                {skills.split(';').map((i) =>
                    <div key="i" className="text-align">
                        <span key="i" className="texteditor-inline flex flex-row">
                            <i class="bi bi-airplane-engines-fill"></i>
                            <div key="i" className=" service texteditor-inline">{i.trim()}</div>
                        </span>
                    </div>
                )}
            </div>
            <BackToTop></BackToTop>
            <Footer />
        </>
    )
}