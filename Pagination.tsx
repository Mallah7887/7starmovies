import { Link, useLocation } from "react-router-dom";

export const Pagination = ({ total, perPage }: { total: number; perPage: number }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const current = Number(params.get("page") || 1);
  const last = Math.max(1, Math.ceil(total / perPage));

  const createHref = (p: number) => {
    const sp = new URLSearchParams(location.search);
    if (p <= 1) sp.delete("page"); else sp.set("page", String(p));
    return `${location.pathname}?${sp.toString()}`.replace(/\?$/, "");
  };

  if (last <= 1) return null;
  const pages = Array.from({ length: last }, (_, i) => i + 1).slice(0, 6); // first few pages for demo

  return (
    <nav className="flex items-center justify-center gap-2 mt-6" aria-label="Pagination">
      <Link to={createHref(Math.max(1, current - 1))} className="px-3 py-1 rounded-md border hover:border-primary/60">Prev</Link>
      {pages.map((p) => (
        <Link
          key={p}
          to={createHref(p)}
          className={`px-3 py-1 rounded-md border ${p === current ? 'bg-primary text-primary-foreground' : 'hover:border-primary/60'}`}
        >
          {p}
        </Link>
      ))}
      <Link to={createHref(Math.min(last, current + 1))} className="px-3 py-1 rounded-md border hover:border-primary/60">Next</Link>
    </nav>
  );
};
