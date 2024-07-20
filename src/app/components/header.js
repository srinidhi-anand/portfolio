import "../welcome.css";
import "../about/about.css";
import "../globals.css";
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <div className="site-header project-title">
            <ul className="w-5/6">
                <li>
                    <Link href="/" className={`link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                </li>
                <li>
                    <Link href="/about" className={`link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
                </li>
                <li>
                    <Link href="/skills" className={`link ${pathname === '/skills' ? 'active' : ''}`}>Skills</Link>
                </li>
                <li>
                    <Link className={`link ${pathname === '/services' ? 'active' : ''}`} href="/services">Services</Link>
                </li>
                <li>
                    <Link className={`link ${pathname === '/projects' ? 'active' : ''}`} href="/projects">Projects</Link>
                </li>
                <li>
                    <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact</Link>
                </li>
            </ul>
            <div className="align w-96">
                <Image
                    src='/logo.jpeg'
                    alt='logo'
                    width='50'
                    height='50'
                />
            </div>
        </div>
    )
};