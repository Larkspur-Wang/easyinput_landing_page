'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const texts = [
    '常用回复，快捷键一键上屏',
    '模板片段，不用每天手搓',
    '重复输入不用本人到场',
  ];
  const tiRef = useRef(0);
  const ciRef = useRef(0);
  const delRef = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const tl = () => {
        const t = texts[tiRef.current];
        if (delRef.current) {
          setTypedText(t.substring(0, ciRef.current - 1));
          ciRef.current--;
        } else {
          setTypedText(t.substring(0, ciRef.current + 1));
          ciRef.current++;
        }
        let s = delRef.current ? 50 : 120;
        if (!delRef.current && ciRef.current === t.length) {
          s = 2000;
          delRef.current = true;
        } else if (delRef.current && ciRef.current === 0) {
          delRef.current = false;
          tiRef.current = (tiRef.current + 1) % texts.length;
          s = 500;
        }
        setTimeout(tl, s);
      };
      tl();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-14 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)' }}
      />
      <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(20,230,209,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-3xl w-full">
        {/* Logo */}
        <div className="relative mb-3 animate-fade-in-up">
          <div className="absolute inset-0 scale-150 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.20) 0%, rgba(20,230,209,0.10) 40%, transparent 70%)' }}
          />
          <img src="/easyinput_landing_page/Hero图.png" alt="Easy Input" className="relative w-44 h-44 md:w-60 md:h-60 object-contain drop-shadow-[0_0_40px_rgba(139,92,246,0.3)]" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient-heading mb-4 text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          一字不打，<br className="md:hidden" />话也能说完。
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-[#b6bcc8] text-center mb-4 max-w-xl tracking-wide animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          我不是不会打字，是这点破字不配我亲自打。<br />
          Easy Input 把常用短语、模板片段和快捷动作放进你的输入层。
        </p>

        {/* Terminal */}
        <div className="relative w-full max-w-2xl rounded-xl border border-[rgba(255,255,255,0.12)] bg-[#0a0a0a] p-6 md:p-8 font-mono animate-fade-in-up overflow-hidden" style={{ animationDelay: '0.3s' }}>
          <div className="flex gap-2 mb-5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]/60" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]/60" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]/60" />
          </div>
          <div className="text-lg md:text-xl font-medium leading-relaxed text-[#14e6d1]">
            {typedText}
            <span className="inline-block w-[3px] h-[1.1em] bg-[#8b5cf6] ml-1 align-middle animate-cursor" />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="#download" className="px-8 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap text-center inline-flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            开始不打字
          </a>
          <a href="#features" className="px-8 py-3 rounded-full border border-[rgba(255,255,255,0.2)] text-[#f5f5f5] font-medium text-sm hover:bg-white/5 transition-all whitespace-nowrap text-center">
            看看它怎么替我打
          </a>
        </div>

        <p className="text-xs text-[#8e96a6] mt-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          本地优先 / 快捷唤起 / 跨应用输入
        </p>

        {/* Trust line */}
        <p className="text-sm text-[#b6bcc8] mt-8 italic animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          重复输入不用本人到场。
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#8e96a6] text-xs animate-bounce-slow">
        ↓
      </div>
    </section>
  );
}
