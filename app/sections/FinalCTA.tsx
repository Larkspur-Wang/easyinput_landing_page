'use client';

export default function FinalCTA() {
  return (
    <section id="download" className="relative border-t border-[rgba(255,255,255,0.12)]">
      <div className="py-24 px-6">
        <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center">
          <div className="reveal">
            <p className="text-[#5c5f66] text-xs font-mono tracking-widest uppercase mb-4">准备好了？</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient-heading mb-3">
              开口就能输入
            </h2>
            <p className="text-[#8a8a8a] text-sm mb-8 max-w-md">
              Easy Input macOS 版现已发布，免费下载体验。Apple Silicon & Intel 双架构支持。
            </p>
            <div className="w-full max-w-lg">
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <a
                  href="#"
                  className="px-8 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap text-center inline-flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  下载 macOS 版
                </a>
              </div>
              <p className="text-xs text-[#5c5f66] mt-4">macOS 13.0+ · Apple Silicon & Intel · 约 45 MB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
