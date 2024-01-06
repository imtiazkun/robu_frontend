import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-10 flex justify-between items-center p-4 px-12 pt-8 bg-background ">
      <div className="flex justify-start w-[100px]">
        <Link href="/" key="home-link">
          <Image src="/robu.svg" alt="Logo" width={48} height={48} />
        </Link>
      </div>

      <div className="pt-2 lg:flex justify-center space-x-4 hidden">
        <Link href="/">
          <Button variant="ghost" className="rounded-full">
            About
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost" className="rounded-full">
            Panel
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost" className="rounded-full">
            Project
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost" className="rounded-full">
            Events
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost" className="rounded-full">
            Contact
          </Button>
        </Link>
      </div>

      <div className="pt-2 flex justify-end space-x-4 w-[100px]">
        <Link href="/login" key="login-link">
          <Button variant="outline" className="rounded-full">
            Login
          </Button>
        </Link>
        <Link href="/register" key="register-link">
          <Button variant="outline" className="rounded-full">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}
