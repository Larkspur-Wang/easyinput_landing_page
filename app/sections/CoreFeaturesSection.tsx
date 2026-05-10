'use client';

import { useEffect, useRef } from 'react';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function CoreFeaturesSection() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal mb-16">
          <p className="text-[#8e96a6] text-xs font-mono tracking-widest uppercase mb-3">重复输入</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            <span className="text-gradient-heading">重复输入，真的很不配。</span>
          </h2>
          <p className="text-[#b6bcc8] text-base max-w-lg">
            每天打一遍的东西，就不该每天再打一遍。
          </p>
        </div>

        {/* Comparison */}
        <div className="reveal rounded-xl border border-[rgba(255,255,255,0.12)] bg-[#0a0a0a] p-6 md:p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-[#b6bcc8] text-sm font-mono mb-3 line-through">手搓输入</p>
              <p className="text-[#8e96a6] text-sm leading-relaxed">
                找模板 → 复制 → 改几个字 → 粘贴 → 再检查
              </p>
            </div>
            <div>
              <p className="text-[#14e6d1] text-sm font-mono mb-3">一字不打</p>
              <p className="text-[#f5f5f5] text-sm leading-relaxed">
                快捷键 → 选片段 → 上屏
              </p>
            </div>
          </div>
        </div>

        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: '少敲一点',
              desc: '常用回复、固定格式、模板片段，一次配置，反复使用。',
            },
            {
              title: '少找一点',
              desc: '不用在收藏夹、备忘录和聊天记录里翻来翻去。',
            },
            {
              title: '少烦一点',
              desc: '把重复输入交给工具，把脑子留给真正要想的事。',
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className="reveal rounded-xl border border-[rgba(255,255,255,0.12)] bg-[#0a0a0a] p-6 hover:border-[rgba(255,255,255,0.25)] transition-colors"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-[#f5f5f5] mb-2">{card.title}</h3>
              <p className="text-[#b6bcc8] text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
