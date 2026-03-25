export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "48px 24px 120px",
      }}
    >
      <section
        style={{
          minHeight: "78vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 760 }}>
          <p
            style={{
              color: "#c7a44c",
              fontSize: 13,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 28,
              opacity: 0.95,
            }}
          >
            Online and working
          </p>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(56px, 9vw, 88px)",
              lineHeight: 1.02,
              fontWeight: 400,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#f3f0ea",
            }}
          >
            Build AI that does
            <br />
            <span style={{ color: "#c7a44c", fontStyle: "italic" }}>
              real work
            </span>
          </h1>

          <p
            style={{
              marginTop: 28,
              maxWidth: 700,
              color: "rgba(243,240,234,0.62)",
              fontSize: 28,
              lineHeight: 1.55,
              fontWeight: 400,
            }}
          >
            The playbook for turning AI into an operator with memory, tools,
            workflows, and responsibilities.
          </p>

          <p
            style={{
              marginTop: 18,
              maxWidth: 660,
              color: "rgba(243,240,234,0.42)",
              fontSize: 18,
              lineHeight: 1.8,
            }}
          >
            Not a chatbot. Not a prompt guide. A practical system for founders,
            builders, and operators who want AI to become part of the workflow.
          </p>

          <div
            style={{
              marginTop: 36,
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <a
              href="pricing"
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
              Get the Playbook — $19
            </a>

            <a
              href="#inside"
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
              See what’s inside
            </a>
          </div>
        </div>
      </section>

      <section
        style={{
          paddingTop: 40,
          borderTop: "1px solid rgba(243,240,234,0.08)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 56,
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                color: "#c7a44c",
                fontSize: 13,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              What this is
            </p>

            <h2
              style={{
                fontSize: "clamp(38px, 5vw, 58px)",
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
                margin: 0,
                color: "#f3f0ea",
              }}
            >
              This is not a prompt guide.
            </h2>
          </div>

          <div>
            <p
              style={{
                color: "rgba(243,240,234,0.68)",
                fontSize: 19,
                lineHeight: 1.9,
                marginTop: 0,
              }}
            >
              It’s a system for turning AI into an operational layer inside your
              workflow — with identity, memory, tools, execution logic, and
              daily rhythms that make it useful over time.
            </p>

            <ul
              style={{
                marginTop: 24,
                paddingLeft: 20,
                color: "rgba(243,240,234,0.56)",
                lineHeight: 2,
                fontSize: 17,
              }}
            >
              <li>Identity design that changes behavior</li>
              <li>Memory systems that persist context</li>
              <li>Tool access and task execution</li>
              <li>Operating rhythms that make AI useful daily</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="inside" style={{ marginTop: 120 }}>
        <p
          style={{
            color: "#c7a44c",
            fontSize: 13,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          What’s inside
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 20,
          }}
        >
          {[
            {
              label: "01 — 03",
              title: "The Foundation",
              body: "Why “hiring” an AI is fundamentally different from using one. Platform options. Identity, role design, and the behavioral layer that changes outcomes.",
            },
            {
              label: "04 — 05",
              title: "The Systems",
              body: "Memory architecture, tools, capabilities, and delegation. How to build an AI that gets smarter and more useful over time.",
            },
            {
              label: "06 — 08",
              title: "The Relationship",
              body: "Safety rails that are practical, not theoretical. The trust ladder, daily operating rhythms, and communication patterns that work.",
            },
            {
              label: "09",
              title: "Coding Agents at Scale",
              body: "Loops, parallel execution, and the operational infrastructure for running multiple coding agents at once.",
            },
            {
              label: "10",
              title: "The Workflow Layer",
              body: "How to design systems that detect, triage, fix, and ship work autonomously — including the parts most people skip.",
            },
            {
              label: "Templates",
              title: "Copy & Customize",
              body: "Identity docs, memory structures, safety rails, and setup logic you can adapt directly to your own AI system.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                border: "1px solid rgba(243,240,234,0.08)",
                borderRadius: 18,
                background: "rgba(255,255,255,0.018)",
                padding: 28,
                minHeight: 270,
              }}
            >
              <p
                style={{
                  color: "#c7a44c",
                  fontSize: 13,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginTop: 0,
                  marginBottom: 22,
                }}
              >
                {item.label}
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 36,
                  lineHeight: 1.15,
                  fontWeight: 400,
                  margin: 0,
                  color: "#f3f0ea",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  marginTop: 18,
                  color: "rgba(243,240,234,0.52)",
                  lineHeight: 1.9,
                  fontSize: 18,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
            <section style={{ marginTop: 120 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                color: "#c7a44c",
                fontSize: 13,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Why this works
            </p>

            <h2
              style={{
                fontSize: "clamp(38px, 5vw, 58px)",
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
                margin: 0,
                color: "#f3f0ea",
              }}
            >
              Built from
              <br />
              actual use
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gap: 18,
            }}
          >
            {[
              "Built from real workflows, not recycled AI advice.",
              "Clear and practical, without bloated course structure.",
              "Fast to implement — designed for one focused afternoon.",
              "Made for founders, operators, and builders who need AI to do real work.",
            ].map((line) => (
              <div
                key={line}
                style={{
                  borderTop: "1px solid rgba(243,240,234,0.08)",
                  paddingTop: 16,
                  color: "rgba(243,240,234,0.7)",
                  fontSize: 18,
                  lineHeight: 1.8,
                }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ marginTop: 120 }}>
        <p
          style={{
            color: "#c7a44c",
            fontSize: 13,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          What readers say
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }}
        >
          {[
            "“This is the first AI guide that feels operational.”",
            "“It helped me think about AI as a teammate, not just a tool.”",
            "“Clean, practical, and immediately useful.”",
            "“I changed my setup the same day.”",
          ].map((quote) => (
            <div
              key={quote}
              style={{
                border: "1px solid rgba(243,240,234,0.08)",
                borderRadius: 18,
                background: "rgba(255,255,255,0.018)",
                padding: 28,
              }}
            >
              <p
                style={{
                  color: "#f3f0ea",
                  fontSize: 22,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {quote}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: 120,
          paddingTop: 40,
          borderTop: "1px solid rgba(243,240,234,0.08)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 40,
            alignItems: "end",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(38px, 5vw, 58px)",
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
                margin: 0,
                color: "#f3f0ea",
              }}
            >
              Ready to build AI
              <br />
              that actually works?
            </h2>

            <p
              style={{
                marginTop: 18,
                color: "rgba(243,240,234,0.58)",
                fontSize: 18,
                lineHeight: 1.9,
                maxWidth: 620,
              }}
            >
              Get the playbook and start building an AI operator with memory,
              tools, structure, and real responsibilities.
            </p>
          </div>

          <div>
            <div
              style={{
                border: "1px solid rgba(243,240,234,0.08)",
                borderRadius: 18,
                background: "rgba(255,255,255,0.018)",
                padding: 28,
                maxWidth: 360,
              }}
            >
              <p
                style={{
                  color: "rgba(243,240,234,0.48)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: 12,
                  marginTop: 0,
                }}
              >
                The AI Operator Playbook
              </p>

              <h3
                style={{
                  fontSize: 44,
                  lineHeight: 1,
                  margin: "8px 0 14px",
                  color: "#f3f0ea",
                }}
              >
                $19
              </h3>

              <p
                style={{
                  color: "rgba(243,240,234,0.54)",
                  lineHeight: 1.8,
                  fontSize: 16,
                }}
              >
                One-time purchase. Instant access.
              </p>

              <a
                href="pricing"
                style={{
                  display: "inline-block",
                  marginTop: 22,
                  background: "#f3f0ea",
                  color: "#0a0a0a",
                  textDecoration: "none",
                  padding: "14px 20px",
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Get the Playbook
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}