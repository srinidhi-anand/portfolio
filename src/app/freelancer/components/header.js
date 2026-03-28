import "../../welcome.css";
import "../about/about.css";
import "../../globals.css";
import Link from 'next/link';
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const router = useRouter()
        ;
    return (
        <div className="site-header w-auto project-title flex flex-row">
            <div className="title-header w-[95%]">
                <ul className="w-[95%]">

                    <Link href="/freelancer" className={`link ${pathname === '/freelancer' ? 'active' : ''}`}><li>Home</li></Link>

                    <Link href="/freelancer/about" className={`link ${pathname === '/freelancer/about' ? 'active' : ''}`}><li>About</li></Link>

                    <Link href="/freelancer/skills" className={`link ${pathname === '/freelancer/skills' ? 'active' : ''}`}><li>Skills</li></Link>

                    <Link className={`link ${pathname === '/freelancer/services' ? 'active' : ''}`} href="/freelancer/services"><li>Services</li></Link>

                    <Link className={`link ${pathname === '/freelancer/projects' ? 'active' : ''}`} href="/freelancer/projects"><li>Projects</li></Link>

                    <Link className={`link ${pathname === '/freelancer/contact' ? 'active' : ''}`} href="/freelancer/contact"><li>Contact</li></Link>
                </ul>
            </div>
            <div className="align cursor-pointer" onClick={() => router.push('/')}>
                <Image
                    src='/logo.jpeg'
                    alt='logo'
                    width='50'
                    height='50'
                />
            </div>
        </div >
    )
};