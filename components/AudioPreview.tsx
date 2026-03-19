"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  previewLimit?: number;
};

export default function AudioPreview({
  src,
  previewLimit = 30,
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [locked, setLocked] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);

      if (audio.currentTime >= previewLimit) {
        audio.pause();
        audio.currentTime = previewLimit;
        setIsPlaying(false);
        setLocked(true);
      }
    };

    const onEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, [previewLimit]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (locked) {
      audio.currentTime = 0;
      setCurrentTime(0);
      setLocked(false);
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      await audio.play();
      setIsPlaying(true);
    }
  };

  const progress = Math.min((currentTime / previewLimit) * 100, 100);

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <audio ref={audioRef} src={src} preload="metadata" />

      <div className="mb-3 flex items-center justify-between">
        <button
          onClick={togglePlay}
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
        >
          {isPlaying ? "Pause" : "试听 30 秒"}
        </button>

        <span className="text-sm text-white/70">
          {Math.floor(currentTime)} / {previewLimit}s
        </span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-white transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {locked && (
        <div className="mt-3 rounded-xl border border-pink-400/30 bg-pink-400/10 p-3 text-sm text-pink-100">
          试听已结束。喜欢这首歌的话，购买后才能解锁完整版。
        </div>
      )}
    </div>
  );
}
