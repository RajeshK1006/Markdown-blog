"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "./theme-toggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import MobileNav from "./mobile-nav";
import { Menu } from "lucide-react";
import LoadingBar from "react-top-loading-bar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(30);

    setTimeout(() => {
      setProgress(70);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 800);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 900);
  }, []);

  return (
    <nav className=" 'h-16 bg-background/60 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between z-10">
      <LoadingBar
        color="#6028ff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      ></LoadingBar>

      <div>
        <Link href={"/"}>Rajesh.dev</Link>
      </div>

      <ul className="hidden md:flex w-full justify-end items-center space-x-4">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li className="buttons px-4">
          <Link
            href={"/login"}
            className={buttonVariants({ variant: "outline" })}
          >
            Login
          </Link>
        </li>
        <li className="">
          <Link
            href={"/sign-up"}
            className={buttonVariants({ variant: "outline" })}
          >
            Sign-Up
          </Link>
        </li>
      </ul>
      <ModeToggle></ModeToggle>

      <div>
        <Sheet>
          <SheetTrigger>
            <Menu className=" text-lg md:text-xl md:hidden" />
          </SheetTrigger>
          <SheetContent>
            <MobileNav></MobileNav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
