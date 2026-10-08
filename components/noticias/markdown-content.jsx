"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownContent({ content }) {
  return (
    <div className="prose max-w-none prose-headings:font-serif prose-headings:font-medium prose-headings:text-primary prose-h2:text-3xl prose-h3:text-2xl prose-p:text-foreground/90 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:text-muted-foreground hover:prose-a:underline prose-strong:text-primary prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-li:text-foreground/90">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
