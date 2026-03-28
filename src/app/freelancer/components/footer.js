import { SocialIcon } from 'react-social-icons';
import "../../welcome.css";
import "../../globals.css";

export default function Footer() {
    return (
        <><div className="social-icons-module footer">
            <ul className="project-module breakword project-module-social_icons social">
                <li>
                    <SocialIcon className="bg-black" bgColor="black" target="_blank" url="https://www.linkedin.com/in/srinidhi-a-8a5308bb/" />
                </li>
                <li>
                    <SocialIcon className="bg-black" bgColor="black" target="_blank" url="https://github.com/srinidhi-anand" />
                </li>
                <li>
                    <SocialIcon className="bg-black" bgColor="black" target="_blank" url="https://medium.com/@srinidhi_anand" />
                </li>
            </ul>
        </div>
            <footer className="fl-footer">© 2026 Srinidhi A · Built with Next.js &amp; Node.js</footer>
        </>
    )
}