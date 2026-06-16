import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import { REVEREE_CATEGORIES } from "../data";
import { useToast } from "../toast";

type Role = "client" | "creator";

export default function Signup() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [role, setRole] = useState<Role>(
    searchParams.get("role") === "creator" ? "creator" : "client"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const isCreator = role === "creator";

  const title = isCreator ? "Become a creator" : "Create your account";
  const sub = isCreator
    ? "Set up your profile and start receiving requests from clients."
    : "Join Reveree to hire creators for any project.";
  const submitLabel = isCreator ? "Create Creator Account" : "Create Account";
  const loginLink = isCreator ? "/login?role=creator" : "/login?role=client";

  return (
    <Layout title="Sign Up — Reveree">
      <section className="page-section" style={{ paddingTop: "64px" }}>
        <div className="container">
          <div className="form-card">
            <h1 id="form-title">{title}</h1>
            <p className="sub" id="form-sub">
              {sub}
            </p>

            <div className="filter-row" style={{ marginBottom: "24px" }}>
              <button
                className={`filter-pill${role === "client" ? " active" : ""}`}
                id="client-pill"
                onClick={() => setRole("client")}
              >
                I'm a client
              </button>
              <button
                className={`filter-pill${role === "creator" ? " active" : ""}`}
                id="creator-pill"
                onClick={() => setRole("creator")}
              >
                I'm a creator
              </button>
            </div>

            <form
              id="signup-form"
              onSubmit={(e) => {
                e.preventDefault();
                showToast("Account created! (Demo only — nothing was saved.)");
                timerRef.current = setTimeout(() => navigate("/"), 1200);
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Jane Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div
                className="form-group"
                id="category-group"
                style={{ display: isCreator ? "block" : "none" }}
              >
                <label htmlFor="category">Primary category</label>
                <select
                  id="category"
                  required={isCreator}
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
              <button type="submit" className="btn btn-primary btn-block" id="submit-btn">
                {submitLabel}
              </button>
            </form>

            <div className="form-divider">or</div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <button
                className="btn btn-outline btn-block"
                id="google-btn"
                onClick={() =>
                  showToast("This is a demo — social signup isn't connected yet.")
                }
              >
                Continue with Google
              </button>
              <button
                className="btn btn-outline btn-block"
                id="apple-btn"
                onClick={() =>
                  showToast("This is a demo — social signup isn't connected yet.")
                }
              >
                Continue with Apple
              </button>
            </div>

            <div className="form-foot">
              Already have an account?{" "}
              <Link to={loginLink} id="login-link">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
