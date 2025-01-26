"use client";
import React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

const MobileNav = () => {
  return (
    <div>
      <ul className="flex flex-col gap-4 justify-center">
        <li>
          <Link
            href={"/"}
            className="hover:text-primary transition-colors font-bold"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className="hover:text-primary transition-colors font-bold"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className="hover:text-primary transition-colors font-bold"
          >
            Contact
          </Link>
        </li>

        <div className="buttons gap-2 flex  flex-col text-xsm">
          <Link
            className={buttonVariants({ variant: "secondary" })}
            href={"/login"}
          >
            Login
          </Link>
          <Link
            className={buttonVariants({ variant: "secondary" })}
            href={"/sign-up"}
          >
            Sign-Up
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default MobileNav;
