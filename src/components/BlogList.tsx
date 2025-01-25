import { Blog } from "@/types/blog";
import BlogCard from "./BlogCard";
import { FC } from "react";

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: FC<BlogListProps> = ({ blogs }) => {
  return (
    <section className="container mx-auto mt-8 px-4 md:mt-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
