import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const categories = [
  { label: "Home", href: "/" },
  { label: "Bollywood", href: "/?category=Bollywood" },
  { label: "South", href: "/?category=South" },
  { label: "Dual Audio", href: "/?category=Dual%20Audio" },
  { label: "Web Series", href: "/?category=Web%20Series" },
];

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setQuery(new URLSearchParams(location.search).get("q") ?? "");
  }, [location.search]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sp = new URLSearchParams(location.search);
    if (query) sp.set("q", query);
    else sp.delete("q");
    sp.delete("page");
    navigate({ pathname: "/", search: sp.toString() });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="h-1 w-full" style={{ background: "var(--gradient-primary)" }} />
      <div className="container flex items-center gap-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg shadow-[var(--shadow-glow)]"
               style={{ background: "var(--gradient-primary)" }} />
          <span className="text-lg font-semibold tracking-wide">7StarMovies</span>
        </Link>

        <nav className="ml-6 hidden md:flex items-center gap-4 text-sm">
          {categories.map((c) => (
            <Link key={c.label} to={c.href} className={cn(
              "hover:text-primary transition-colors", 
              location.search.includes(c.href.split("?")[1] ?? "__none__") && "text-primary"
            )}>
              {c.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto" />

        <form onSubmit={onSubmit} className={cn(
          "relative items-center gap-2 transition-[width,opacity]", 
          open ? "w-56 opacity-100" : "w-8 opacity-90"
        )}>
          <button type="button" aria-label="Search" onClick={() => setOpen((v) => !v)}
            className="absolute inset-y-0 right-0 grid place-items-center text-muted-foreground hover:text-primary">
            <Search size={18} />
          </button>
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className={cn(
              "pr-8", 
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
