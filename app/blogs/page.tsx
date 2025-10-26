"use client";
import Link from "next/link";

// Blog post metadata
const blogPosts = [
  {
    title: "Carcus of God",
    slug: "CarcassOfGod",
    description: "An eerie tale exploring existential horror and cosmic dread.",
    image: "https://i0.wp.com/ramanisblog.in/wp-content/uploads/2014/01/38d2e-purusha_tantra.jpg?resize=500%2C700", // optional thumbnail
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-[#eae4d5] pt-12 pb-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="block rounded-xl border border-gray-700 p-6 bg-[#1a1a1a] hover:bg-[#2a2a2a] transition"
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-md mb-4"
                style={{ opacity: 0.7 }}
              />
            )}
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-400 text-sm">{post.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
