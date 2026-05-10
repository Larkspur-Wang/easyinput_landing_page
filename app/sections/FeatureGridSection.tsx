'use client';

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19v3" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><rect x="9" y="2" width="6" height="13" rx="3" />
      </svg>
    ),
    title: '历史记录',
    desc: '每次语音输入自动保存到本地历史，可搜索、可导出、可清空回看。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h10" /><path d="M9 4v16" /><path d="M3 8a2 2 0 0 1 2-2h1" /><path d="M14 4v16" /><path d="M18 8a2 2 0 0 1 2-2h1" />
      </svg>
    ),
    title: '词库同步',
    desc: '个人词库与云端双向同步，在不同设备间保持一致的专业术语和自定义词汇。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
    title: '设置持久化',
    desc: '所有设置、快捷键绑定、注入模式偏好本地持久化存储，重启后自动恢复。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
      </svg>
    ),
    title: '跨应用注入',
    desc: '在任何应用中都能使用 — 编辑器、聊天软件、浏览器表单，一个快捷键，全局可用。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" />
      </svg>
    ),
    title: '焦点恢复',
    desc: '注入完成后自动恢复原始焦点窗口和光标位置，不打断你的工作流。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" /><polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    title: '剪贴板备份',
    desc: '使用剪贴板注入前自动备份原剪贴板内容，注入完成后自动恢复，保护你的剪贴板数据。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3-3h12a3 3 0 1 0-3-3" /><path d="M8 12h8" />
      </svg>
    ),
    title: '多快捷键绑定',
    desc: '为不同功能分配不同快捷键 — 语音输入、编辑录音、AI 助手、粘贴上一条结果、打开历史记录。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />
      </svg>
    ),
    title: '使用统计',
    desc: '追踪你的语音输入数据。每日统计、输入字数、节省时间的估算。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: '本地数据',
    desc: '所有配置、历史记录、词库均本地存储。你的数据，你做主。',
  },
];

export default function FeatureGridSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal mb-16">
          <p className="text-[#5c5f66] text-xs font-mono tracking-widest uppercase mb-3">还有更多</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient-heading mb-4">
            完整功能清单
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
