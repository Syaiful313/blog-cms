import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="container mx-auto p-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold">FoodHub</h1>
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <Link href="/ ">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="block md:hidden" asChild>
            <Button variant="outline" size="icon">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link href="/ ">
              <DropdownMenuItem>Home</DropdownMenuItem>
            </Link>
            <Link href="/">
              <DropdownMenuItem>About</DropdownMenuItem>
            </Link>
            <Link href="/">
              <DropdownMenuItem>Contact</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
