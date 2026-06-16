import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import CreatorCard from "../components/CreatorCard";
import { ReveereIcon } from "../icons";
import { REVEREE_CATEGORIES, REVEREE_CREATORS } from "../data";
import { useToast } from "../toast";

export default function Creator() {
  const [searchParams] = useSearchParams();
  const { showToast } = useToast();
  const [qrName, setQrName] = useState("");
  const [qrMessage, setQrMessage] = useState("");

  const id = searchParams.get("id") || REVEREE_CREATORS[0].id;
  const creator =
    REVEREE_CREATORS.find((c) => c.id === id) || REVEREE_CREATORS[0];
  const category = REVEREE_CATEGORIES.find((cat) => cat.slug === creator.category);

  const related = REVEREE_CREATORS.filter(
    (c) => c.category === creator.category && c.id !== creator.id
  ).slice(0, 4);
  const fallback = related.length
    ? related
    : REVEREE_CREATORS.filter((c) => c.id !== creator.id).slice(0, 4);

  const tags = (
    <>
      {creator.tags.map((t) => (
        <span key={t} className="tag-pill">
          {t}
        </span>
      ))}
    </>
  );

  return (
    <Layout title={`${creator.name} — Reveree`}>
      <style>{`
        .profile-header {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 36px;
          align-items: center;
        }
        @media (max-width: 700px) {
          .profile-header { grid-template-columns: 1fr; text-align: center; }
          .profile-header .creator-photo-lg { margin: 0 auto; }
        }
        .creator-photo-lg {
          width: 220px;
          height: 220px;
          border-radius: var(--radius);
          overflow: hidden;
          position: relative;
        }
        .creator-photo-lg img { width: 100%; height: 100%; object-fit: cover; }
        .profile-meta { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; margin: 10px 0 16px; }
        .profile-rate { font-family: var(--font-display); font-weight: 800; font-size: 24px; color: var(--teal-dark); }
        .profile-location { color: var(--gray-text); font-size: 15px; display: flex; align-items: center; gap: 8px; }
        .profile-location .icon-box { background: transparent; color: var(--teal-dark); width: 20px; height: 20px; }
        .profile-location .icon-box svg { width: 18px; height: 18px; }
      `}</style>

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/creators">Creators</Link> /{" "}
            <span id="crumb-current">{creator.name}</span>
          </div>

          <div className="profile-header">
            <div className="creator-photo-lg">
              <span className={`creator-badge ${creator.badgeClass}`} id="profile-badge">
                {creator.badge}
              </span>
              <img id="profile-photo" src={creator.photo} alt={creator.name} />
            </div>
            <div>
              <h1 id="profile-name">{creator.name}</h1>
              <div
                id="profile-role"
                style={{ fontSize: "18px", color: "var(--gray-text)", marginTop: "4px" }}
              >
                {creator.role} · {category ? category.name : ""}
              </div>
              <div className="profile-meta">
                <span className="profile-rate" id="profile-rate">
                  ${creator.rate}/hr
                </span>
                <span
                  className="creator-rating"
                  id="profile-rating"
                  style={{ fontSize: "16px" }}
                >
                  ★★★★★ <span className="num">{creator.rating}</span>{" "}
                  <span style={{ color: "var(--gray-text)", fontWeight: 500 }}>
                    ({creator.reviews} reviews)
                  </span>
                </span>
                <span className="profile-location" id="profile-location">
                  <ReveereIcon name="location-pin" size="sm" /> {creator.location}
                </span>
              </div>
              <div className="tag-row" id="profile-tags">
                {tags}
              </div>
              <div
                className="creator-actions"
                style={{ marginTop: "24px", maxWidth: "420px" }}
              >
                <Link
                  to={`/post-request?creator=${creator.id}`}
                  id="profile-quote-link"
                  className="btn btn-primary"
                >
                  Request Quote
                </Link>
                <Link to="/post-request" className="btn btn-outline">
                  Post a Request Instead
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="two-col">
            <div>
              <h2 style={{ marginBottom: "16px" }}>About</h2>
              <p
                id="profile-bio"
                style={{
                  color: "var(--gray-text)",
                  fontSize: "16px",
                  marginBottom: "24px",
                }}
              >
                {creator.bio}
              </p>

              <h2 style={{ marginBottom: "16px" }}>Skills &amp; specialties</h2>
              <div className="tag-row" id="profile-tags-2">
                {tags}
              </div>
            </div>
            <div className="form-card" style={{ margin: 0 }}>
              <h1 style={{ fontSize: "22px" }}>Quick request</h1>
              <p className="sub">
                Send a short message and Reveree will notify{" "}
                <span id="profile-name-inline">{creator.name}</span> directly.
              </p>
              <form
                id="quick-request-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setQrName("");
                  setQrMessage("");
                  showToast(`Request sent to ${creator.name}!`);
                }}
              >
                <div className="form-group">
                  <label htmlFor="qr-name">Your name</label>
                  <input
                    type="text"
                    id="qr-name"
                    required
                    placeholder="Jane Smith"
                    value={qrName}
                    onChange={(e) => setQrName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="qr-message">What do you need help with?</label>
                  <textarea
                    id="qr-message"
                    required
                    placeholder="Tell them about your project..."
                    value={qrMessage}
                    onChange={(e) => setQrMessage(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section alt">
        <div className="container">
          <div className="section-head">
            <h2>More creators you might like</h2>
          </div>
          <div className="creators-grid" id="related-grid">
            {fallback.map((c) => (
              <CreatorCard key={c.id} c={c} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
