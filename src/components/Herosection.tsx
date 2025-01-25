import { Input } from "./ui/input";

const Herosection = () => {
  return (
    <section className="container mx-auto p-4">
      <div className="flex flex-col items-center justify-center mt-8 md:mt-20 gap-4">
        <h1 className="text-4xl md:text-6xl font-bold">The FoodHub Blogs</h1>
        <p>A blog about food, experiences and recipes</p>
        <Input placeholder="Search" className="max-w-[600px]"/>
      </div>
    </section>
  );
};

export default Herosection;
