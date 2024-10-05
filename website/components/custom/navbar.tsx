import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { FiSearch } from "react-icons/fi";
import{ Package } from "lucide-react";
import icon from "@/app/logo.svg";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="bg-transparent flex justify-center p-8 font-medium">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-[4rem]">
          <Image src={icon} alt="icon"></Image>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/home" className="font-medium">
                <p>Home</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about" className="font-medium">
                <p>About</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/contact" className="font-medium">
                <p>Contact</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>{" "}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/contact" className="font-medium">
                <p>Join Waitlist</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <div className="bg-white ml-[9rem] mr-24 w-[6vw] h-[4.2vh] flex justify-center text-center rounded-full">
         
            <p className="mt-1 flex gap-1">  <FiSearch size={20} />Search</p>
          </div>
        <div className="h-[5vh] w-[5vh] flex justify-center items-center  rounded-full bg-white"> <Package /></div> 
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
