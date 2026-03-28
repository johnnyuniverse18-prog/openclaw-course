import Link from "next/link";

export default function SuccessPage() {
  return (
    <main
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "120px 24px",
        color: "#f3f0ea",
      }}
    >
      <p
        style={{
          color: "#c7a44c",
          fontSize: 13,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginBottom: 18,
        }}
      >
        Payment successful
      </p>

      <h1
        style={{
          fontSize: "clamp(40px, 6vw, 64px)",
          lineHeight: 1.05,
          margin: 0,
        }}
      >
        Your playbook is ready.
      </h1>

      <p
        style={{
          marginTop: 20,
          color: "rgba(243,240,234,0.68)",
          fontSize: 20,
          lineHeight: 1.8,
          maxWidth: 640,
        }}
      >
        Thanks for your purchase. You can download your PDF below.
        If the button does not work immediately, wait a few seconds and try again.
      </p>

      <div
        style={{
          marginTop: 32,
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        <a
          href="/api/download"
          style={{
            display: "inline-block",
            background: "#f3f0ea",
            color: "#0a0a0a",
            textDecoration: "none",
            padding: "14px 22px",
            borderRadius: 999,
            fontWeight: 600,
            fontSize: 16,
          }}
        >
          Download PDF
        </a>

        <Link
          href="/"
          style={{
            display: "inline-block",
            border: "1px solid rgba(243,240,234,0.14)",
            color: "#f3f0ea",
            textDecoration: "none",
            padding: "14px 22px",
            borderRadius: 999,
            fontWeight: 500,
            fontSize: 16,
            background: "rgba(255,255,255,0.02)",
          }}
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}