import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReveereIcon, ReveereRawIcon } from "../icons";

const chev = (
  <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function Header() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenItem, setMobileOpenItem] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Close dropdowns on outside click + Escape (ports initDropdowns)
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenItem(null);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenItem(null);
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpenItem(null);
    setMobileOpen(false);
    setMobileOpenItem(null);
  }, [location.key]);

  function toggleItem(label: string) {
    setOpenItem((prev) => (prev === label ? null : label));
  }

  const exploreLinks = (
    <>
      <Link to="/service?cat=personal-training">
        <ReveereIcon name="dumbbell" size="sm" />
        <span className="dropdown-text">
          Remote Personal Training<small>Train from anywhere</small>
        </span>
      </Link>
      <Link to="/service?cat=creative-writing">
        <ReveereIcon name="pen" size="sm" />
        <span className="dropdown-text">
          Creative Writing<small>Learn creative writing</small>
        </span>
      </Link>
      <Link to="/service?cat=language-tutors">
        <ReveereIcon name="chat" size="sm" />
        <span className="dropdown-text">
          Language Tutors<small>Hindi, Japanese &amp; more</small>
        </span>
      </Link>
      <Link to="/service?cat=coding-development">
        <ReveereIcon name="code" size="sm" />
        <span className="dropdown-text">
          Coding &amp; Development<small>Build, deploy, learn &amp; ship</small>
        </span>
      </Link>
      <Link to="/service?cat=design-branding">
        <ReveereIcon name="palette" size="sm" />
        <span className="dropdown-text">
          Design &amp; Branding<small>Logos, UI, visual identity</small>
        </span>
      </Link>
      <Link to="/service?cat=photography-video">
        <ReveereIcon name="camera" size="sm" />
        <span className="dropdown-text">
          Photography &amp; Video<small>Shoot, edit, produce</small>
        </span>
      </Link>
      <div className="dropdown-divider" />
      <Link to="/services">View all categories →</Link>
    </>
  );

  const creatorLinks = (
    <>
      <Link to="/signup?role=creator">
        Create your profile<small>Set up your services &amp; rates</small>
      </Link>
      <Link to="/how-it-works#creators">
        How payouts work<small>Get paid securely</small>
      </Link>
      <Link to="/creators">
        Browse top creators<small>See what others offer</small>
      </Link>
      <Link to="/how-it-works">
        Creator success guide<small>Tips to win more clients</small>
      </Link>
    </>
  );

  const howLinks = (
    <>
      <Link to="/how-it-works#clients">
        For clients<small>Post a request &amp; hire</small>
      </Link>
      <Link to="/how-it-works#creators">
        For creators<small>Offer your services</small>
      </Link>
      <Link to="/how-it-works#trust">
        Trust &amp; safety<small>Payments and disputes</small>
      </Link>
      <Link to="/how-it-works#faq">
        FAQs<small>Common questions</small>
      </Link>
    </>
  );

  const loginLinks = (
    <>
      <Link to="/login?role=client">
        Log in as a client<small>Hire freelancers</small>
      </Link>
      <Link to="/login?role=creator">
        Log in as a creator<small>Manage your services</small>
      </Link>
      <div className="dropdown-divider" />
      <Link to="/signup">
        Create an account<small>New to Reveree?</small>
      </Link>
    </>
  );

  // Mobile (no <small> subtitles, matching original mobile markup)
  const exploreMobile = (
    <>
      <Link to="/service?cat=personal-training">
        <ReveereIcon name="dumbbell" size="sm" />
        <span className="dropdown-text">Remote Personal Training</span>
      </Link>
      <Link to="/service?cat=creative-writing">
        <ReveereIcon name="pen" size="sm" />
        <span className="dropdown-text">Creative Writing</span>
      </Link>
      <Link to="/service?cat=language-tutors">
        <ReveereIcon name="chat" size="sm" />
        <span className="dropdown-text">Language Tutors</span>
      </Link>
      <Link to="/service?cat=coding-development">
        <ReveereIcon name="code" size="sm" />
        <span className="dropdown-text">Coding &amp; Development</span>
      </Link>
      <Link to="/service?cat=design-branding">
        <ReveereIcon name="palette" size="sm" />
        <span className="dropdown-text">Design &amp; Branding</span>
      </Link>
      <Link to="/service?cat=photography-video">
        <ReveereIcon name="camera" size="sm" />
        <span className="dropdown-text">Photography &amp; Video</span>
      </Link>
      <Link to="/services">View all categories →</Link>
    </>
  );

  const creatorMobile = (
    <>
      <Link to="/signup?role=creator">Create your profile</Link>
      <Link to="/how-it-works#creators">How payouts work</Link>
      <Link to="/creators">Browse top creators</Link>
    </>
  );

  const howMobile = (
    <>
      <Link to="/how-it-works#clients">For clients</Link>
      <Link to="/how-it-works#creators">For creators</Link>
      <Link to="/how-it-works#trust">Trust &amp; safety</Link>
      <Link to="/how-it-works#faq">FAQs</Link>
    </>
  );

  const loginMobile = (
    <>
      <Link to="/login?role=client">Log in as a client</Link>
      <Link to="/login?role=creator">Log in as a creator</Link>
      <Link to="/signup">Create an account</Link>
    </>
  );

  const desktopItems: { label: string; dropdown: ReactNode }[] = [
    { label: "Explore Services", dropdown: exploreLinks },
    { label: "Become a Creator", dropdown: creatorLinks },
    { label: "How It Works", dropdown: howLinks },
    { label: "Log In", dropdown: loginLinks },
  ];

  const mobileItems: { label: string; dropdown: ReactNode }[] = [
    { label: "Explore Services", dropdown: exploreMobile },
    { label: "Become a Creator", dropdown: creatorMobile },
    { label: "How It Works", dropdown: howMobile },
    { label: "Log In", dropdown: loginMobile },
  ];

  return (
    <header className="site-header">
      <div className="container nav-bar">
        <Link to="/" className="logo">
          <span className="logo-mark">
            <ReveereRawIcon name="location-pin" />
          </span>
          Reveree
        </Link>

        <nav className="nav-links" ref={navRef}>
          {desktopItems.map((item) => (
            <div
              key={item.label}
              className={`nav-item${openItem === item.label ? " open" : ""}`}
            >
              <button
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  toggleItem(item.label);
                }}
              >
                {item.label}
                {chev}
              </button>
              <div className="dropdown">{item.dropdown}</div>
            </div>
          ))}
        </nav>

        <div className="nav-cta">
          <Link to="/post-request" className="btn btn-primary">
            Post a Request
          </Link>
          <button
            className="mobile-toggle"
            aria-label="Open menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      <div className="container">
        <nav className={`mobile-menu${mobileOpen ? " open" : ""}`}>
          {mobileItems.map((item) => (
            <div
              key={item.label}
              className={`nav-item${mobileOpenItem === item.label ? " open" : ""}`}
            >
              <button
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpenItem((prev) =>
                    prev === item.label ? null : item.label
                  );
                }}
              >
                {item.label}
                {chev}
              </button>
              <div className="dropdown">{item.dropdown}</div>
            </div>
          ))}
          <Link to="/post-request" className="btn btn-primary btn-block">
            Post a Request
          </Link>
        </nav>
      </div>
    </header>
  );
}
