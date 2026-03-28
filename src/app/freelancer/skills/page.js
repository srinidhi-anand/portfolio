'use client'

import "../../welcome.css";
import "../about/about.css";
import "../../globals.css";
import "./skills.css";
import "../title.css";
import Header from "../components/header";
import Title from "../components/title";
import BackToTop from "../components/backtotop";
import { skills } from "./skillcard";
import Footer from "../components/footer";

function divider() {
    return (<div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <div className="flex-grow border-t border-gray-400"></div>
    </div>)
}

export default function Skills() {
    const data = skills;

    return (
        <>
            <Header />
            <Title name="Skills" />
            <div className="page-section" id="fl-skills">
                <section className="fl-skills">
                    <div className="fl-section-label">Technical Expertise</div>
                    <div className="fl-section-sub">Proficiency levels across my core stack</div>
                    <div className="fl-skill-legend">
                        <span className="fl-skill-legend fl-leg-expert">Expert</span>
                        <span className="fl-skill-legend fl-leg-prof">Proficient</span>
                        <span className="fl-skill-legend fl-leg-learn">Learning</span>
                    </div>
                    {
                        Object.entries(data).map(([k, v], index) => {
                            return (
                                <>{index > 0 && divider()}
                                    <div className="fl-skill-group">
                                        <h4>{k}</h4>
                                        <div className="fl-skill-tags">
                                            {Object.keys(v).map((key, i) => (v[key].map(item => <span key={'tag' + i} id={'tag' + i} className={'fl-tag fl-tag-' + key} > {item}</span>)))
                                            }
                                        </div>
                                    </div>
                                </>)
                        })
                    }
                </section >
            </div >
            <BackToTop />
            <Footer></Footer>
        </>
    )
}