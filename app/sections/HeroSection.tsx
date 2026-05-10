'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const texts = ['按住 Option + Space，开始说话...', '松开手指，文字自动注入', '燕峰我们今天下午四点半开项目进度会吧'];
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
          <svg viewBox="0 0 180 180" fill="none" className="relative w-40 h-40 md:w-52 md:h-52 drop-shadow-[0_0_40px_rgba(139,92,246,0.3)]">
            <rect width="180" height="180" rx="40" fill="url(#g1)" />
            <path d="M90 55c-15 0-27 10-27 25 0 8 3 15 8 20v12c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5v-2h12v2c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5v-12c5-5 8-12 8-20 0-15-12-25-27-25z" fill="white" />
            <circle cx="84" cy="88" r="3" fill="#0a0a0a" />
            <circle cx="96" cy="88" r="3" fill="#0a0a0a" />
            <path d="M90 102c-4 0-7-2-7-2s2 5 7 5 7-5 7-5-3 2-7 2z" fill="rgba(139,92,246,0.5)" />
            <defs><linearGradient id="g1" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse"><stop stopColor="#8b5cf6" /><stop offset="1" stopColor="#14e6d1" /></linearGradient></defs>
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient-heading mb-2 text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          开口就能输入
        </h1>
        <p className="text-sm md:text-base text-[#8a8a8a] text-center mb-10 tracking-wide italic animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          桌面语音转文字输入工具，全局快捷键 + 云端识别 + 跨应用文本注入
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
            下载 macOS 版本
          </a>
          <p className="text-xs text-[#5c5f66]">专为 macOS 优化 · Apple Silicon & Intel</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#5c5f66] text-xs animate-bounce-slow">
        ↓
      </div>
    </section>
  );
}
