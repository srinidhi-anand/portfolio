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

                <Link href="/" className={`link ${pathname === '/' ? 'active' : ''}`}><li>Home</li></Link>

                <Link href="/about" className={`link ${pathname === '/about' ? 'active' : ''}`}><li>About</li></Link>

                <Link href="/skills" className={`link ${pathname === '/skills' ? 'active' : ''}`}><li>Skills</li></Link>

                <Link className={`link ${pathname === '/services' ? 'active' : ''}`} href="/services"><li>Services</li></Link>

                <Link className={`link ${pathname === '/projects' ? 'active' : ''}`} href="/projects"><li>Projects</li></Link>

                <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} href="/contact"><li>Contact</li></Link>
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