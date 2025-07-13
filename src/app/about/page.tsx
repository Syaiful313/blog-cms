import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Heart, Users, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 sm:py-12">
        {/* Hero Section */}
        <section className="mb-12 text-center sm:mb-16">
          <h1 className="mb-4 text-3xl font-bold text-gray-800 sm:mb-6 sm:text-4xl md:text-5xl">
            Tentang foodHub
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            foodHub adalah platform kuliner yang didedikasikan untuk berbagi
            resep-resep lezat, tips memasak, dan inspirasi kuliner untuk semua
            pecinta makanan di Indonesia.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 lg:order-1">
              <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">Misi Kami</h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-600 sm:mb-4 sm:text-base">
                Kami percaya bahwa memasak adalah seni yang dapat dipelajari
                oleh siapa saja. Melalui foodHub, kami ingin membuat memasak
                menjadi lebih mudah, menyenangkan, dan dapat diakses oleh semua
                orang.
              </p>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                Dari resep tradisional Indonesia hingga hidangan internasional,
                kami menyediakan panduan langkah demi langkah yang mudah
                diikuti, tips dari chef berpengalaman, dan inspirasi untuk
                menciptakan hidangan istimewa di rumah.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <Image
                  src="/undraw_cooking.png"
                  alt="Cooking"
                  width={500}
                  height={400}
                  className="w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold sm:mb-12 sm:text-3xl">
            Nilai-Nilai Kami
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <Card className="p-4 text-center sm:p-6">
              <CardContent className="pt-4 sm:pt-6">
                <Heart className="mx-auto mb-3 h-10 w-10 text-gray-700 sm:mb-4 sm:h-12 sm:w-12" />
                <h3 className="mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">Passion</h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  Kami memiliki passion yang mendalam terhadap kuliner dan
                  berbagi pengetahuan memasak.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 text-center sm:p-6">
              <CardContent className="pt-4 sm:pt-6">
                <Users className="mx-auto mb-3 h-10 w-10 text-gray-700 sm:mb-4 sm:h-12 sm:w-12" />
                <h3 className="mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">Community</h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  Membangun komunitas pecinta kuliner yang saling berbagi dan
                  belajar bersama.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 text-center sm:p-6">
              <CardContent className="pt-4 sm:pt-6">
                <Award className="mx-auto mb-3 h-10 w-10 text-gray-700 sm:mb-4 sm:h-12 sm:w-12" />
                <h3 className="mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">Quality</h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  Menyediakan resep dan konten berkualitas tinggi yang telah
                  diuji dan terpercaya.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 text-center sm:p-6">
              <CardContent className="pt-4 sm:pt-6">
                <ChefHat className="mx-auto mb-3 h-10 w-10 text-gray-700 sm:mb-4 sm:h-12 sm:w-12" />
                <h3 className="mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">Innovation</h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  Selalu berinovasi dalam menyajikan konten kuliner yang fresh
                  dan menarik.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold sm:mb-12 sm:text-3xl">Tim foodHub</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <Card className="text-center">
              <CardContent className="p-4 sm:p-6 sm:pt-6">
                <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 sm:mb-4 sm:h-24 sm:w-24">
                  <span className="text-xl font-bold text-gray-700 sm:text-2xl">CM</span>
                </div>
                <h3 className="mb-1 text-lg font-semibold sm:mb-2 sm:text-xl">Chef Maria</h3>
                <p className="mb-2 text-sm text-gray-700 sm:mb-3 sm:text-base">Head Chef & Founder</p>
                <p className="text-xs text-gray-600 sm:text-sm">
                  Berpengalaman 15 tahun di industri kuliner dengan spesialisasi
                  masakan Indonesia dan Asia.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-4 sm:p-6 sm:pt-6">
                <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 sm:mb-4 sm:h-24 sm:w-24">
                  <span className="text-xl font-bold text-gray-700 sm:text-2xl">CB</span>
                </div>
                <h3 className="mb-1 text-lg font-semibold sm:mb-2 sm:text-xl">Chef Budi</h3>
                <p className="mb-2 text-sm text-gray-700 sm:mb-3 sm:text-base">Recipe Developer</p>
                <p className="text-xs text-gray-600 sm:text-sm">
                  Ahli dalam mengembangkan resep tradisional dengan sentuhan
                  modern yang mudah diikuti.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6 sm:pt-6">
                <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 sm:mb-4 sm:h-24 sm:w-24">
                  <span className="text-xl font-bold text-gray-700 sm:text-2xl">NS</span>
                </div>
                <h3 className="mb-1 text-lg font-semibold sm:mb-2 sm:text-xl">
                  Nutritionist Sarah
                </h3>
                <p className="mb-2 text-sm text-gray-700 sm:mb-3 sm:text-base">Nutrition Expert</p>
                <p className="text-xs text-gray-600 sm:text-sm">
                  Memastikan setiap resep tidak hanya lezat tetapi juga sehat
                  dan bergizi seimbang.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-lg bg-gray-100 p-6 text-center sm:p-8 lg:p-12">
          <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl">
            Bergabunglah dengan Komunitas foodHub
          </h2>
          <p className="mx-auto mb-4 max-w-2xl text-sm text-gray-600 sm:mb-6 sm:text-base">
            Dapatkan resep terbaru, tips memasak eksklusif, dan inspirasi
            kuliner langsung ke email Anda.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-900 sm:px-6 sm:py-3 sm:text-base"
          >
            Hubungi Kami
          </Link>
        </section>
      </main>
    </div>
  );
}