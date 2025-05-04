
import React from "react";
import BlogCard from "../components/BlogCard";


import { blogPosts } from "../data/blogPost";


const Blog = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">📝 Latest Articles</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
