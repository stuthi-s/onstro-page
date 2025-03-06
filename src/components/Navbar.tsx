"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { FiMenu, FiX } from "react-icons/fi"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = {
    Products: [
      { key: "1", label: <Link href="#">Workplace</Link> },
      { key: "2", label: <Link href="#">Jobsoid</Link> },
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
    <header className="fixed top-12 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-lg shadow-md px-6 py-3 w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] max-w-[900px] flex items-center justify-between">
      <div className="flex items-center space-x-6 shrink-0">
        <Link href="/">
          <Image src="/images/onstro_logo.png" alt="Onstro Logo" width={90} height={45} />
        </Link>

        <nav className="hidden md:flex space-x-6">
          {Object.keys(menuItems).map((category) => (
            <Dropdown key={category} menu={{ items: menuItems[category as keyof typeof menuItems] }}>
              <span className="text-gray-700 hover:text-gray-900 flex items-center cursor-pointer">
                <Space>
                  {category} <DownOutlined />
                </Space>
              </span>
            </Dropdown>
          ))}
        </nav>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <Link href="#" className="text-gray-700 hover:text-gray-900"> Sign In </Link>
        <Link href="/contact-us" className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue"> Contact Us </Link>
      </div>

      <button 
        className="md:hidden text-gray-700" 
        onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-lg p-6 flex flex-col space-y-6 md:hidden">
          {Object.keys(menuItems).map((category) => (
            <Dropdown key={category} menu={{ items: menuItems[category as keyof typeof menuItems] }}>
              <span className="text-gray-700 hover:text-gray-900 flex items-center cursor-pointer">
                <Space>
                  {category} <DownOutlined />
                </Space>
              </span>
            </Dropdown>
          ))}
          <Link href="#" className="bg-transparent bg-blue-950 text-gray-700 hover:text-gray-900"> Sign In </Link>
          <Link href="/contact-us" className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-950 text-center"> Contact Us </Link>
         </div>
      )}
    </header>
  )
}