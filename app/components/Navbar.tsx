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
    { label: '使用场景', href: '#profiles' },
    { label: 'GitHub', href: 'https://github.com/Larkspur-Wang/easyinput_landing_page' },
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
        <a href="#" className="flex items-center gap-2.5 text-[#f5f5f5] font-semibold text-base">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5">
            <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />
            <path d="M9 10h.01" />
            <path d="M15 10h.01" />
          </svg>
          <span>一字不打</span>
          <span className="text-[#5c5f66] text-xs font-normal hidden sm:inline">Easy Input</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-[13px] text-[#8a8a8a]">
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
