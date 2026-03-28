import '../../globals.css';
import '../root.css';
import '../home.css';
import Image from 'next/image';
import { usePathname, useRouter } from "next/navigation";


export default function Nav() {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <nav className="sr-nav">
            <div className="sr-nav-logo cursor-pointer" onClick={() => router.push('/')}><Image
                src='/logo.jpeg'
                alt='logo'
                width='50'
                height='30'
            /></div>
            <div className="sr-nav-links">
                <a className={`link ${pathname === '/profile' ? 'active' : ''}`} href="/profile">Home</a>
                <a className={`link ${pathname === '/profile/about' ? 'active' : ''}`} href="/profile/about">About</a>
                <a className={`link ${pathname === '/profile/services' ? 'active' : ''}`} href="/profile/services">Experience</a>
                <a className={`link ${pathname === '/profile/skills' ? 'active' : ''}`} href="/profile/skills">Skills</a>
                <a className={`link ${pathname === '/profile/projects' ? 'active' : ''}`} href="/profile/projects">Projects</a>
                <a className={`link ${pathname === '/profile/contact' ? 'active' : ''}`} href="/profile/contact">Contact</a>
            </div>
            <a href="https://drive.google.com/file/d/1FUhDazPGG-J-rZnK5y0kz3iDMkEIlIlz/view?usp=sharing" className="sr-nav-cta" target="_blank" rel="noopener noreferrer">View Resume</a>
        </nav>
    )
}