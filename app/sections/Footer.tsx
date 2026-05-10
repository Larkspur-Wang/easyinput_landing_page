'use client';

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.12)]">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between h-auto md:h-14 px-6 py-4 md:py-0 gap-4 md:gap-0">
        <div className="flex items-center gap-6">
          <span className="text-[#f5f5f5] text-xs font-medium">Easy Input</span>
          <span className="text-[#5c5f66] text-xs">© 2026</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-[#5c5f66]">
          <a href="#" className="hover:text-[#8a8a8a] transition-colors">GitHub</a>
          <a href="#" className="hover:text-[#8a8a8a] transition-colors">Docs</a>
          <a href="#" className="hover:text-[#8a8a8a] transition-colors">Issues</a>
          <a href="#" className="hover:text-[#8a8a8a] transition-colors">Roadmap</a>
        </div>
      </div>
      <div className="text-center pb-4">
        <p className="text-[#5c5f66] text-xs">不是不会打字，是不想再手搓破重复字了。</p>
      </div>
    </footer>
  );
}
