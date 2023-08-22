import React from 'react'
import Link from 'next/link';

function Header() {
  return (
    <nav className="bg-primary p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          My Navbar App
        </Link>
        <div className="space-x-4">
          <Link href="/">
           Jobs
          </Link>
          <Link href="/about">
            About
          </Link>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  )
}

export default Header