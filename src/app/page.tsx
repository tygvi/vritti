import ScholarshipExplorer from "@/components/ScholarshipExplorer";
import WaitlistForm from "@/components/WaitlistForm";

function SparkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10.5 21a2 2 0 0 0 3 0" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const features = [
  {
    icon: <SparkIcon />,
    title: "Matched, not buried",
    body: "Tell us your course, category, income and state once. We surface the schemes you actually qualify for.",
  },
  {
    icon: <BellIcon />,
    title: "Deadlines that warn you",
    body: "Every listing carries a verified deadline. Get nudged early enough to gather documents and apply.",
  },
  {
    icon: <ShieldIcon />,
    title: "Verified, always",
    body: "We link straight to official portals and trusted foundations — no dead links, no rumour-driven listings.",
  },
];

const steps = [
  {
    number: "01",
    title: "Build your profile",
    body: "Course, year, category, family income, state — takes under two minutes.",
  },
  {
    number: "02",
    title: "Get your matches",
    body: "See central, state and private scholarships ranked by fit and deadline.",
  },
  {
    number: "03",
    title: "Apply with confidence",
    body: "Track documents, status and submission dates in one checklist.",
  },
];

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <header className="sticky top-0 z-40 border-b border-line/70 bg-sand/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-serif text-2xl font-semibold tracking-tight text-ink">
              Vritti
            </span>
            <span className="text-xs text-muted">वृत्ति</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-muted sm:flex">
            <a href="#scholarships" className="transition hover:text-ink">
              Scholarships
            </a>
            <a href="#how" className="transition hover:text-ink">
              How it works
            </a>
            <a href="#waitlist" className="transition hover:text-ink">
              Waitlist
            </a>
          </div>

          <a
            href="#waitlist"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-sand transition hover:bg-ink/90"
          >
            Join waitlist
          </a>
        </nav>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream/70 px-3 py-1 text-xs font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
              Scholarships for Indian students
            </span>

            <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Scholarships,
              <br />
              <span className="text-saffron">matched to you.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
              One profile. Every central, state and private scholarship.
              Deadlines tracked, applications organised — so you can focus on
              studying, not searching.
            </p>
          </div>

          <div className="mt-12">
            <ScholarshipExplorer />
          </div>
        </section>

        <section className="border-y border-line/70 bg-cream/50">
          <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-line/70 px-6 py-8 text-center sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              "Central, state & private schemes",
              "Deadline reminders built in",
              "Free for students, always",
            ].map((item) => (
              <p
                key={item}
                className="px-4 py-3 text-sm font-medium text-muted"
              >
                {item}
              </p>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-ink">
              Search is the hard part.
              <br />
              We made it the easy part.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Scholarship information is scattered across dozens of portals,
              PDFs and WhatsApp forwards. Vritti pulls it into one clear,
              verified place.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-line bg-cream p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-saffron/10 text-saffron">
                  {feature.icon}
                </span>
                <h3 className="mt-5 font-serif text-xl text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="scroll-mt-24 bg-ink text-sand">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl leading-tight tracking-tight">
                From “where do I start?”
                <br />
                to application submitted.
              </h2>
              <p className="mt-4 text-lg text-sand/70">
                Three steps. No spreadsheets, no bookmark graveyard.
              </p>
            </div>

            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <li key={step.number}>
                  <span className="font-serif text-3xl text-marigold">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand/70">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="waitlist" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-cream p-8 sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-marigold/25 blur-2xl"
            />
            <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-saffron">
                  Early access
                </p>
                <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink">
                  Be first when Vritti opens.
                </h2>
                <p className="mt-4 text-muted">
                  Join the waitlist for early access, launch updates and a
                  first look at matched scholarships for your course.
                </p>
              </div>

              <div className="md:pl-6">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-xl text-ink">
              Vritti <span className="text-sm text-muted">वृत्ति</span>
            </p>
            <p className="mt-1 text-sm text-muted">
              Scholarships, matched to you.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted">
            <a href="#scholarships" className="transition hover:text-ink">
              Scholarships
            </a>
            <a href="#how" className="transition hover:text-ink">
              How it works
            </a>
            <a href="#waitlist" className="transition hover:text-ink">
              Waitlist
            </a>
          </div>

          <p className="text-xs text-muted">© Vritti · Made in India</p>
        </div>
      </footer>
    </div>
  );
}
