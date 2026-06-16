import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SearchForm from "../components/SearchForm";
import CreatorCard from "../components/CreatorCard";
import { ReveereIcon } from "../icons";
import { REVEREE_CATEGORIES, REVEREE_CREATORS } from "../data";

export default function Home() {
  return (
    <Layout title="Reveree — Find Extraordinary Talent. Launch Your Next Project.">
      {/* Hero */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1600&auto=format&fit=crop"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-9774/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="eyebrow">● Freelance Marketplace</span>
          <h1>
            Find Extraordinary Talent.
            <br />
            Launch Your <span className="accent">Next Project.</span>
          </h1>
          <p className="lede">
            Connect with skilled freelancers, ready to make your goals into a
            reality — for virtual sessions, in-person work, and everything in
            between.
          </p>

          <SearchForm placeholder="What service are you looking for?" />

          <div className="popular-row">
            <span className="label">Popular:</span>
            <Link to="/service?cat=coding-development">Web Development</Link>
            <Link to="/service?cat=design-branding">Graphic Design</Link>
            <Link to="/service?cat=photography-video">Video Editing</Link>
            <Link to="/service?cat=creative-writing">Content Writing</Link>
            <Link to="/service?cat=design-branding#Social%20Media%20Graphics">
              SEO
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container stats-grid">
          <div>
            <div className="stat-num c-teal">42,000+</div>
            <div className="stat-label">Freelancers Available</div>
          </div>
          <div>
            <div className="stat-num c-coral">120,000+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div>
            <div className="stat-num c-purple">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div>
            <div className="stat-num c-pink">180+</div>
            <div className="stat-label">Service Categories</div>
          </div>
        </div>
      </section>

      {/* Service tiles */}
      <section className="services-section">
        <div className="container">
          <div className="section-head">
            <h2>Explore top categories</h2>
            <Link to="/services" className="view-all">
              View all services →
            </Link>
          </div>
          <div className="service-grid" id="home-service-grid">
            {REVEREE_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={`/service?cat=${cat.slug}`}
                className="service-card"
              >
                <div className="service-icon-box">
                  <ReveereIcon name={cat.icon} size="lg" />
                </div>
                <h3>{cat.name}</h3>
                <p>{cat.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client stories */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ color: "var(--teal-dark)" }}>
                Client Stories
              </span>
              <h2>What our clients say</h2>
            </div>
            <div className="rating-callout">
              <span className="stars">★★★★★</span>
              <span>4.9 / 5 from 8,400+ reviews</span>
            </div>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="quote-mark">"</div>
              <p className="review-text">
                I found an incredible web developer through Reveree in less than
                24 hours. The quality of talent here is unmatched — my app
                launched on time and under budget.
              </p>
              <div className="review-stars">★★★★★</div>
              <div className="review-person">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop"
                  alt="Sarah Mitchell"
                />
                <div>
                  <div className="name">Sarah Mitchell</div>
                  <div className="role">Startup Founder, NovaByte</div>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="quote-mark">"</div>
              <p className="review-text">
                Our rebrand was a huge undertaking. The designer we hired via
                Reveree delivered stunning work and communicated perfectly
                throughout. Will 100% use again.
              </p>
              <div className="review-stars">★★★★★</div>
              <div className="review-person">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                  alt="David Okonkwo"
                />
                <div>
                  <div className="name">David Okonkwo</div>
                  <div className="role">Marketing Director, Lumio</div>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="quote-mark">"</div>
              <p className="review-text">
                Posting a request took two minutes. Within a day I had five
                proposals from qualified freelancers. The whole process felt
                effortless compared to other platforms.
              </p>
              <div className="review-stars">★★★★★</div>
              <div className="review-person">
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=120&auto=format&fit=crop"
                  alt="Priya Nair"
                />
                <div>
                  <div className="name">Priya Nair</div>
                  <div className="role">Product Manager, StackCo</div>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="quote-mark">"</div>
              <p className="review-text">
                I've hired four different creators on Reveree — a photographer, a
                copywriter, an SEO specialist, and a video editor. Every single
                one exceeded expectations.
              </p>
              <div className="review-stars">★★★★★</div>
              <div className="review-person">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop"
                  alt="James Harrington"
                />
                <div>
                  <div className="name">James Harrington</div>
                  <div className="role">E-commerce Owner, CraftCo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ color: "var(--teal-dark)" }}>
                What We Stand For
              </span>
              <h2>Our values</h2>
            </div>
            <p style={{ maxWidth: "360px", color: "var(--gray-text)" }}>
              These are the principles that guide every decision we make at
              Reveree.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon icon-teal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3>Trust &amp; Safety</h3>
              <p>
                Every creator on Reveree is verified and reviewed. We protect
                both sides of every transaction with secure payments and dispute
                resolution.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon icon-coral">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3>Speed &amp; Simplicity</h3>
              <p>
                Post a request in minutes, receive proposals within hours. We
                strip away the friction so you can focus on what matters — great
                work.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon icon-purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Community First</h3>
              <p>
                Reveree is built around the people who use it. Freelancers and
                clients shape our platform through feedback, forums, and direct
                collaboration.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon icon-pink">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21l7.78-7.55 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Fair for Everyone</h3>
              <p>
                Transparent fees, no hidden charges. Creators keep the majority
                of what they earn and clients get honest, upfront pricing every
                time.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon icon-yellow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3>Quality Over Quantity</h3>
              <p>
                We don't just list anyone. Our creators are vetted for skill and
                professionalism so you always get access to genuinely excellent
                talent.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon icon-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>Global Reach</h3>
              <p>
                Work with talent from across the world. Reveree connects you to
                creators in 90+ countries, bringing diverse skills and fresh
                perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured creators */}
      <section className="creators-section">
        <div className="container">
          <div className="section-head">
            <h2>Featured Creators</h2>
            <Link to="/creators" className="view-all">
              View all →
            </Link>
          </div>
          <div className="creators-grid" id="home-creators-grid">
            {REVEREE_CREATORS.slice(0, 4).map((c) => (
              <CreatorCard key={c.id} c={c} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
