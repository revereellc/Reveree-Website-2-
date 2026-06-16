import { Link, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import SearchForm from "../components/SearchForm";
import { ReveereIcon } from "../icons";
import { REVEREE_CATEGORIES, REVEREE_SEARCH_INDEX } from "../data";
import { toRoutePath } from "../routes";

export default function Services() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const hasQuery = !!(q && q.trim().length > 0);

  const query = hasQuery ? q!.trim().toLowerCase() : "";
  const matches = hasQuery
    ? REVEREE_SEARCH_INDEX.filter((item) =>
        item.label.toLowerCase().includes(query)
      )
    : [];

  const showAllCategories = !hasQuery || matches.length === 0;

  return (
    <Layout title="Explore Services — Reveree">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">● Explore Services</span>
          <h1 id="page-title">
            {hasQuery ? `Results for "${q}"` : "Every kind of skill, all in one place"}
          </h1>
          <p id="page-sub">
            {hasQuery
              ? "Browse matching categories, skills, and creators."
              : "From coding to coaching, browse 180+ categories and find the right creator for your project — virtual or in person."}
          </p>

          <SearchForm
            placeholder="Search categories, skills, or creators..."
            formStyle={{
              boxShadow: "0 8px 24px rgba(26,31,54,0.08)",
              border: "1px solid var(--gray-light)",
            }}
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          {hasQuery && (
            <div id="search-results-wrap">
              <div className="results-bar">
                <span className="count" id="results-count">
                  {matches.length} result{matches.length === 1 ? "" : "s"} found
                </span>
              </div>

              {matches.length === 0 ? (
                <div id="no-results" className="empty-state">
                  <h3>No results found</h3>
                  <p>Try a different search term, or browse all categories below.</p>
                  <div style={{ marginTop: "20px" }}>
                    <Link to="/services" className="btn btn-outline">
                      Browse all categories
                    </Link>
                  </div>
                </div>
              ) : (
                <div id="search-results-list" className="subcategory-grid">
                  {matches.map((item, i) => (
                    <Link
                      key={`${item.url}-${i}`}
                      to={toRoutePath(item.url)}
                      className="subcategory-pill"
                      style={{
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span style={{ display: "flex" }}>
                        <ReveereIcon name={item.icon} size="sm" />
                      </span>
                      <span>
                        <div>{item.label}</div>
                        <div
                          style={{
                            fontSize: "12px",
                            color: "var(--gray-text)",
                            fontWeight: 500,
                            marginTop: "2px",
                          }}
                        >
                          {item.type}
                        </div>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {showAllCategories && (
            <div id="all-categories-wrap">
              <div className="section-head">
                <h2>All categories</h2>
              </div>
              <div className="service-grid" id="all-services-grid">
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
          )}
        </div>
      </section>

      <section className="page-section alt">
        <div className="container">
          <div className="cta-banner">
            <h2>Can't find what you're looking for?</h2>
            <p>
              Post a request describing your project and let qualified creators come
              to you.
            </p>
            <div className="cta-actions">
              <Link to="/post-request" className="btn btn-primary">
                Post a Request
              </Link>
              <Link
                to="/how-it-works"
                className="btn btn-outline"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "var(--white)" }}
              >
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
