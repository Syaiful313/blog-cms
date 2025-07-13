import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChefHat, Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 sm:py-12">
        {/* Hero Section */}
        <section className="mb-12 text-center sm:mb-16">
          <h1 className="mb-4 text-3xl font-bold text-gray-800 sm:mb-6 sm:text-4xl md:text-5xl">
            Hubungi foodHub
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
            Punya pertanyaan, saran, atau ingin berbagi resep? Kami senang
            mendengar dari Anda!
          </p>
        </section>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Kirim Pesan</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Isi form di bawah ini dan kami akan merespons secepat mungkin.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-medium"
                    >
                      Nama Depan
                    </label>
                    <Input 
                      id="firstName" 
                      placeholder="Masukkan nama depan"
                      className="h-10 sm:h-11"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-medium"
                    >
                      Nama Belakang
                    </label>
                    <Input 
                      id="lastName" 
                      placeholder="Masukkan nama belakang"
                      className="h-10 sm:h-11"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="nama@email.com"
                    className="h-10 sm:h-11"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium"
                  >
                    Subjek
                  </label>
                  <Input
                    id="subject"
                    placeholder="Apa yang ingin Anda sampaikan?"
                    className="h-10 sm:h-11"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tulis pesan Anda di sini..."
                    rows={5}
                    className="min-h-[120px] resize-none sm:min-h-[140px]"
                  />
                </div>

                <Button className="w-full h-11 text-base font-medium">
                  Kirim Pesan
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="order-1 space-y-6 sm:space-y-8 lg:order-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Informasi Kontak</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Berikut adalah cara lain untuk menghubungi tim foodHub.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Mail className="mt-1 h-5 w-5 text-gray-700 sm:h-6 sm:w-6" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base">Email</h3>
                    <p className="text-sm text-gray-600 break-words">hello@foodhub.com</p>
                    <p className="text-sm text-gray-600 break-words">support@foodhub.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Phone className="mt-1 h-5 w-5 text-gray-700 sm:h-6 sm:w-6" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base">Telepon</h3>
                    <p className="text-sm text-gray-600">+62 21 1234 5678</p>
                    <p className="text-sm text-gray-600">+62 812 3456 7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="mt-1 h-5 w-5 text-gray-700 sm:h-6 sm:w-6" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base">Alamat</h3>
                    <p className="text-sm text-gray-600">
                      Jl. Kuliner Raya No. 123
                      <br />
                      Jakarta Selatan 12345
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Clock className="mt-1 h-5 w-5 text-gray-700 sm:h-6 sm:w-6" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base">Jam Operasional</h3>
                    <p className="text-sm text-gray-600">
                      Senin - Jumat: 09:00 - 18:00
                      <br />
                      Sabtu: 09:00 - 15:00
                      <br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Pertanyaan Umum</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="mb-2 text-sm font-semibold sm:text-base">
                    Bagaimana cara mengirim resep?
                  </h4>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Anda dapat mengirim resep melalui email ke hello@foodhub.com
                    dengan format yang jelas dan foto hidangan.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold sm:text-base">
                    Apakah ada kelas memasak?
                  </h4>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Saat ini kami fokus pada platform digital, namun kami
                    berencana mengadakan workshop memasak di masa depan.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold sm:text-base">
                    Bisakah request resep tertentu?
                  </h4>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Tentu! Kirim request resep melalui form di samping dan kami
                    akan berusaha membuatkannya untuk Anda.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-12 rounded-lg bg-gray-100 p-6 text-center sm:mt-16 sm:p-8 lg:p-12">
          <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl">
            Ikuti Media Sosial Kami
          </h2>
          <p className="mb-4 text-sm text-gray-600 sm:mb-6 sm:text-base">
            Dapatkan update resep terbaru dan tips memasak di media sosial
            foodHub
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button
              variant="outline"
              className="border-gray-600 bg-transparent text-gray-700 hover:bg-gray-200"
              size="sm"
            >
              Instagram
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 bg-transparent text-gray-700 hover:bg-gray-200"
              size="sm"
            >
              Facebook
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 bg-transparent text-gray-700 hover:bg-gray-200"
              size="sm"
            >
              YouTube
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 bg-transparent text-gray-700 hover:bg-gray-200"
              size="sm"
            >
              TikTok
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}