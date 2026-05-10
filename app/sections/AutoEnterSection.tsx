'use client';

export default function AutoEnterSection() {
  return (
    <section id="mockup" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto text-center mb-14">
        <div className="reveal">
          <p className="text-[#14e6d1] text-sm font-mono tracking-widest uppercase mb-3">片段召唤</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f5] mb-4">快捷键一按，嘴替上岗</h2>
          <p className="text-[#8a8a8a] text-lg max-w-2xl mx-auto">
            在你正在输入的地方，把常用内容叫出来。不切窗口，不翻文档。
          </p>
        </div>
      </div>

      <div className="reveal max-w-lg mx-auto rounded-xl border border-[rgba(255,255,255,0.12)] bg-[#0a0a0a] overflow-hidden">
        <div className="px-5 py-3 border-b border-[rgba(255,255,255,0.12)] flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold"
            style={{ backgroundColor: '#4A154B25', color: '#E8A5E8', border: '1px solid #4A154B40' }}
          >
            EI
          </div>
          <div>
            <span className="text-[#f5f5f5] text-sm font-medium">一字不打</span>
            <span className="text-[#5c5f66] text-xs ml-2">片段面板</span>
          </div>
        </div>
        <div className="p-5 space-y-2">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-[rgba(255,255,255,0.08)]">
            <span className="text-[#14e6d1] text-xs font-mono w-16">/reply</span>
            <span className="text-[#8a8a8a] text-sm">客气回复</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-[rgba(255,255,255,0.08)]">
            <span className="text-[#14e6d1] text-xs font-mono w-16">/summary</span>
            <span className="text-[#8a8a8a] text-sm">会议纪要</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-[rgba(255,255,255,0.08)]">
            <span className="text-[#14e6d1] text-xs font-mono w-16">/todo</span>
            <span className="text-[#8a8a8a] text-sm">待办格式</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-[rgba(255,255,255,0.08)]">
            <span className="text-[#14e6d1] text-xs font-mono w-16">/email</span>
            <span className="text-[#8a8a8a] text-sm">邮件开头</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-[rgba(255,255,255,0.08)]">
            <span className="text-[#14e6d1] text-xs font-mono w-16">/snippet</span>
            <span className="text-[#8a8a8a] text-sm">常用片段</span>
          </div>
        </div>
        <div className="px-5 py-3 border-t border-[rgba(255,255,255,0.12)] flex items-center justify-between">
          <span className="text-[10px] text-[#5c5f66] font-mono">快捷键唤出片段面板</span>
          <span className="text-[10px] text-[#5c5f66] font-mono">本人没打，内容已到</span>
        </div>
      </div>
    </section>
  );
}
