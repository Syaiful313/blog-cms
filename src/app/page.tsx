import BlogList from "@/components/BlogList";
import PaginationSection from "@/components/PaginationSection";
import { getEntries } from "@/lib/contentful";

interface HomeProps {
  searchParams: Promise<{ [key: string]: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = await searchParams;
  const blogs = await getEntries(Number(resolvedSearchParams.page) || 1);

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-6xl">
              Selamat Datang di foodHub
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
              Temukan resep-resep lezat, tips memasak, dan inspirasi kuliner
              untuk membuat hidangan istimewa di rumah
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4">
          {blogs && (
            <>
              <BlogList blogs={blogs.data} />
              <PaginationSection
                total={blogs.meta.total}
                limit={blogs.meta.limit}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
