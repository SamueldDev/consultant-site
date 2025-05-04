
import React from "react";
import { useParams } from "react-router-dom";

import { blogPosts } from "../data/blogPost";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <p>Post not found.</p>;

  return (
    <article className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-6">{post.date} • {post.category}</p>
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-8 rounded-lg" />
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
};

export default BlogPost;
