'use client';

import { useEffect, useRef, useState } from 'react';

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
  const features = [
    {
      label: '语音 PTT',
      title: '按住说，松手写',
      desc: '全局快捷键驱动，按下开始录音，松开结束。识别结果自动注入当前焦点应用，无需离开当前工作流。',
      demo: (
        <div className="text-sm">
          <p style={{ color: 'var(--text-tertiary)', marginBottom: '8px' }}>// 快捷键行为</p>
          <p className="mb-1"><span className="text-[#14e6d1]">按住</span> <span className="text-[#f5f5f5]">Option + Space</span> <span className="text-[#5c5f66]">→ 开始录音</span></p>
          <p className="mb-1"><span className="text-[#8b5cf6]">松开</span> <span className="text-[#f5f5f5]">Option + Space</span> <span className="text-[#5c5f66]">→ 停止录音，自动注入</span></p>
          <p><span className="text-[#5c5f66]">录音中再次按下 → 取消</span></p>
        </div>
      ),
    },
    {
      label: '多路径注入',
      title: '四种方式，任意场景',
      desc: 'Auto 智能兼容、模拟打字、剪贴板粘贴、AppleScript — 根据场景自动或手动选择最合适的注入策略。',
      demo: (
        <div className="text-sm">
          <p style={{ color: 'var(--text-tertiary)', marginBottom: '8px' }}>// 注入模式</p>
          <p className="mb-1"><span className="text-[#8b5cf6]">Auto</span> <span className="text-[#5c5f66]">→ 智能选择（推荐）</span></p>
          <p className="mb-1"><span className="text-[#14e6d1]">打字</span> <span className="text-[#5c5f66]">→ 逐字模拟键盘</span></p>
          <p className="mb-1"><span className="text-[#14e6d1]">粘贴</span> <span className="text-[#5c5f66]">→ 剪贴板注入</span></p>
          <p><span className="text-[#14e6d1]">AppleScript</span> <span className="text-[#5c5f66]">→ macOS 兼容 fallback</span></p>
        </div>
      ),
    },
    {
      label: '输出后处理',
      title: '说出来是乱的，写出来是对的',
      desc: '识别结果经过本地确定性处理：自定义替换、XML/括号/填充词清理。规则即结果，没有 AI 的不确定性。',
      demo: (
        <div className="text-sm">
          <p style={{ color: 'var(--text-tertiary)', marginBottom: '8px' }}>// 清理效果</p>
          <p className="mb-1 line-through text-[#8a8a8a]">&lt;speak&gt;今天天气不错&lt;/speak&gt;</p>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '11px', margin: '4px 0' }}>↓ 清理后</p>
          <p className="text-[#14e6d1]">今天天气不错</p>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal mb-16">
          <p className="text-[#5c5f66] text-xs font-mono tracking-widest uppercase mb-3">核心功能</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            <span className="text-gradient-heading">快捷键驱动的输入工作流</span>
          </h2>
          <p className="text-[#8a8a8a] text-base max-w-lg">
            全局快捷键 + 云端识别 + 跨应用文本注入，开口就能在任何应用中输入。
          </p>
        </div>

        <div className="space-y-6">
          {features.map((feature, i) => (
            <div
              key={feature.label}
              className="reveal rounded-xl border border-[rgba(255,255,255,0.12)] bg-[#0a0a0a] p-6 md:p-8 hover:border-[rgba(255,255,255,0.25)] transition-colors"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-mono text-[#14e6d1] tracking-widest uppercase">{feature.label}</span>
                  <h3 className="text-xl font-semibold text-[#f5f5f5] mt-2 mb-2">{feature.title}</h3>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">{feature.desc}</p>
                </div>
                <div className="md:w-96 shrink-0 rounded-lg bg-black border border-[rgba(255,255,255,0.12)] p-4 font-mono">
                  {feature.demo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
