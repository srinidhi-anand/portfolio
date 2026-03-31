'use client';

import './project.css';
import Nav from '../components/navbar';
import Footer from '../components/footer';
import { projectCards } from './projectDetailts';

export default function Project() {
    const hasFeatures = Object.values(projectCards).filter(i => i.isFeatured);
    const hasNormals = Object.values(projectCards).filter(i => !i.isFeatured);
    return (
        <>
            <Nav />
            <div className="page-section" id="sr-projects">
                <section className="sr-projects">
                    <div className="sr-section-title">Projects</div>
                    <div className="sr-section-sub">R&D and production systems built across AI, fintech, and developer tooling</div>
                    {console.log([...new Set(Object.values(projectCards).map(i => i.isFeatured))])}
                    <div className="sr-proj-featured" >
                        {
                            hasFeatures.map((v, index) => {
                                return (
                                    <><span className="sr-feat-badge" key={v.name + index}>{v.badge}</span><h3>{v.name}</h3><p>{v.desc}</p><div className="sr-proj-meta">

                                        {Object.keys(v.meta).map((k, i) => {
                                            <div className="sr-proj-meta-item">
                                                {k === 'normal' && <span>{v.meta[k]}</span>}
                                                {k === 'strong' && <strong>{v.meta[k]}</strong>}
                                            </div>;
                                        })}
                                    </div><div className="proj-stack">
                                            {(v.stack).map((item, ind) => <span key={ind + item} className="sr-proj-tech teal">{item}</span>)}
                                        </div></>
                                )
                            })
                        }
                    </div>
                    <div className="sr-proj-grid" >
                        {
                            hasNormals.map((v, index) => {
                                return (<div className="sr-proj-card" key={v.name + index}>
                                    {v.isPublished && <span
                                        className='float-end text-[9px] font-medium p-[3px] rounded-full bg-[#EAF3DE] text-[#27500A] border border-[#97C459]' >
                                        Published
                                    </span>}
                                    <div className="sr-proj-card-icon" key={v.name + (index + 1)}>{v.icon}</div>
                                    <h3>{v.name}</h3>
                                    {v.links &&
                                        <div className="proj-links">
                                            {Object.entries(v.links).map(([k, v], i) => {
                                                <a href={v[k]}
                                                    target="_blank" rel="noopener noreferrer"
                                                    className={`proj-link-${k === 'GitHub' || k === 'LinkedIn' ? 'gh' : 'npm'}`}>
                                                    {k} ↗
                                                </a>
                                            })}
                                        </div>}
                                    <p>{v.desc}</p>
                                    <div className="sr-proj-card-stack">
                                        {v.stack.map((item, i) => (<span key={i + item} className="sr-proj-tech">Node.js</span>))}
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                </section >
                <Footer />
            </div >
        </>
    )
}
