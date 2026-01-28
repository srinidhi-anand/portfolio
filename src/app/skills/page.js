'use client'

import "../welcome.css";
import "../about/about.css";
import "../globals.css";
import "./skills.css";
import "../title.css";
import Header from "../components/header";
import Title from "../components/title";
import BackToTop from "../components/backtotop";
import { skillsData } from "./skillcard";

function divider() {
    return (<div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-gray-400"></div>
        <div class="flex-grow border-t border-gray-400"></div>
    </div>)
}

export default function Skills() {
    const data = skillsData;

    return (
        <>
            <Header />
            <Title name="Skills" />
            {
                data.map((item, index) => {
                    return (
                        <>
                            {index > 0 && divider()}
                            <div className="skill-section w-full ml-12 flex flex-row">
                                <div className="texteditor skill-section-title w-64 flex-shrink-0 mr-2">{item.type}</div>
                                <div className="skill-section-list flex-1 w-full mx-auto p-4 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-6">
                                    {
                                        item.list.map((skill, index) => (
                                            <div key={index} className="skill-section-list-item text-center">
                                                <div className="skill-section-list-item-icon">
                                                    <div className='skill-icon'>{skill.icon}</div>
                                                </div>
                                                <div className="skill-section-list-item-name">{skill.name}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </>
                    )
                })
            }
            <BackToTop />
        </>
    )
}