import { CheckoutButton } from "@/components/checkout-button";

export default function PricingPage() {
  return (
    <main className="container page-shell" style={{ maxWidth: 900 }}>
      <section style={{ paddingTop: 80 }}>
        <p className="eyebrow">Pricing</p>

        <h1 className="section-heading" style={{ fontSize: 48 }}>
          One simple offer.
        </h1>

        <p style={{ color: "rgba(243,240,234,0.62)", marginTop: 16, maxWidth: 620, lineHeight: 1.8 }}>
          A single playbook, one-time purchase, instant access.
        </p>
      </section>

      <section style={{ marginTop: 48 }}>
        <div className="pricing-card">
          <p className="eyebrow">The AI Operator Playbook</p>

          <h2 className="price">$19</h2>

          <p className="price-sub">Instant access. No subscription.</p>

          <ul className="feature-list" style={{ marginTop: 20 }}>
            <li>Full PDF playbook</li>
            <li>System architecture breakdown</li>
            <li>Identity + memory design</li>
            <li>Templates you can copy</li>
          </ul>

          <div style={{ marginTop: 24 }}>
            <CheckoutButton label="Buy Now" />
          </div>
        </div>
      </section>
    </main>
  );
}