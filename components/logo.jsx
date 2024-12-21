import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-teal-600 dark:text-teal-400">
        Sneha&apos;s Calligraphy
      </h1>
    </Link>
  );
};

export default Logo;
