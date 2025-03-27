'use client';
import React from 'react';
import { Collapse } from 'antd';
import { FacebookFilled, TwitterOutlined, LinkedinFilled } from "@ant-design/icons";
import type { CollapseProps } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'COMPANY',
    children: (
      <ul className="space-y-2">
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
        <li><Link href="/careers">Careers</Link></li>
        <li><Link href="/legal">Legal</Link></li>
      </ul>
    ),
  },
  {
    key: '2',
    label: 'PRODUCTS',
    children: (
      <ul className="space-y-2">
        <li><Link href="/workplace">Workplace</Link></li>
        <li><Link href="/jobsoid">Jobsoid</Link></li>
      </ul>
    ),
  },
  {
    key: '3',
    label: 'RESOURCES',
    children: (
      <ul className="space-y-2">
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/ebooks">E-Books & Guides</Link></li>
        <li><Link href="/clients">Client Stories</Link></li>
        <li><Link href="/featured">Featured Article</Link></li>
      </ul>
    ),
  },
  {
    key: '4',
    label: 'SERVICES',
    children: (
      <ul className="space-y-2">
        <li><Link href="#">IT Consulting</Link></li>
        <li><Link href="#">Low-Code Development</Link></li>
        <li><Link href="#">Custom Software Development</Link></li>
      </ul>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="md:grid md:grid-cols-3 md:gap-8 mb-10">
          <div className="md:col-span-1">
            <Image src="/images/onstro_logo.png" alt="Onstro Logo" width={160} height={80} />
            <p className="text-md text-gray-600 mt-4">
              Enterprise Agility Platform with apps to run your business, optimize processes,
              integrate existing systems & build custom SaaS solutions.
            </p>
            <Link href="/" className="hover:text-blue-850 p-5">
              <FacebookFilled className="size-10"/>
            </Link>
            <Link href="/" className="hover:text-blue-850 p-5">
              <TwitterOutlined className="size-10"/>
            </Link>
            <Link href="https://in.linkedin.com/company/onstro" className="hover:text-blue-850 p-5">
              <LinkedinFilled size={20} />
            </Link>
          </div>


          <div className="hidden md:grid md:col-span-2 grid-cols-4 gap-8">
            {items.map((section) => (
              <div key={section.key}>
                <h3 className="text-lg text-blue-950 font-semibold mb-4">{section.label}</h3>
                {section.children}
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <Collapse accordion items={items} />
        </div>
      </div>

      <div className="text-gray-500 mt-8 pt-6 text-sm border-t ml-6 text-center">
        <p>© {new Date().getFullYear()} Onstro. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer