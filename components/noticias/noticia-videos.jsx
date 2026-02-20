import { Play } from 'lucide-react';

function getYouTubeId(url) {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

export function NoticiaVideos({ videos }) {
  if (!videos || videos.length === 0) return null;

  return (
    <section className="mt-10 border-t border-border pt-8">
      <h2 className="mb-4 text-xl font-semibold text-foreground">Videos</h2>
      <div className="grid gap-6 grid-cols-1">
        {videos.map((video, i) => {
          const ytId = getYouTubeId(video.url);

          if (ytId) {
            return (
              <div key={i} className="overflow-hidden rounded-lg border border-border">
                <div className="relative w-full aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${ytId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full rounded-lg"
                  />
                </div>
                <div className="bg-card p-3">
                  <p className="text-sm font-medium text-foreground">{video.title}</p>
                </div>
              </div>
            );
          }

          return (
            <a
              key={i}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-secondary"
            >
              <Play className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium text-foreground">{video.title}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
