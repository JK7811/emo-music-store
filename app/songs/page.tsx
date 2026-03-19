import Link from "next/link";
import { songs } from "@/lib/data";

export default function SongsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              BrokenLoop Archive
            </p>
            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
              All Songs
            </h1>
          </div>

          <Link
            href="/"
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
          >
            Back Home
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {songs.map((song) => (
            <Link
              key={song.slug}
              href={`/songs/${song.slug}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={song.cover}
                  alt={song.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-medium">{song.title}</h2>
                    <p className="mt-1 text-sm text-white/60">{song.artist}</p>
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/80">
                    ${song.price.toFixed(2)}
                  </div>
                </div>

                <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/70">
                  {song.description}
                </p>

                <div className="mt-5 text-sm text-white/50">
                  试听 30 秒 · 查看详情
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
