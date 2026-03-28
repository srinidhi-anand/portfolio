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
                    {/* <div className="fl-section-title">Skills</div> */}
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
                                            {Object.keys(v).map((key, i) => (v[key].map(item => <span id={'tag' + i} className={'fl-tag fl-tag-' + key} > {item}</span>)))
                                            }
                                        </div>
                                    </div>
                                </>)
                        })
                    }
                    {/* {
                        data.map((item, index) => {
                            return (
                                <>
                                    {index > 0 && divider()}
                                    <div key={index} className="skill-section w-full ml-12 flex flex-row">
                                        <div key={index + 1 + item.type} className="texteditor skill-section-title w-64 flex-shrink-0 mr-2">{item.type}</div>
                                        <div key={index + 2 + item.type} className="skill-section-list flex-1 w-full mx-auto p-4 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-6">
                                            {
                                                item.list.map((skill, ind) => (
                                                    <div key={ind + skill} className="skill-section-list-item text-center">
                                                        <div key={ind + 4 + skill} className="skill-section-list-item-icon">
                                                            <div key={ind + 5 + skill} className='skill-icon'>{skill.icon}</div>
                                                        </div>
                                                        <div key={ind + 6} className="skill-section-list-item-name">{skill.name}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    } */}
                </section >
            </div >
            <BackToTop />
            <Footer></Footer>
        </>
    )
}