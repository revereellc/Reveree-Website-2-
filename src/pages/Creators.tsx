import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import CreatorCard from "../components/CreatorCard";
import { ReveereIcon } from "../icons";
import { REVEREE_CATEGORIES, REVEREE_CREATORS } from "../data";

type SortBy = "rating" | "price-low" | "price-high";

export default function Creators() {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("cat") || "all";
  const [activeCat, setActiveCat] = useState(initialCat);
  const [sortBy, setSortBy] = useState<SortBy>("rating");

  const allCats = [
    { slug: "all", name: "All Categories", icon: "sparkle" },
    ...REVEREE_CATEGORIES,
  ];

  const list = useMemo(() => {
    let result =
      activeCat === "all"
        ? [...REVEREE_CREATORS]
        : REVEREE_CREATORS.filter((c) => c.category === activeCat);

    if (sortBy === "price-low") result = [...result].sort((a, b) => a.rate - b.rate);
    else if (sortBy === "price-high")
      result = [...result].sort((a, b) => b.rate - a.rate);
    else result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCat, sortBy]);

  return (
    <Layout title="Browse Creators — Reveree">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">● Browse Creators</span>
          <h1>Meet the people behind the work</h1>
          <p>
            Filter by category to find vetted creators with the skills, rates, and
            ratings that fit your project.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="filter-row" id="filter-row">
            {allCats.map((c) => (
              <button
                key={c.slug}
                className={`filter-pill${c.slug === activeCat ? " active" : ""}`}
                data-slug={c.slug}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                onClick={() => setActiveCat(c.slug)}
              >
                <ReveereIcon name={c.icon} size="sm" /> {c.name}
              </button>
            ))}
          </div>

          <div className="results-bar">
            <span className="count" id="creator-count">
              {list.length} creator{list.length === 1 ? "" : "s"} found
            </span>
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
              <h3>No creators match this filter</h3>
              <p>
                Try a different category, or post a request and we'll find someone
                for you.
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
    </Layout>
  );
}
