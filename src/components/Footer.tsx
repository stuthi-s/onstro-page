'use client';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/images/onstro_logo.png" alt="Onstro Logo" width={180} height={90} />
          </div>
          <p className="text-sm text-gray-600">
            Enterprise Agility Platform with apps to run your business, optimize processes, 
            integrate existing systems & build custom SaaS solutions.
          </p>
          <button className="mt-4 bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-950">
            Contact Us 
          </button>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/legal">Legal</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li><Link href="/workplace">Workplace</Link></li>
            <li><Link href="/jobsoid">Jobsoid</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/ebooks">E-Books & Guides</Link></li>
            <li><Link href="/clients">Client Stories</Link></li>
            <li><Link href="/featured">Featured Article</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Consulting</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Training</a></li>
          </ul>
        </div>
      </div>
      
      <div className="text-center text-gray-500 mt-8 pt-6 text-sm border-t">
        <p>© {new Date().getFullYear()} Onstro. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer