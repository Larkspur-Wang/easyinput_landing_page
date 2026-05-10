'use client';

import { useState } from 'react';

const profiles = [
  { name: 'IDE', desc: '注释、说明、自然语言输入' },
  { name: '聊天', desc: '快捷回复、日常对话' },
  { name: '表单', desc: '精确录入、短文本' },
  { name: '自定义', desc: '自由配置所有参数' },
];

const apps = [
  { c: 'M', n: 'Mail', t: 'IDE', color: '#007AFF' },
  { c: 'iM', n: 'iMessage', t: '聊天', color: '#34C759' },
  { c: 'S', n: 'Slack', t: '聊天', color: '#4A154B' },
  { c: 'D', n: 'Discord', t: '聊天', color: '#5865F2' },
  { c: 'N', n: 'Notion', t: 'IDE', color: '#EFEFEF' },
  { c: 'O', n: 'Obsidian', t: '自定义', color: '#7C3AED' },
  { c: 'VS', n: 'VS Code', t: 'IDE', color: '#007ACC' },
  { c: 'C', n: 'Cursor', t: 'IDE', color: '#00D1B2' },
  { c: 'F', n: 'Figma', t: '自定义', color: '#F24E1E' },
  { c: 'T', n: 'Telegram', t: '聊天', color: '#26A5E4' },
  { c: 'W', n: 'WeChat', t: '聊天', color: '#25D366' },
  { c: 'X', n: 'Xcode', t: 'IDE', color: '#007ACC' },
];

export default function ProfilesSection() {
  const [activeProfile, setActiveProfile] = useState('IDE');

  return (
    <section id="profiles" className="py-24 px-6 overflow-hidden">
      <div className="max-w-[1100px] mx-auto text-center mb-14">
        <div className="reveal">
          <p className="text-[#8b5cf6] text-sm font-mono tracking-widest uppercase mb-3">预设模式</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f5] mb-4">一种预设，全场景适配</h2>
          <p className="text-[#8a8a8a] text-lg max-w-2xl mx-auto">
            IDE、聊天、表单、自定义 — 每种场景都有量身定制的预设配置，一键切换。
          </p>
        </div>
      </div>

      {/* Pill selector */}
      <div className="reveal flex flex-wrap justify-center gap-3 mb-8 max-w-2xl mx-auto">
        {profiles.map((p) => (
          <button
            key={p.name}
            onClick={() => setActiveProfile(p.name)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
              activeProfile === p.name
                ? 'border-[#8b5cf6] text-[#8b5cf6] bg-[#8b5cf6]/10'
                : 'border-[rgba(255,255,255,0.12)] text-[#8a8a8a] hover:border-[rgba(255,255,255,0.25)]'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <p className="reveal text-center text-[#5c5f66] text-sm mb-10">
        {profiles.find((p) => p.name === activeProfile)?.desc}
      </p>

      {/* App marquee */}
      <div className="reveal max-w-3xl mx-auto rounded-xl border border-[rgba(255,255,255,0.12)] bg-[#0a0a0a] overflow-hidden">
        <div className="px-5 py-3 border-b border-[rgba(255,255,255,0.12)] flex items-center justify-between">
          <span className="text-[#5c5f66] text-xs font-mono">应用场景</span>
          <span className="text-[#5c5f66] text-xs">{apps.length} 个应用</span>
        </div>
        <div className="relative overflow-hidden py-5">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-4 animate-marquee" style={{ width: 'max-content' }}>
            {[...apps, ...apps].map((app, i) => {
              const h = app.color.replace('#', '');
              return (
                <div key={`${app.n}-${i}`} className="flex-shrink-0 flex flex-col items-center gap-1.5 w-16">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: `${app.color}20`, border: `1px solid ${app.color}40`, color: app.color }}
                  >
                    {app.c}
                  </div>
                  <span className="text-[10px] text-[#5c5f66] truncate w-full text-center">{app.n}</span>
                  <span
                    className="text-[9px] font-mono px-1.5 py-0.5 rounded-full"
                    style={{ color: app.color, backgroundColor: `${app.color}12` }}
                  >
                    {app.t}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
