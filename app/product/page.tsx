export default function ProductPage() {
  return (
    <main className="container page-shell">
      <section className="product-hero">
        <p className="eyebrow">The AI Operator Playbook</p>

        <h1 className="serif-display product-title">
          Build AI that can
          <br />
          <span className="accent">operate</span>, not just respond.
        </h1>

        <p className="product-sub">
          A practical PDF playbook for founders, builders, and operators who
          want AI to become part of the workflow — with memory, tools, clear
          responsibilities, and real output.
        </p>
      </section>

      <section className="product-grid-two">
        <div className="soft-panel">
          <p className="eyebrow">What you get</p>
          <h2 className="section-heading">Inside the playbook</h2>

          <ul className="feature-list">
            <li>Full PDF playbook</li>
            <li>System architecture breakdown</li>
            <li>Identity, memory, and workflow structure</li>
            <li>Templates and setup docs</li>
            <li>Practical operating examples</li>
          </ul>
        </div>

        <div className="soft-panel">
          <p className="eyebrow">Who it’s for</p>
          <h2 className="section-heading">Built for operators</h2>

          <ul className="feature-list">
            <li>Founders building lean teams</li>
            <li>Creators using AI daily</li>
            <li>Operators automating internal workflows</li>
            <li>Builders who need AI to do real work</li>
          </ul>
        </div>
      </section>

      <section className="product-grid-two section-space">
        <div>
          <p className="eyebrow">What it covers</p>
          <h2 className="section-heading">A concise operating system</h2>

          <div className="stack-list">
            <div className="line-item">
              <strong>Foundation</strong>
              <span>
                Role, identity, boundaries, and the behavioral layer that
                changes results.
              </span>
            </div>

            <div className="line-item">
              <strong>System Design</strong>
              <span>
                Memory, tools, workflows, and how to make AI more reliable over
                time.
              </span>
            </div>

            <div className="line-item">
              <strong>Operation</strong>
              <span>
                Daily review loops, collaboration patterns, and how to work with
                AI like an operator.
              </span>
            </div>

            <div className="line-item">
              <strong>Scale</strong>
              <span>
                Move from one useful AI assistant to a broader workflow layer.
              </span>
            </div>
          </div>
        </div>

        <div className="pricing-card">
          <p className="eyebrow">One-time purchase</p>
          <h2 className="price">$19</h2>
          <p className="price-sub">Instant access. No subscription.</p>

          <a href="/pricing" className="primary-button">
            Get the Playbook
          </a>

          <p className="micro-copy">
            Includes the PDF playbook and future minor updates to this edition.
          </p>
        </div>
      </section>

      <section className="section-space">
        <p className="eyebrow">FAQ</p>
        <div className="faq-list">
          <div className="faq-item">
            <h3>What format is the product in?</h3>
            <p>A digital PDF playbook.</p>
          </div>

          <div className="faq-item">
            <h3>Is this beginner-friendly?</h3>
            <p>
              Yes — but it’s written for people who want to apply, not just
              browse.
            </p>
          </div>

          <div className="faq-item">
            <h3>Is this a course?</h3>
            <p>
              No. It’s a concise operator manual designed to help you move fast.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do I need OpenClaw?</h3>
            <p>
              No. The principles apply broadly, though the examples are useful
              for agent-style workflows.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}