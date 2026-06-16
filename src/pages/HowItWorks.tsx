import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function HowItWorks() {
  return (
    <Layout title="How It Works — Reveree">
      <style>{`
        .faq-item { border-bottom: 1px solid var(--gray-light); padding: 22px 0; }
        .faq-item summary { font-weight: 700; font-size: 16.5px; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary .plus { font-size: 22px; color: var(--teal); transition: transform 0.2s ease; }
        .faq-item[open] summary .plus { transform: rotate(45deg); }
        .faq-item p { color: var(--gray-text); margin-top: 12px; font-size: 15px; }
      `}</style>

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">● How It Works</span>
          <h1>Simple for clients. Rewarding for creators.</h1>
          <p>
            Whether you're hiring help or offering your skills, Reveree makes the
            process fast, transparent, and secure.
          </p>
        </div>
      </section>

      {/* For Clients */}
      <section className="page-section" id="clients">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ color: "var(--teal-dark)" }}>
                For Clients
              </span>
              <h2>Post a request and hire in days, not weeks</h2>
            </div>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">01</div>
              <h3>Describe your project</h3>
              <p>
                Tell us what you need — from a coding mentor to a wedding
                photographer — and your budget and timeline.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">02</div>
              <h3>Compare proposals</h3>
              <p>
                Qualified creators respond with quotes, portfolios, and
                availability. Message them directly to ask questions.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">03</div>
              <h3>Hire &amp; collaborate</h3>
              <p>
                Pay securely through Reveree, work virtually or in person, and
                release payment once you're satisfied.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "32px" }}>
            <Link to="/post-request" className="btn btn-primary">
              Post a Request
            </Link>
          </div>
        </div>
      </section>

      {/* For Creators */}
      <section className="page-section alt" id="creators">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ color: "var(--teal-dark)" }}>
                For Creators
              </span>
              <h2>Turn your skills into income</h2>
            </div>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">01</div>
              <h3>Build your profile</h3>
              <p>
                Showcase your skills, set your hourly rate, and add a portfolio so
                clients know what to expect.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">02</div>
              <h3>Send proposals</h3>
              <p>
                Browse open requests in your category and respond to the ones that
                match your skills and schedule.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">03</div>
              <h3>Get paid securely</h3>
              <p>
                Funds are held safely until the work is delivered. Withdraw earnings
                to your bank or preferred payout method anytime.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "32px" }}>
            <Link to="/signup?role=creator" className="btn btn-primary">
              Become a Creator
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="page-section" id="trust">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow" style={{ color: "var(--teal-dark)" }}>
                Trust &amp; Safety
              </span>
              <h2 style={{ margin: "8px 0 18px" }}>Every transaction is protected</h2>
              <p
                style={{
                  color: "var(--gray-text)",
                  fontSize: "16px",
                  marginBottom: "16px",
                }}
              >
                All creators on Reveree go through an identity verification process
                before they can accept work. Payments are held securely until both
                sides confirm the job is complete.
              </p>
              <p
                style={{
                  color: "var(--gray-text)",
                  fontSize: "16px",
                  marginBottom: "16px",
                }}
              >
                If something goes wrong, our support team helps mediate disputes and
                can issue refunds when work doesn't meet the agreed scope.
              </p>
              <p style={{ color: "var(--gray-text)", fontSize: "16px" }}>
                For in-person services, we recommend meeting in public spaces for
                first sessions and always communicating through the Reveree platform.
              </p>
            </div>
            <img
              className="img-frame"
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop"
              alt="Secure payments illustration"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-section alt" id="faq">
        <div className="container">
          <div className="section-head">
            <h2>Frequently asked questions</h2>
          </div>
          <div style={{ maxWidth: "760px" }}>
            <details className="faq-item" open>
              <summary>
                How much does Reveree cost? <span className="plus">+</span>
              </summary>
              <p>
                Creating an account and posting requests is free. Reveree charges a
                small service fee on completed transactions, which is shown upfront
                before you confirm a booking.
              </p>
            </details>
            <details className="faq-item">
              <summary>
                Can I work with creators in another country?{" "}
                <span className="plus">+</span>
              </summary>
              <p>
                Yes — Reveree connects clients and creators across 90+ countries.
                Many services, like tutoring, coding, and design, are delivered
                entirely online.
              </p>
            </details>
            <details className="faq-item">
              <summary>
                What if I'm not happy with the work? <span className="plus">+</span>
              </summary>
              <p>
                Funds are held until you confirm the work meets your request. If
                there's an issue, our support team can help mediate a resolution or
                refund.
              </p>
            </details>
            <details className="faq-item">
              <summary>
                How do I get paid as a creator? <span className="plus">+</span>
              </summary>
              <p>
                Once a client confirms a completed job, funds are released to your
                Reveree balance and can be withdrawn to your bank account or
                preferred payout method.
              </p>
            </details>
            <details className="faq-item">
              <summary>
                Do I need experience to join as a creator?{" "}
                <span className="plus">+</span>
              </summary>
              <p>
                You'll need to demonstrate relevant skills or experience during
                signup. We review profiles to maintain quality across the
                marketplace.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to get started?</h2>
            <p>Join thousands of clients and creators already using Reveree.</p>
            <div className="cta-actions">
              <Link to="/post-request" className="btn btn-primary">
                Post a Request
              </Link>
              <Link
                to="/signup?role=creator"
                className="btn btn-outline"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "var(--white)" }}
              >
                Become a Creator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
