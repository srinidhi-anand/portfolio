import Image from "next/image";
import React from "react";
import {Button} from "@nextui-org/button";
import { SocialIcon } from 'react-social-icons'
import "../../src/app/welcome.css";
import "./globals.css";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className='welcome'>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="m-5 w-full">
        <h1 className="welcome-title left-align breakword text-black fontfamily">Srinidhi A</h1>
        <br></br>
        <span className="welcome-caption left-align breakword bold italic text-black fontfamily"><i>Freelance Full Stack Application Developer</i></span>
        <br></br><br></br><br></br><br></br>
        <p className="bold left-align text-black fontfamily welcome-txt">Are you seeking to establish a quick, user-friendly website or any application to showcase your goods or company business? or in need of any kind of assistance? or would like to make project inquiries? You are at the right place.</p>
        <br></br>
        <h4 className="bold left-align text-black fontfamily welcome-txt">Just say Hi 👋 Don't hesitate to reach me. I'll try to my best to reply. 😊 Click bio to know my works & offered services.</h4>

        <br></br>
        <br></br>
        <br></br>
        <Button color="primary" className="project-module-button button-module"> <a className="button-module preserve-whitespace--nowrap" href="/about">SHORT BIO !</a> </Button>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
      </main>
    </div>
  );
}
