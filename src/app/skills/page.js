'use client'

import "../welcome.css";
import "../about/about.css";
import "../globals.css";
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./skills.css";
import "../title.css";
import Header from "../components/header";
import Title from "../components/title";
import Footer from "../components/footer";
import BackToTop from "../components/backtotop";

export default function About() {
    const pathname = usePathname();

    const skillLabels = 'Languages ;Expert Tech Stacks;Python Frameworks;Frontend Tool ;Backend Tools ;React JS Tools; Databases;Project Management Tools;Version Control System ;Amazon Web Services ;Software Design Patterns;Web Services;IDE ;Operating Systems';

    const skillValues = 'Python, R, React JS, JavaScript, Angular JS;Node JS, Typescript, Python;Kivy, Django;Ionic;Postman, Swagger;Material UI, TailWind UI, React Bootstrap, Axios;MSSQL, MySql, PostgreSQL, snowflake, MongoDB;JIRA; GitHub, Bit bucket, Git;AWS S3 , RDB;MVC, Agile SDLC methodology;Rest API;Visual Studio Code, Sublime, PyCharm;Windows 10, Mac, Ubuntu'.split(";");

    return (
        <>
        <Header />
        <Title name="Skills" />
        { skillLabels.split(';').map((i, index) => 
            <div key={index} className="container flex">
                <div key={'child1'+index} className="text-align-right w-1/2">
                    <span key={'child'+index} className="texteditor">
                        <span key={'child2'+index} className=" service texteditor">
                            {i.trim()}
                        </span>
                    </span>
                </div>
                <div key={'child3'+index} className="text-align-left w-1/2">
                    <span key={'child4'+index} className="texteditor">
                        <span key={'child5'+index} className=" service texteditor">
                            {skillValues[`${index}`].trim()}
                        </span>
                    </span>
                </div>
            </div>
        )}
        <BackToTop />
        </>
    )
}