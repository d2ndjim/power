"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "./materialUi/materialUi.jsx";

export default function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 font-normal">
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <Link href="/about" className="flex items-center">
          About Pai
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <Link href="/waitlist" className="flex items-center">
          Waitlist
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="bg-inherit max-w-full border-none p-4 lg:px-8 lg:py-6 shadow-none rounded-none">
      <div className="flex lg:grid grid-cols-3 items-center justify-between">
        <Link href="/">
          <Image src="/pwblogo.png" alt="logo" width={48} height={48} />
        </Link>
        <div className="hidden lg:block justify-self-center">{navList}</div>
        <div className="justify-self-end">
          <Button
            variant="gradient"
            size="sm"
            className="inline-block mr-4 lg:mr-0 normal-case bg-[#0F1015] bg-none border-[0.5px]  rounded border-[#FAFAFA]"
          >
            <span>Get early access</span>
          </Button>
          <IconButton
            type="button"
            variant="text"
            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </Navbar>
  );
}
