'use client';

import Link from 'next/link'
import './main.css';

const metadata = {
    title: 'Srinidhi A.',
    description: 'Senior Full-stack architect, 7.5 years experience.',
}

// VERSION SWITCHER
export default function Main() {

    return (
        <main className="stage">

            {/* Vertical center line */}
            <div className="bg-line" aria-hidden="true" />

            {/* Header text */}
            <p className="greeting">portfolio · choose your path</p>
            <h1 className="name">{metadata.title}</h1>
            <p className="tagline">{metadata.description}</p>

            {/* Version cards */}
            <div className="cards">

                {/* Freelancer card */}
                <Link href="/freelancer" className="card card-fl" aria-label="View freelancer portfolio">
                    <div className="card-shimmer shimmer-fl" aria-hidden="true" />
                    <div className="card-dot dot-fl" aria-hidden="true" />
                    <p className="card-label label-fl">Freelancer</p>
                    <h2 className="card-title">Build something together</h2>
                    <p className="card-desc">
                        Web apps, e-commerce, mobile — end-to-end delivery.
                        Fast turnaround, full ownership.
                    </p>
                    <ul className="card-tags" aria-label="Tech stack">
                        <li className="tag tag-fl">Next.js</li>
                        <li className="tag tag-fl">React</li>
                        <li className="tag tag-fl">Node.js</li>
                        <li className="tag tag-fl">Python</li>
                    </ul>
                    <div className="card-cta cta-fl">
                        View freelance work
                        <span className="cta-arrow arrow-fl" aria-hidden="true">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                                <path
                                    d="M2 5h6M5.5 2.5L8 5l-2.5 2.5"
                                    stroke="#3B82F6"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </div>
                </Link>

                {/* Senior R&D card */}
                <Link href="/profile" className="card card-sr" aria-label="View senior R&D portfolio">
                    <div className="card-shimmer shimmer-sr" aria-hidden="true" />
                    <div className="card-dot dot-sr" aria-hidden="true" />
                    <p className="card-label label-sr">Senior · R&amp;D</p>
                    <h2 className="card-title">Research-driven engineering</h2>
                    <p className="card-desc">
                        Systems architecture, computer vision, deep learning.
                        Targeting product-company R&amp;D roles.
                    </p>
                    <ul className="card-tags" aria-label="Tech stack">
                        <li className="tag tag-sr">OpenCV</li>
                        <li className="tag tag-sr">CNN</li>
                        <li className="tag tag-sr">TensorFlow</li>
                        <li className="tag tag-sr">AWS</li>
                    </ul>
                    <div className="card-cta cta-sr">
                        View senior profile
                        <span className="cta-arrow arrow-sr" aria-hidden="true">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                                <path
                                    d="M2 5h6M5.5 2.5L8 5l-2.5 2.5"
                                    stroke="#8B7CF8"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </div>
                </Link>

            </div>

            <p className="footer-hint">hover to explore · click to enter</p>
        </main>
    )
}
