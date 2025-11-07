import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 p-8">
      <nav className="container mx-auto flex justify-between items-center text-white">
        <div className="text-3xl font-bold">
          <Link href="/">Way2Build</Link>
        </div>
        <div className="flex items-center space-x-12">
          <ul className="hidden md:flex items-center space-x-8">
            <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-gray-300">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
          <button className="border border-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300">
            Let's Talk
          </button>
        </div>
      </nav>
    </header>
  );
}
