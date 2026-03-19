import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.22),transparent_30%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.18),transparent_30%)]" />
      <div className="absolute inset-0 opacity-20 [background:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />

      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <div className="mb-6 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 backdrop-blur">
          BrokenLoop
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          Songs for the ones
          <br />
          who stayed too long.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
          你不是放不下，
          <br />
          你只是还在循环。
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/songs"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            Enter BrokenLoop
          </Link>

          <Link
            href="/songs/man-man-de-suo-hai"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Listen Now
          </Link>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-white/50">试听</p>
            <h3 className="mt-2 text-xl font-medium">30 秒先上头</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              每首歌都能先试听高潮前的情绪，把人卡在最想继续听的位置。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-white/50">购买</p>
            <h3 className="mt-2 text-xl font-medium">喜欢再解锁</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              用户先试听，真的喜欢才付费，不会太硬推。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-white/50">品牌感</p>
            <h3 className="mt-2 text-xl font-medium">像作品，不像普通商城</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              网站不是冷冰冰卖货，而是先让人沉进去。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
