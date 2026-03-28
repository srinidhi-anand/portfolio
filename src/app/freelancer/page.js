'use client';
import './testimonial.css';
import Header from './components/header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-6 gap-6">
        <section className='fl-hero'>
          <span className="fl-avail-badge bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full">
            ✅ Available for Projects
          </span>

          {/* New strong headline */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            I build full-stack web & mobile products<br />
            <span className="text-blue-600">from idea to deployment.</span>
          </h1>

          {/* Credibility line — replaces the vague old paragraph */}
          <p className="text-gray-500 text-lg max-w-xl">
            7+ years · 7+ projects delivered · Python, Next.js, React, Node.js ·
            E-commerce, SaaS, Mobile Apps
          </p>

          {/* Dual CTA */}
          <div className="flex gap-4 mt-4 fl-cta-group">
            <a href="/freelancer/projects"
              className="fl-btn-primary px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700">
              View My Work
            </a>
            <a href="/freelancer/contact"
              className="fl-btn-outline px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50">
              Hire Me
            </a>
          </div>

          {/* Trust strip */}
          <div className="fl-trust-strip mt-8 flex gap-8 text-sm text-gray-400">
            <span>⚡ Fast delivery</span>
            <span>🔒 NDA-friendly</span>
            <span>🌍 Remote-ready</span>
            <span>📦 End-to-end ownership</span>
          </div>
        </section>
        {/* Testimonials sneak */}
        <section className="fl-testimonials">
          <div className="fl-testimonials-inner">
            <h2>What clients say</h2>
            <div className="fl-testi-grid">
              <div className="fl-testi-card">
                <p className="fl-testi-text">"Srinidhi is very cooperative and did a great job in adding a billing section and integrating an API into an existing app. "</p>
                <div className="fl-testi-author"><strong>Upwork client</strong><span>E-Invoice</span></div>
              </div>
              <div className="fl-testi-card">
                <p className="fl-testi-text">"Srinidhi is skillful, pay attention to details, hard working and strive to solve any problem that arises. She is excellent in doing her job I recommend her very much and I'll definitely use her service again and again. She did an excellent job taking care of my e-invoice design and implementation."</p>
                <div className="fl-testi-author"><strong>Upwork client</strong><span>Digital Cash</span></div>
              </div>
              <div className="fl-testi-card">
                <p className="fl-testi-text">"Srinidhi's contributions have been invaluable to the success of the project with her above and beyond efforts in the production release. Thank you once again for her dedication and hard work!"</p>
                <div className="fl-testi-author"><strong>Nithyanandam</strong><span>Manager, PowerBI - Inforiver</span></div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}