import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { CheckoutButton } from "@/components/checkout-button";

export default async function PricingPage() {
  const { userId } = await auth();

  return (
    <main className="container section">
      <h1>Simple pricing</h1>
      <p>Start with one offer. It is easier to message, easier to sell, and easier to maintain.</p>

      <div className="grid-2" style={{ marginTop: 24 }}>
        <div className="price-card">
          <span className="badge">Starter</span>
          <div className="price">$29</div>
          <p>Good for a quick launch with core lessons and gated content.</p>
          <ul className="list">
            <li>6 core modules</li>
            <li>Member dashboard</li>
            <li>Lesson updates</li>
            <li>Download area ready for PDFs</li>
          </ul>
          <div style={{ marginTop: 18 }}>
            {userId ? <CheckoutButton /> : <Link href="/login" className="button full">Log in to buy</Link>}
          </div>
        </div>

        <div className="price-card">
          <span className="badge">Positioning note</span>
          <h3>What to add next</h3>
          <ul className="list">
            <li>Video embeds for each module</li>
            <li>Beginner PDF and troubleshooting PDF</li>
            <li>Templates, prompts, and setup checklists</li>
            <li>Higher tier coaching or office hours</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
