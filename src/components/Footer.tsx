import { useState } from "react";
import { Link } from "react-router-dom";
import { ReveereRawIcon } from "../icons";
import { useToast } from "../toast";

export default function Footer() {
  const { showToast } = useToast();
  const [email, setEmail] = useState("");

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="footer-logo">
              <ReveereRawIcon name="location-pin" /> Reveree
            </Link>
            <p>
              The freelance marketplace connecting clients with skilled creators
              worldwide — for virtual sessions, in-person work, and everything in
              between.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li>
                <Link to="/service?cat=personal-training">Personal Training</Link>
              </li>
              <li>
                <Link to="/service?cat=creative-writing">Creative Writing</Link>
              </li>
              <li>
                <Link to="/service?cat=language-tutors">Language Tutors</Link>
              </li>
              <li>
                <Link to="/service?cat=coding-development">Coding &amp; Development</Link>
              </li>
              <li>
                <Link to="/service?cat=design-branding">Design &amp; Branding</Link>
              </li>
              <li>
                <Link to="/service?cat=photography-video">Photography &amp; Video</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/how-it-works">How It Works</Link>
              </li>
              <li>
                <Link to="/creators">Browse Creators</Link>
              </li>
              <li>
                <Link to="/signup?role=creator">Become a Creator</Link>
              </li>
              <li>
                <Link to="/post-request">Post a Request</Link>
              </li>
              <li>
                <Link to="/how-it-works#trust">Trust &amp; Safety</Link>
              </li>
              <li>
                <Link to="/how-it-works#faq">FAQs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Newsletter</h4>
            <p>
              Get the latest creator spotlights and platform updates, straight to
              your inbox.
            </p>
            <form
              className="newsletter-form"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
                showToast("Subscribed! Welcome to the Reveree newsletter.");
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary btn-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Reveree LLC. All rights reserved.</span>
          <span>Designed for freelancers &amp; clients everywhere</span>
        </div>
      </div>
    </footer>
  );
}
