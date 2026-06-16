import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  const location = useLocation();

  // Set document title per page (ports each page's <title>)
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);

  // Scroll to hash anchor after render (ports browser anchor behavior +
  // smooth scroll from html { scroll-behavior: smooth }).
  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
