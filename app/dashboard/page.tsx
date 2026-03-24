import Link from "next/link";
import { getAccessStatus } from "@/lib/access";
import { getLessons } from "@/lib/content";

export default async function DashboardPage() {
  const { user, isPro } = await getAccessStatus();
  const lessons = getLessons();

  return (
    <main className="container section">
      <h1>Dashboard</h1>
      <p>
        Welcome back{user?.firstName ? `, ${user.firstName}` : ""}. {isPro ? "Your Pro access is active." : "You are currently on the free view."}
      </p>

      {!isPro && (
        <div className="panel" style={{ marginTop: 18 }}>
          <h3>Unlock Pro</h3>
          <p>Once Stripe payment is completed, the webhook updates your Clerk profile and unlocks the full member area.</p>
          <Link href="/pricing" className="button">Upgrade now</Link>
        </div>
      )}

      <section className="section">
        <h2>Lessons</h2>
        <div className="grid-2">
          {lessons.map((lesson, index) => {
            const unlocked = isPro || index === 0;
            return (
              <div key={lesson.slug} className="lesson-card">
                <span className="small">Module {index + 1}</span>
                <h3>{lesson.title}</h3>
                <p>{lesson.excerpt}</p>
                <Link href={unlocked ? `/course/${lesson.slug}` : "/pricing"} className="button secondary">
                  {unlocked ? "Open lesson" : "Pro only"}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section">
        <h2>Downloads</h2>
        <div className="panel">
          <p>Drop your PDFs into <code>public/downloads</code> and link them here. You can keep this section Pro-only or make one lead magnet free.</p>
        </div>
      </section>
    </main>
  );
}
