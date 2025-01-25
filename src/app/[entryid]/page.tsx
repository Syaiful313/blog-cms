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
  params: { entryid: string };
}

export async function generateMetadata({
  params,
}: BlogDetailProps): Promise<Metadata> {
  const blog = await getEntry(params.entryid);

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
  const blog = await getEntry(params.entryid);

  if (!blog) {
    return notFound();
  }

  return (
    <main className="container mx-auto max-w-6xl px-4">
      <section className="mt-3 md:mt-10">
        <Badge>{blog.category}</Badge>
        <h1 className="text-2xl font-bold md:text-4xl">{blog.title}</h1>

        <div className="flex items-center justify-between">
          <p className="text-sm">
            {format(blog.createdAt, "dd MMMM yyyy")} - {blog.author}
          </p>

          <DialogShare url={`${APP_URL}/${blog.entryId}`} title={blog.title} />
        </div>

        <div className="relative my-4 h-[250px] w-full overflow-hidden rounded-lg md:h-[500px]">
          <Image
            src={blog.thumbnail}
            alt="thumbnail"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="my-10">
        {documentToReactComponents(blog.content, RICHTEXT_OPTIONS)}
      </section>
    </main>
  );
};

export default BlogDetail;
