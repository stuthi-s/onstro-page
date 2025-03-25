"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Dropdown, Space } from "antd";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = {
    Products: [
      { key: "1", label: <Link href="#">Workplace</Link> },
      { key: "2", label: <Link href="#">Jobsoid</Link> },
      { key: "3", label: <Link href="#">BYOS</Link> },
    ],
    Services: [
      { key: "1", label: <Link href="#">IT Consulting</Link> },
      { key: "2", label: <Link href="#">Low-Code Development</Link> },
      { key: "3", label: <Link href="#">Custom Software Development</Link> },
    ],
    Resources: [
      { key: "1", label: <Link href="#">Blog</Link> },
      { key: "2", label: <Link href="#">Ebooks</Link> },
      { key: "3", label: <Link href="#">Case Studies</Link> },
      { key: "4", label: <Link href="#">What is CRM</Link> },
    ],
    Company: [
      { key: "1", label: <Link href="/about-us">About Us</Link> },
      { key: "2", label: <Link href="/careers">Careers</Link> },
    ],
  };

  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-lg shadow-md px-4 sm:px-6 py-3 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] max-w-[1100px] flex items-center justify-between flex-wrap">
      <div className="flex items-center space-x-10">
        <Link href="/">
          <Image src="/images/onstro_logo.png" alt="Onstro Logo" width={80} height={40} className="w-[70px] sm:w-[80px] md:w-[85px]" />
        </Link>

        <nav className="hidden md:flex space-x-3 lg:space-x-6">
          {Object.keys(menuItems).map((category) => (
            <Dropdown key={category} menu={{ items: menuItems[category as keyof typeof menuItems] }}>
              <span className="text-gray-700 flex items-center cursor-pointer text-sm md:text-xs lg:text-sm">
                <Space>
                  {category}<span className="onstro-down align-middle text-sm md:text-xs lg:text-sm"></span>
                </Space>
              </span>
            </Dropdown>
          ))}
        </nav>
      </div>
      <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
        <Link
          href="#"
          className="text-gray-700 text-xs md:text-xs 
               border border-blue-950 px-3 py-1 rounded-lg hover:border-blue-900 transition w-[120px] text-center">
          Sign In
        </Link>
        <Link
          href="/contact-us"
          className="bg-blue-950 text-white px-3 py-1 rounded-lg hover:bg-blue-900 
               text-xs md:text-xs w-[120px] text-center">
          Contact Us
        </Link>
      </div>

      <button
        className="md:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 w-full bg-white shadow-md rounded-lg p-5 flex flex-col space-y-4 md:hidden">
          {Object.keys(menuItems).map((category) => (
            <Dropdown key={category} menu={{ items: menuItems[category as keyof typeof menuItems] }}>
              <span className="text-gray-700 hover:text-gray-900 flex items-center cursor-pointer text-sm sm:text-base">
                <Space>
                  {category} <span className="onstro-down align-middle text-xs"></span>
                </Space>
              </span>
            </Dropdown>
          ))}
          <Link
            href="#"
            className="text-gray-700 text-sm md:text-xs lg:text-sm 
             whitespace-nowrap border border-blue-950 px-4 py-2 rounded-lg 
             hover:border-blue-900 transition min-w-[120px] text-center">
            Sign In
          </Link>
          <Link
            href="/contact-us"
            className="bg-blue-950 text-white px-4 md:px-3 lg:px-4 py-3 md:py-1 lg:py-2 
             rounded-lg hover:bg-blue-900 text-sm md:text-xs lg:text-sm 
             whitespace-nowrap min-w-[120px] text-center">
            Contact Us
          </Link>
        </div>
      )}
    </header>
  )
}