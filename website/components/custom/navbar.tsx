"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { FiSearch } from "react-icons/fi"
import { Menu, Package } from "lucide-react"
import icon from "@/app/logo.svg"

export default function Navbar() {
  return (
    <div className="bg-transparent flex justify-between items-center p-8 font-medium">
      <Link href="/" className="flex items-center">
        <Image src={icon} alt="icon" width={32} height={32} />
      </Link>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex gap-8">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/home" className="font-medium">
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about" className="font-medium">
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/contact" className="font-medium">
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/waitlist" className="font-medium">
                Join Waitlist
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Desktop Search and Package */}
      <div className="hidden md:flex items-center gap-4">
        <div className="bg-white w-24 h-9 flex justify-center items-center rounded-full">
          <FiSearch size={20} />
          <span className="ml-1">Search</span>
        </div>
        <div className="h-9 w-9 flex justify-center items-center rounded-full bg-white">
          <Package />
        </div>
      </div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col space-y-4 mt-8">
            <Link href="/home" className="font-medium text-lg">
              Home
            </Link>
            <Link href="/about" className="font-medium text-lg">
              About
            </Link>
            <Link href="/contact" className="font-medium text-lg">
              Contact
            </Link>
            <Link href="/waitlist" className="font-medium text-lg">
              Join Waitlist
            </Link>
          </nav>
          <div className="mt-8 flex flex-col space-y-4">
            <div className="bg-white w-full h-9 flex justify-center items-center rounded-full">
              <FiSearch size={20} />
              <span className="ml-1">Search</span>
            </div>
            <div className="h-9 w-9 flex justify-center items-center rounded-full bg-white">
              <Package />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}