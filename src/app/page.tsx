import BlogList from "@/components/BlogList";
import Herosection from "@/components/Herosection";
import PaginationSection from "@/components/PaginationSection";
import { getEntries } from "@/lib/contentful";

interface HomeProps {
  searchParams: { [key: string]: string };
}

export default async function Home({searchParams}: HomeProps) {
  const blogs = await getEntries(Number(searchParams.page) || 1);

  return (
    <main>
      <Herosection />
      {blogs && (
        <>
          <BlogList blogs={blogs.data} />
          <PaginationSection
            total={blogs.meta.total}
            limit={blogs.meta.limit}
          />
        </>
      )}
    </main>
  );
}
