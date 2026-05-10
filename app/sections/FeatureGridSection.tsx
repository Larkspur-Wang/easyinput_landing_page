'use client';

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19v3" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><rect x="9" y="2" width="6" height="13" rx="3" />
      </svg>
    ),
    title: '快捷片段',
    desc: '常用内容，一键上屏。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h10" /><path d="M9 4v16" /><path d="M3 8a2 2 0 0 1 2-2h1" /><path d="M14 4v16" /><path d="M18 8a2 2 0 0 1 2-2h1" />
      </svg>
    ),
    title: '模板回复',
    desc: '固定格式，不再手搓。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
    title: '热键唤起',
    desc: '不打断当前输入流。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
      </svg>
    ),
    title: '跨应用输入',
    desc: '在哪里打字，都能少打一点。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path cx="9" cy="7" r="4" />
      </svg>
    ),
    title: '本地优先',
    desc: '配置尽量留在你电脑里。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" /><polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    title: '轻量不打扰',
    desc: '需要时出现，用完就消失。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3-3h12a3 3 0 1 0-3-3" /><path d="M8 12h8" />
      </svg>
    ),
    title: '自定义规则',
    desc: '按你的习惯组织片段。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />
      </svg>
    ),
    title: '输入工作流',
    desc: '把重复动作变成快捷动作。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: '拒绝内耗',
    desc: '破重复字，不配你亲自敲。',
  },
];

export default function FeatureGridSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal mb-16">
          <p className="text-[#5c5f66] text-xs font-mono tracking-widest uppercase mb-3">还有更多</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient-heading mb-4">
            输入这件小事，少烦你一点
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="reveal rounded-xl border border-[rgba(255,255,255,0.12)] bg-[#0a0a0a] p-6 flex flex-col gap-3 hover:border-[rgba(255,255,255,0.25)] hover:-translate-y-0.5 transition-all"
            >
              {feature.icon}
              <h3 className="text-base font-semibold text-[#f5f5f5]">{feature.title}</h3>
              <p className="text-[#8a8a8a] text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
