import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Blog } from "@/types/blog";
import { FC } from "react";
import { format } from "date-fns";
import Link from "next/link";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`${blog.entryId}`} className="group block">
      <Card className="h-full border-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="relative h-[240px] w-full overflow-hidden rounded-t-lg bg-gray-100">
            <Image
              src={blog.thumbnail}
              alt="thumbnail"
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <div className="mb-3 flex items-center gap-2">
            <Badge
              variant="outline"
              className="rounded-full border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 transition-colors duration-200 hover:bg-emerald-100"
            >
              {blog.category}
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {format(blog.createdAt, "dd MMM yyyy")}
            </Badge>
          </div>

          <h2 className="mb-3 line-clamp-2 text-xl font-bold leading-tight text-gray-900 ∏transition-colors duration-200">
            {blog.title}
          </h2>

          <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
            {blog.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
