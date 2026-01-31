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
    return (<div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <div className="flex-grow border-t border-gray-400"></div>
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
            }
            <BackToTop />
        </>
    )
}