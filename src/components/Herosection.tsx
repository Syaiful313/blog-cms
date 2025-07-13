import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Herosection = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-orange-50 to-red-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-6xl">
            Selamat Datang di <span className="text-orange-500">foodHub</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Temukan resep-resep lezat, tips memasak, dan inspirasi kuliner untuk
            membuat hidangan istimewa di rumah
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Jelajahi Resep
          </Button>
        </div>
      </section>
      <section className="container mx-auto p-4">
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:mt-20">
          
          <Input placeholder="Search" className="max-w-[600px]" />
        </div>
      </section>
    </>
  );
};

export default Herosection;
