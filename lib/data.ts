export type Song = {
  slug: string;
  title: string;
  artist: string;
  price: number;
  cover: string;
  previewUrl: string;
  fullUrl: string;
  description: string;
};

export const songs: Song[] = [
  {
    slug: "man-man-de-suo-hai",
    title: "慢慢的索嗨",
    artist: "BrokenLoop",
    price: 3.9,
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    fullUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    description: "一首关于失眠、备胎和反复心软的 emo 歌。先试听 30 秒，喜欢再解锁完整版。",
  },
  {
    slug: "midnight-loop",
    title: "Midnight Loop",
    artist: "BrokenLoop",
    price: 4.9,
    cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    fullUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    description: "献给那些在深夜一遍一遍回放回忆的人。",
  },
];
