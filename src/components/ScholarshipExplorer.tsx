"use client";

import { useMemo, useState } from "react";
import { scholarships, type Scholarship } from "@/lib/scholarships";

const scopes = ["All", "Central", "State", "Private"] as const;
type Scope = (typeof scopes)[number];

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="h-5 w-5"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function ScholarshipCard({ item }: { item: Scholarship }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-cream p-5 transition hover:-translate-y-0.5 hover:border-saffron/40 hover:shadow-[0_12px_30px_-18px_rgba(32,26,22,0.45)]">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-sand px-2.5 py-1 text-xs font-medium text-muted">
          {item.scope}
        </span>
        <span className="text-xs font-medium text-saffron">
          Due {item.deadline}
        </span>
      </div>

      <h3 className="mt-4 font-serif text-xl leading-snug text-ink">
        {item.name}
      </h3>
      <p className="mt-1 text-sm text-muted">{item.provider}</p>

      <p className="mt-4 text-base font-semibold text-teal">{item.amount}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line px-2 py-0.5 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="mt-auto pt-5 text-sm font-medium text-ink/80 transition group-hover:text-saffron">
        View details →
      </span>
    </article>
  );
}

export default function ScholarshipExplorer() {
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState<Scope>("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return scholarships.filter((item) => {
      const matchesScope = scope === "All" || item.scope === scope;
      const matchesQuery =
        q.length === 0 ||
        item.name.toLowerCase().includes(q) ||
        item.provider.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesScope && matchesQuery;
    });
  }, [query, scope]);

  return (
    <div id="scholarships" className="w-full scroll-mt-24">
      <div className="mx-auto max-w-2xl">
        <label htmlFor="scholarship-search" className="sr-only">
          Search scholarships
        </label>
        <div className="flex items-center gap-3 rounded-2xl border border-line bg-cream px-5 py-4 shadow-[0_20px_50px_-30px_rgba(32,26,22,0.6)] focus-within:border-saffron/60">
          <span className="text-muted">
            <SearchIcon />
          </span>
          <input
            id="scholarship-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by scheme, course, or category…"
            className="w-full bg-transparent text-base text-ink outline-none placeholder:text-muted/70"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {scopes.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setScope(option)}
              aria-pressed={scope === option}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                scope === option
                  ? "bg-ink text-sand"
                  : "border border-line bg-cream/60 text-muted hover:border-saffron/40 hover:text-ink"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-baseline justify-between gap-4">
        <h2 className="font-serif text-2xl text-ink">Featured scholarships</h2>
        <p className="text-sm text-muted">
          {results.length} of {scholarships.length} shown
        </p>
      </div>

      {results.length > 0 ? (
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((item) => (
            <ScholarshipCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-line bg-cream/60 p-10 text-center">
          <p className="font-serif text-lg text-ink">No matches yet.</p>
          <p className="mt-1 text-sm text-muted">
            Try a broader keyword or switch the filter back to “All”.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setScope("All");
            }}
            className="mt-4 rounded-full bg-ink px-4 py-2 text-sm font-medium text-sand"
          >
            Reset search
          </button>
        </div>
      )}

      <p className="mt-6 text-center text-xs text-muted">
        Sample listings shown for preview. Real, verified data lands at launch.
      </p>
    </div>
  );
}
