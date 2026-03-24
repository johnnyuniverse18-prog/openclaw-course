import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const coursesDirectory = path.join(process.cwd(), "content/courses");

export type LessonMeta = {
  slug: string;
  title: string;
  excerpt: string;
  order: number;
};

export function getLessons(): LessonMeta[] {
  const filenames = fs.readdirSync(coursesDirectory);

  return filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(coursesDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title as string,
        excerpt: data.excerpt as string,
        order: data.order as number
      };
    })
    .sort((a, b) => a.order - b.order);
}

export async function getLessonBySlug(slug: string) {
  const fullPath = path.join(coursesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title as string,
    excerpt: data.excerpt as string,
    contentHtml: processed.toString()
  };
}
