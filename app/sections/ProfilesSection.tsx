'use client';

import { useState } from 'react';

const profiles = [
  {
    name: '打工人',
    title: '日报周报，不必亲自受苦。',
    desc: '固定格式、进度同步、礼貌回复，一键丢出去。',
  },
  {
    name: '客服',
    title: '高频回复，别再复制粘贴到麻木。',
    desc: '常见问题、售后话术、处理流程，统一沉淀成片段。',
  },
  {
    name: '开发者',
    title: '命令、代码、注释，别天天重敲。',
    desc: '常用命令、代码模板、提交信息，快捷插入。',
  },
  {
    name: '写作者',
    title: '灵感要快，格式别拖后腿。',
    desc: '开头、结构、标题模板，随时调出来。',
  },
  {
    name: '运营',
    title: '活动话术、社群回复，批量省心。',
    desc: '把常用表达整理成库，少一点手搓，多一点稳定输出。',
  },
  {
    name: '懒人模式',
    title: '不是懒，是懒得很合理。',
    desc: '重复劳动已经够多了，打字这件小事能省就省。',
  },
];

export default function ProfilesSection() {
  const [activeProfile, setActiveProfile] = useState('打工人');
  const current = profiles.find((p) => p.name === activeProfile);

  return (
    <section id="profiles" className="py-24 px-6 overflow-hidden">
      <div className="max-w-[1100px] mx-auto text-center mb-14">
        <div className="reveal">
          <p className="text-[#8b5cf6] text-sm font-mono tracking-widest uppercase mb-3">使用场景</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f5] mb-4">不同精神状态，同一套解法</h2>
          <p className="text-[#b6bcc8] text-lg max-w-2xl mx-auto">
            不管是哪个工位，重复输入都不该亲自打。
          </p>
        </div>
      </div>

      {/* Pill selector */}
      <div className="reveal flex flex-wrap justify-center gap-3 mb-8 max-w-3xl mx-auto">
        {profiles.map((p) => (
          <button
            key={p.name}
            onClick={() => setActiveProfile(p.name)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
              activeProfile === p.name
                ? 'border-[#8b5cf6] text-[#8b5cf6] bg-[#8b5cf6]/10'
                : 'border-[rgba(255,255,255,0.12)] text-[#b6bcc8] hover:border-[rgba(255,255,255,0.25)]'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Active profile card */}
      <div className="reveal max-w-2xl mx-auto rounded-xl border border-[rgba(255,255,255,0.12)] bg-[#0a0a0a] p-8 text-center">
        <h3 className="text-xl font-semibold text-[#f5f5f5] mb-2">{current?.title}</h3>
        <p className="text-[#b6bcc8] text-sm leading-relaxed">{current?.desc}</p>
      </div>
    </section>
  );
}
