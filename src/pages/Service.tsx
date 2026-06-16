import { useMemo, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import CreatorCard from "../components/CreatorCard";
import { ReveereIcon } from "../icons";
import { REVEREE_CATEGORIES, REVEREE_CREATORS } from "../data";

type SortBy = "rating" | "price-low" | "price-high";

export default function Service() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [sortBy, setSortBy] = useState<SortBy>("rating");

  const slug = searchParams.get("cat") || "personal-training";
  const category =
    REVEREE_CATEGORIES.find((c) => c.slug === slug) || REVEREE_CATEGORIES[0];

  // Highlighted subcategory from hash (ports the window.location.hash logic)
  const highlightedSub = location.hash
    ? decodeURIComponent(location.hash.slice(1))
    : null;

  const list = useMemo(() => {
    let result = REVEREE_CREATORS.filter((c) => c.category === category.slug);
    if (sortBy === "price-low") result = [...result].sort((a, b) => a.rate - b.rate);
    else if (sortBy === "price-high")
      result = [...result].sort((a, b) => b.rate - a.rate);
    else result = [...result].sort((a, b) => b.rating - a.rating);
    return result;
  }, [category.slug, sortBy]);

  return (
    <Layout title={`${category.name} — Reveree`}>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> /{" "}
            <span id="crumb-current">{category.name}</span>
          </div>
          <div className="service-icon-lg" id="cat-icon">
            <ReveereIcon name={category.icon} size="lg" />
          </div>
          <h1 id="cat-name">{category.name}</h1>
          <p id="cat-description">{category.description}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-head">
            <h2>Browse by specialty</h2>
          </div>
          <div className="subcategory-grid" id="subcategory-grid">
            {category.subcategories.map((sub) => {
              const isHighlight = highlightedSub === sub;
              return (
                <Link
                  key={sub}
                  to={`/services?q=${encodeURIComponent(sub)}`}
                  className="subcategory-pill"
                  id={`sub-${encodeURIComponent(sub)}`}
                  style={
                    isHighlight
                      ? {
                          borderColor: "var(--teal)",
                          background: "rgba(43,196,184,0.08)",
                          color: "var(--teal-dark)",
                        }
                      : undefined
                  }
                >
                  {sub}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section alt">
        <div className="container">
          <div className="results-bar">
            <div>
              <h2 style={{ marginBottom: "6px" }}>Available creators</h2>
              <span className="count" id="creator-count">
                {list.length} creator{list.length === 1 ? "" : "s"} available
              </span>
            </div>
            <select
              className="sort-select"
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortBy)}
            >
              <option value="rating">Sort: Highest rated</option>
              <option value="price-low">Sort: Price (low to high)</option>
              <option value="price-high">Sort: Price (high to low)</option>
            </select>
          </div>

          {list.length === 0 ? (
            <div className="empty-state" id="empty-creators">
              <h3>No creators in this category yet</h3>
              <p>
                Be the first to post a request and we'll match you when one becomes
                available.
              </p>
              <div style={{ marginTop: "20px" }}>
                <Link to="/post-request" className="btn btn-primary">
                  Post a Request
                </Link>
              </div>
            </div>
          ) : (
            <div className="creators-grid" id="creator-grid">
              {list.map((c) => (
                <CreatorCard key={c.id} c={c} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to get started?</h2>
            <p>Post a request and let creators in this category send you proposals.</p>
            <div className="cta-actions">
              <Link
                to={`/post-request?cat=${category.slug}`}
                className="btn btn-primary"
                id="cta-post-link"
              >
                Post a Request
              </Link>
              <Link
                to="/services"
                className="btn btn-outline"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "var(--white)" }}
              >
                Browse other categories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
