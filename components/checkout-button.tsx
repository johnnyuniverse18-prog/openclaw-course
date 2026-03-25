"use client";

import { useState } from "react";

export function CheckoutButton({ label = "Get the Playbook — $19" }: { label?: string }) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    try {
      setLoading(true);

      const res = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = await res.json();

      if (data?.url) {
        window.location.href = data.url;
        return;
      }

      alert("Unable to start checkout.");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      style={{
        display: "inline-block",
        background: "#f3f0ea",
        color: "#0a0a0a",
        border: "none",
        textDecoration: "none",
        padding: "14px 22px",
        borderRadius: 999,
        fontWeight: 600,
        fontSize: 16,
        cursor: "pointer",
      }}
    >
      {loading ? "Redirecting..." : label}
    </button>
  );
}