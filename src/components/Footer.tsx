import { ChefHat } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center space-x-2">
            <ChefHat className="h-8 w-8 " />
            <h3 className="text-xl font-bold ">foodHub</h3>
          </div>
          <p className="mb-4 text-muted-foreground">
            Platform resep dan tips memasak untuk semua pecinta kuliner
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-orange-500">
              Home
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-orange-500"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-orange-500"
            >
              Contact
            </Link>
          </div>
          <div className="mt-6 border-t pt-4 text-sm text-muted-foreground">
            © 2024 foodHub. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
