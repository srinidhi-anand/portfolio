import "../welcome.css";
import "../about/about.css";
import "../globals.css";
import "../subheader.css";
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from "next/navigation";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function SubHeader() {
    const pathname = usePathname();

    return (
        <>
            <div className="w-full pl-28 flex flex-row">
                <div className="w-1/6"><Image
                    src='/logo.jpeg'
                    alt='logo'
                    width='50'
                    height='50'
                /></div>
                <div className="w-full content-center text-right back-btn"><ul className="sub-heading title preserve-whitespace e2e-site-logo-text flex flex-row">
                    <li>
                        <Link href="/projects" className={`btn link ${pathname === '/' ? 'active' : ''}`}>Back To Projects</Link>
                    </li>
                    <li>
                        <Link href="/" className={`btn link ${pathname === '/' ? 'active' : ''}`}>Main Page</Link>
                    </li>
                </ul></div>
            </div>

        </>
    )
};