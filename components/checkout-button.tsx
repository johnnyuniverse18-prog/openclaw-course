"use client";

import { useState } from "react";

type CheckoutButtonProps = {
  label?: string;
};

export function CheckoutButton({
  label = "Get the Playbook — $19",
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    try {
      setLoading(true);

      const res = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Checkout error:", data);
        alert(data?.error || "Something went wrong.");
        return;
      }

      if (data?.url) {
        window.location.href = data.url;
        return;
      }

      alert("No checkout URL returned.");
    } catch (error) {
      console.error("Checkout request failed:", error);
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
        textDecoration: "none",
        padding: "14px 22px",
        borderRadius: 999,
        fontWeight: 600,
        fontSize: 16,
        border: "none",
        cursor: loading ? "default" : "pointer",
        opacity: loading ? 0.75 : 1,
      }}
    >
      {loading ? "Redirecting..." : label}
    </button>
  );
}