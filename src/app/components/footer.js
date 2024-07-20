import { SocialIcon } from 'react-social-icons';
import "../../app/welcome.css";
import "../../app/globals.css";

export default function Footer() {
    return (
        <div className="social-icons-module">
            <ul className="project-module breakword project-module-social_icons social">
            <li>
            <SocialIcon className="bg-cyanblue" target="_blank" url="https://www.linkedin.com/in/srinidhi-a-8a5308bb/" />
            </li>
            <li>
            <SocialIcon className="bg-black" target="_blank" url="https://github.com/srinidhi-anand" />
            </li>
            <li>
            <SocialIcon className="bg-black" target="_blank" url="https://medium.com/@srinidhi_anand" />
            </li>
            </ul>
        </div>
    )
}