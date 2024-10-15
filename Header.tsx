import Link from 'next/link';
import React from 'react';
const Header = () => (
  <header className="bg-blue-600 p-4 text-white fixed w-full top-0">
    <nav className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Blog Website</h1>
      <Link href="/" className="hover:underline">Home</Link>
    </nav>
  </header>
);

export default Header;