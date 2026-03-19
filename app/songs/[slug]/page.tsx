import Link from "next/link";
import { notFound } from "next/navigation";
import AudioPreview from "@/components/AudioPreview";
import { songs } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function SongDetailPage({ params }: Props) {
  const { slug } = await params;
  const song = songs.find((item) => item.slug === slug);

  if (!song) return notFound();

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/songs"
          className="mb-8 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
        >
          ← Back to Songs
        </Link>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              src={song.cover}
              alt={song.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              BrokenLoop Single
            </p>
            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
              {song.title}
            </h1>
            <p className="mt-3 text-lg text-white/70">{song.artist}</p>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/70">
              {song.description}
            </p>

            <div className="mt-8">
              <AudioPreview src={song.previewUrl} />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]">
                Buy for ${song.price.toFixed(2)}
              </button>

              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black">
                Login to Unlock
              </button>
            </div>

            <p className="mt-4 text-sm text-white/45">
              目前这版先做前端展示。下一步再接 Stripe 和 Supabase。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
