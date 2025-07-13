import DialogShare from "@/components/DialogShare";
import { Badge } from "@/components/ui/badge";
import { getEntry } from "@/lib/contentful";
import { RICHTEXT_OPTIONS } from "@/lib/richtext-options";
import { APP_URL } from "@/utils/config";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { format } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FC } from "react";

interface BlogDetailProps {
  params: Promise<{ entryid: string }>;
}

export async function generateMetadata({
  params,
}: BlogDetailProps): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = await getEntry(resolvedParams.entryid);

  if (!blog) {
    return notFound();
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      images: [blog.thumbnail],
    },
  };
}

const BlogDetail: FC<BlogDetailProps> = async ({ params }) => {
  const resolvedParams = await params;
  const blog = await getEntry(resolvedParams.entryid);

  if (!blog) {
    return notFound();
  }

  return (
    <main className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
      <section className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
        {/* Badge */}
        <div className="mb-2 sm:mb-3 md:mb-4">
          <Badge className="px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm md:text-base">
            {blog.category}
          </Badge>
        </div>

        {/* Title */}
        <h1 className="mb-3 max-w-4xl text-xl font-bold leading-tight sm:mb-4 sm:text-2xl md:mb-5 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          {blog.title}
        </h1>

        {/* Description */}
        <p className="mb-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:mb-5 sm:text-base md:text-lg lg:text-xl">
          {blog.description}
        </p>

        {/* Meta info and Share button */}
        <div className="mb-4 flex flex-col gap-2 sm:mb-5 sm:flex-row sm:items-center sm:justify-between sm:gap-3 md:mb-6 md:gap-4">
          <p className="order-2 text-xs text-gray-600 sm:order-1 sm:text-sm md:text-base">
            {format(blog.createdAt, "dd MMMM yyyy")} - {blog.author}
          </p>

          <div className="order-1 self-start sm:order-2 sm:self-auto">
            <DialogShare
              url={`${APP_URL}/${blog.entryId}`}
              title={blog.title}
            />
          </div>
        </div>

        {/* Thumbnail */}
        <div className="relative my-4 h-[180px] w-full overflow-hidden rounded-lg shadow-lg sm:my-5 sm:h-[240px] md:my-6 md:h-[320px] lg:h-[400px] xl:h-[480px] 2xl:h-[560px]">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            className="object-cover "
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
          />
        </div>
      </section>

      {/* Content */}
      <section className="my-6 sm:my-8 md:my-10 lg:my-12 xl:my-16">
          {documentToReactComponents(blog.content, RICHTEXT_OPTIONS)}
      </section>
    </main>
  );
};

export default BlogDetail;
