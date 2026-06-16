import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useToast } from "../toast";

export default function Login() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const role = searchParams.get("role");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  let title = "Log in to Reveree";
  let sub = "Welcome back! Enter your details to access your account.";
  let signupLink = "/signup";

  if (role === "creator") {
    title = "Log in as a creator";
    sub = "Access your dashboard, manage requests, and view earnings.";
    signupLink = "/signup?role=creator";
  } else if (role === "client") {
    title = "Log in as a client";
    sub = "Access your account to manage requests and hires.";
    signupLink = "/signup?role=client";
  }

  return (
    <Layout title="Log In — Reveree">
      <section className="page-section" style={{ paddingTop: "64px" }}>
        <div className="container">
          <div className="form-card">
            <h1 id="form-title">{title}</h1>
            <p className="sub" id="form-sub">
              {sub}
            </p>

            <form
              id="login-form"
              onSubmit={(e) => {
                e.preventDefault();
                showToast("Logged in! (Demo only — no account was created.)");
                timerRef.current = setTimeout(() => navigate("/"), 1200);
              }}
            >
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
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Log In
              </button>
            </form>

            <div className="form-divider">or</div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <button
                className="btn btn-outline btn-block"
                id="google-btn"
                onClick={() =>
                  showToast("This is a demo — social login isn't connected yet.")
                }
              >
                Continue with Google
              </button>
              <button
                className="btn btn-outline btn-block"
                id="apple-btn"
                onClick={() =>
                  showToast("This is a demo — social login isn't connected yet.")
                }
              >
                Continue with Apple
              </button>
            </div>

            <div className="form-foot">
              Don't have an account?{" "}
              <Link to={signupLink} id="signup-link">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
