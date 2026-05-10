'use client';

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.12)]">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between h-auto md:h-14 px-6 py-4 md:py-0 gap-4 md:gap-0">
        <div className="flex items-center gap-6">
          <span className="text-[#5c5f66] text-xs">Easy Input</span>
          <span className="text-[#5c5f66] text-xs">© 2026</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-[#5c5f66]">
          <a href="#" className="hover:text-[#8a8a8a] transition-colors">隐私</a>
          <a href="#" className="hover:text-[#8a8a8a] transition-colors">条款</a>
          <a href="#" className="hover:text-[#8a8a8a] transition-colors">联系我们</a>
        </div>
      </div>
    </footer>
  );
}
