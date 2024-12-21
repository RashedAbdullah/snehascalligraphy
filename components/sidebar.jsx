import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./theme-switcher";

export default function SideBarComp() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex justify-center items-center gap-2">
            Sneha's Calligraphy <ModeToggle />
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col items-center justify-center">
          <SheetClose asChild>
            <Link className="py-3 w-full text-center border-b" href="/">
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className="py-3 w-full text-center border-b" href="/gallery">
              Gallery
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className="py-3 w-full text-center border-b" href="/">
              About
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className="py-3 w-full text-center border-b" href="/custom">
              Custom Orders
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className="py-3 w-full text-center border-b" href="/contact">
              Contact
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
