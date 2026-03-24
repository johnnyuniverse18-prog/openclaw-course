import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <div>
          <span className="eyebrow">Paid tutorial site starter</span>
          <h1>Teach OpenClaw and sell access in one clean product.</h1>
          <p>
            This starter gives you a landing page, pricing page, Stripe checkout, member dashboard,
            and markdown-based lesson pages so you can launch a paid OpenClaw course fast.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
            <Link href="/pricing" className="button">View Pricing</Link>
            <Link href="/dashboard" className="button secondary">See Dashboard</Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="badge">What’s included</div>
          <ul className="list">
            <li>Landing page optimized for conversion</li>
            <li>Stripe payment flow for one paid plan</li>
            <li>Clerk login and protected dashboard</li>
            <li>Markdown lessons for fast content publishing</li>
            <li>Stripe webhook that upgrades members automatically</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="kpis">
          <div className="kpi"><strong>1</strong><span className="small">Productized paid course</span></div>
          <div className="kpi"><strong>6</strong><span className="small">Starter lesson modules</span></div>
          <div className="kpi"><strong>Fast</strong><span className="small">Deployable on Vercel</span></div>
        </div>
      </section>

      <section className="section">
        <h2>Why this setup works</h2>
        <div className="grid-3">
          <div className="panel">
            <h3>Simple content workflow</h3>
            <p>Write lessons in markdown, add downloadable PDFs later, and scale content without rebuilding the site.</p>
          </div>
          <div className="panel">
            <h3>Clear paid funnel</h3>
            <p>Visitors land on the homepage, review pricing, sign in, pay with Stripe, and unlock the dashboard.</p>
          </div>
          <div className="panel">
            <h3>Easy to customize</h3>
            <p>Swap OpenClaw for any other AI tutorial product, update branding, and launch a different niche quickly.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Starter curriculum</h2>
        <div className="grid-2">
          <div className="lesson-card">
            <h3>Getting Started</h3>
            <p>Explain what OpenClaw is, who it is for, and how your course will help people get to value faster.</p>
          </div>
          <div className="lesson-card">
            <h3>Installation</h3>
            <p>Guide students through local setup, environment variables, common issues, and first successful launch.</p>
          </div>
          <div className="lesson-card">
            <h3>First Workflow</h3>
            <p>Show how to go from blank setup to a working assistant or workflow in one practical walkthrough.</p>
          </div>
          <div className="lesson-card">
            <h3>Tools and Skills</h3>
            <p>Teach how to think about tools, reusable skills, and when each belongs in a user workflow.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
