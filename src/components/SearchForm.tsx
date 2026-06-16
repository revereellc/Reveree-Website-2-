import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { useNavigate } from "react-router-dom";
import { REVEREE_SEARCH_INDEX, type SearchIndexItem } from "../data";
import { ReveereIcon } from "../icons";
import { toRoutePath } from "../routes";

interface SearchFormProps {
  placeholder?: string;
  formStyle?: CSSProperties;
  wrapStyle?: CSSProperties;
}

// Mirrors highlightMatch from the original main.js (React-safe: returns nodes).
function HighlightMatch({ label, query }: { label: string; query: string }) {
  const idx = label.toLowerCase().indexOf(query);
  if (idx === -1) return <>{label}</>;
  return (
    <>
      {label.slice(0, idx)}
      <strong>{label.slice(idx, idx + query.length)}</strong>
      {label.slice(idx + query.length)}
    </>
  );
}

export default function SearchForm({
  placeholder = "What service are you looking for?",
  formStyle,
  wrapStyle,
}: SearchFormProps) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [matches, setMatches] = useState<SearchIndexItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const inputId = useId();

  const query = value.trim().toLowerCase();

  // Recompute matches on input (matches original: filter + slice(0,8))
  useEffect(() => {
    setActiveIndex(-1);
    if (query.length === 0) {
      setOpen(false);
      setMatches([]);
      return;
    }
    const found = REVEREE_SEARCH_INDEX.filter((item) =>
      item.label.toLowerCase().includes(query)
    ).slice(0, 8);
    setMatches(found);
    setOpen(true);
  }, [query]);

  // Close on outside click (original used document click listener)
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  function submitSearch(q: string) {
    const trimmed = (q || "").trim();
    const params = trimmed ? `?q=${encodeURIComponent(trimmed)}` : "";
    navigate(`/services${params}`);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || matches.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % matches.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + matches.length) % matches.length);
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && matches[activeIndex]) {
        e.preventDefault();
        navigate(toRoutePath(matches[activeIndex].url));
        setOpen(false);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div className="search-wrap" ref={wrapRef} style={wrapStyle}>
      <form
        className="search-form"
        role="search"
        autoComplete="off"
        style={formStyle}
        onSubmit={(e) => {
          e.preventDefault();
          submitSearch(value);
        }}
      >
        <input
          id={inputId}
          type="search"
          name="q"
          placeholder={placeholder}
          aria-label="Search for a service"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          onFocus={() => {
            if (matches.length > 0 && value.trim().length > 0) setOpen(true);
          }}
        />
        <button type="submit" className="search-btn" aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </button>
      </form>

      <div className={`search-suggestions${open ? " open" : ""}`}>
        {open && matches.length === 0 && query.length > 0 ? (
          <div className="no-results">
            No matches for "{query}" — try Web Development, Yoga, or Spanish
          </div>
        ) : (
          matches.map((item, i) => (
            <a
              key={`${item.url}-${i}`}
              href={toRoutePath(item.url)}
              className={i === activeIndex ? "active" : undefined}
              onClick={(e) => {
                e.preventDefault();
                navigate(toRoutePath(item.url));
                setOpen(false);
              }}
            >
              <span className="tag-emoji">
                <ReveereIcon name={item.icon} size="sm" />
              </span>
              <span>
                <HighlightMatch label={item.label} query={query} />
              </span>
            </a>
          ))
        )}
      </div>
    </div>
  );
}
