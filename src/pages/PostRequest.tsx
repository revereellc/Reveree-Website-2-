import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import { REVEREE_CATEGORIES, REVEREE_CREATORS } from "../data";
import { useToast } from "../toast";

export default function PostRequest() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const catParam = searchParams.get("cat");
  const creatorId = searchParams.get("creator");
  const creator = creatorId
    ? REVEREE_CREATORS.find((c) => c.id === creatorId)
    : undefined;

  // Initial values mirror the original pre-fill logic.
  const initialCategory = creator
    ? creator.category
    : catParam || "";
  const initialTitle = creator ? `Project for ${creator.name}` : "";

  const [title, setTitle] = useState(initialTitle);
  const [category, setCategory] = useState(initialCategory);
  const [format, setFormat] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const formTitle = creator
    ? `Request a quote from ${creator.name}`
    : "Project details";
  const formSub = creator
    ? `Your request will be sent directly to ${creator.name} (${creator.role}).`
    : "The more detail you give, the better creators can respond with accurate quotes.";

  return (
    <Layout title="Post a Request — Reveree">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">● Post a Request</span>
          <h1>Tell us what you need</h1>
          <p>
            Fill out a few details and we'll match you with creators ready to help —
            most clients receive their first proposal within hours.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="form-card" style={{ maxWidth: "680px" }}>
            <h1 id="form-title">{formTitle}</h1>
            <p className="sub" id="form-sub">
              {formSub}
            </p>

            <form
              id="request-form"
              onSubmit={(e) => {
                e.preventDefault();
                const titleVal = title || "your project";
                showToast(
                  `Request "${titleVal}" posted! Creators will be in touch soon.`
                );
                timerRef.current = setTimeout(() => navigate("/"), 1400);
              }}
            >
              <div className="form-group">
                <label htmlFor="title">Project title</label>
                <input
                  type="text"
                  id="title"
                  required
                  placeholder="e.g. Build a portfolio website"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  {REVEREE_CATEGORIES.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="format">Format</label>
                <select
                  id="format"
                  required
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                >
                  <option value="">How would you like to work?</option>
                  <option value="virtual">Virtual / Remote</option>
                  <option value="in-person">In-person</option>
                  <option value="either">Either is fine</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Budget (USD)</label>
                <input
                  type="number"
                  id="budget"
                  min="0"
                  placeholder="e.g. 500"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Project description</label>
                <textarea
                  id="description"
                  required
                  placeholder="Describe what you need, your timeline, and any specific requirements..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Post Request
              </button>
            </form>

            <div className="form-foot">
              By posting, you agree to Reveree's{" "}
              <Link to="/how-it-works#trust">Trust &amp; Safety</Link> guidelines.
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
