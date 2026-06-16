import { Link } from "react-router-dom";
import type { Creator } from "../data";

export default function CreatorCard({ c }: { c: Creator }) {
  return (
    <div className="creator-card">
      <Link to={`/creator?id=${c.id}`} className="creator-photo">
        <span className={`creator-badge ${c.badgeClass}`}>{c.badge}</span>
        <img src={c.photo} alt={c.name} />
      </Link>
      <div className="creator-info">
        <div className="creator-name-row">
          <h3>
            <Link to={`/creator?id=${c.id}`}>{c.name}</Link>
          </h3>
          <span className="creator-rate">${c.rate}/hr</span>
        </div>
        <div className="creator-role">{c.role}</div>
        <div className="creator-rating">
          ★★★★★ <span className="num">{c.rating}</span>
        </div>
        <div className="tag-row">
          {c.tags.map((t) => (
            <span key={t} className="tag-pill">
              {t}
            </span>
          ))}
        </div>
        <div className="creator-actions">
          <Link to={`/post-request?creator=${c.id}`} className="btn btn-primary">
            Request Quote
          </Link>
          <Link to={`/creator?id=${c.id}`} className="btn btn-outline">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
