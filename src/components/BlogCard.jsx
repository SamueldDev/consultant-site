

import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500">{post.date}</p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

