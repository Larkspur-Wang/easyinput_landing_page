'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '怎么替我打', href: '#features' },
    { label: '片段库', href: '#mockup' },
    { label: '使用场景', href: '#profiles' },
    { label: '下载', href: '#download' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[rgba(255,255,255,0.12)] bg-black/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between h-14 px-6">
        <a href="#" aria-label="Easy Input" className="flex items-center">
          <img src="/easyinput_landing_page/左上角.png" alt="Easy Input" className="h-9 w-auto max-w-[148px] object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-[13px] text-[#b6bcc8]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#f5f5f5] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#download"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          安排一下
        </a>
      </div>
    </nav>
  );
}
