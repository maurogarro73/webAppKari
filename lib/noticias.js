import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const NOTICIAS_DIR = path.join(process.cwd(), 'content', 'noticias');

export function getAllNoticias() {
  if (!fs.existsSync(NOTICIAS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(NOTICIAS_DIR).filter((f) => f.endsWith('.md'));

  const noticias = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(NOTICIAS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      cover: data.cover || '',
      tags: data.tags || [],
      sources: data.sources || [],
      youtube: data.youtube || [],
      content,
    };
  });

  return noticias.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNoticiaBySlug(slug) {
  const filePath = path.join(NOTICIAS_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    cover: data.cover || '',
    tags: data.tags || [],
    sources: data.sources || [],
    youtube: data.youtube || [],
    content,
  };
}

export function getAllSlugs() {
  if (!fs.existsSync(NOTICIAS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(NOTICIAS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}
