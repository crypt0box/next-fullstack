import { allPosts } from "contentlayer/generated";
import Image from "next/image";

export default function BlogPage() {
  const posts = allPosts;
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div>
        <div className="space-y-4">
          <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">
            Blog
          </h1>
          <p className="text-muted-foreground text-xl">
            ContentLayerとMDXで書いています。
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {posts.map((post) => (
        <article key={post._id}>
          {post.image && (
            <Image
              className="rounded-md border bg-muted"
              src={post.image}
              alt={post.title}
              width={804}
              height={452}
            />
          )}
          <h2 className="text-2xl font-extrabold">{post.title}</h2>
          {post.description && (
            <p className="text-muted-foreground">{post.description}</p>
          )}
          {post.date && (
            <p className="text-sm text-muted-foreground">{post.date}</p>
          )}
        </article>
      ))}
    </div>
  );
}
