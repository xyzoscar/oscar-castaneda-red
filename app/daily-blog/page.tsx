import Image from "next/image";

const posts = [
  {
    title: "Late Night Coding",
    excerpt: "Lost track of time fixing a small bug. Worth it.",
    date: "2025-03-20",
  },
  {
    title: "Midday Distraction",
    excerpt: "Meant to focus, ended up reorganizing my desk instead.",
    date: "2025-03-21",
  },
  {
    title: "Quick Debug Win",
    excerpt: "Found the issue in five minutes. Feels rare but good.",
    date: "2025-03-22",
  },
  {
    title: "Procrastination Mode",
    excerpt: "Opened the editor. Stared at the screen. Closed it.",
    date: "2025-03-23",
  },
  {
    title: "Random Idea at 2AM",
    excerpt:
      "Jotted something down half-asleep. Might be genius, might be trash.",
    date: "2025-03-24",
  },
];

export default async function MyComponent() {
  return (
    <div>
      <h1 className="text-5xl font-semibold my-24">Daily blog</h1>
      <div className="grid gap-16 md:gap-24">
        {posts.map((post) => (
          <div
            key={post.title}
            className="grid md:grid-cols-2 gap-6 md:gap-12 items-center"
          >
            <div className="relative overflow-hidden bg-gray-100">
              <Image
                src="/images/placeholder.avif"
                alt={post.title}
                width={700}
                height={400}
                className="w-full h-auto aspect-[16/9] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-sm text-gray-500 dark:text-white mb-2">
                Programming
              </div>
              <h2 className="text-2xl font-bold mb-4 md:text-3xl">
                {post.title}
              </h2>
              <p>{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
