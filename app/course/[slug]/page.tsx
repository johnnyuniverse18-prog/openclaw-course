import { notFound } from "next/navigation";
import { getAccessStatus } from "@/lib/access";
import { getLessonBySlug, getLessons } from "@/lib/content";

export async function generateStaticParams() {
  return getLessons().map((lesson) => ({ slug: lesson.slug }));
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lessons = getLessons();
  const lessonIndex = lessons.findIndex((item) => item.slug === slug);

  if (lessonIndex === -1) notFound();

  const { isPro } = await getAccessStatus();
  const lesson = await getLessonBySlug(slug);

  if (!isPro && lessonIndex > 0) {
    return (
      <main className="container section">
        <div className="panel">
          <h1>{lesson.title}</h1>
          <p>This lesson is part of Pro access. Keep the first lesson free and lock the rest to create a clean upgrade path.</p>
          <a href="/pricing" className="button">See pricing</a>
        </div>
      </main>
    );
  }

  return (
    <main className="course-content">
      <div className="small">Lesson</div>
      <h1>{lesson.title}</h1>
      <p>{lesson.excerpt}</p>
      <article dangerouslySetInnerHTML={{ __html: lesson.contentHtml }} />
    </main>
  );
}
