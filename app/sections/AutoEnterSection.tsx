'use client';

export default function AutoEnterSection() {
  return (
    <section id="auto" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto text-center mb-14">
        <div className="reveal">
          <p className="text-[#14e6d1] text-sm font-mono tracking-widest uppercase mb-3">AUTO ENTER</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f5] mb-4">说完松手，直接发送</h2>
          <p className="text-[#8a8a8a] text-lg max-w-2xl mx-auto">
            每个应用可单独配置自动发送 — 包括 Cmd+Enter。松开快捷键，消息立刻发出。
          </p>
        </div>
      </div>

      <div className="reveal max-w-lg mx-auto rounded-xl border border-[rgba(255,255,255,0.12)] bg-[#0a0a0a] overflow-hidden">
        <div className="px-5 py-3 border-b border-[rgba(255,255,255,0.12)] flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold"
            style={{ backgroundColor: '#4A154B25', color: '#4A154B', border: '1px solid #4A154B40' }}
          >
            S
          </div>
          <div>
            <span className="text-[#f5f5f5] text-sm font-medium">Slack</span>
            <span className="text-[#5c5f66] text-xs ml-2">#engineering</span>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="text-[10px] font-mono text-[#5c5f66] px-2 py-0.5 rounded border border-[rgba(255,255,255,0.12)]">
              自动发送: 开
            </span>
          </div>
        </div>
        <div className="p-5 min-h-[120px] flex flex-col justify-end">
          <div className="flex items-end gap-3">
            <div className="flex-1 rounded-lg bg-white/5 border border-[rgba(255,255,255,0.12)] px-4 py-3">
              <span className="text-[#f5f5f5] text-sm">团队好，5 分钟后站会</span>
              <span className="inline-block w-[2px] h-[1em] bg-[#8b5cf6] ml-1 align-middle animate-cursor" />
            </div>
          </div>
        </div>
        <div className="px-5 py-3 border-t border-[rgba(255,255,255,0.12)] flex items-center gap-2">
          <span className="text-[10px] text-[#5c5f66] font-mono px-1.5 py-0.5 rounded border border-[rgba(255,255,255,0.12)]">
            按住说话
          </span>
        </div>
      </div>

      <div className="reveal max-w-lg mx-auto mt-6 flex justify-center gap-3">
        <span className="text-[11px] font-mono text-[#5c5f66] px-3 py-1.5 rounded-lg border border-[rgba(255,255,255,0.12)] bg-[#0a0a0a]">
          Enter
        </span>
        <span className="text-[11px] font-mono text-[#5c5f66] px-3 py-1.5 rounded-lg border border-[rgba(255,255,255,0.12)] bg-[#0a0a0a]">
          Cmd+Enter
        </span>
        <span className="text-[11px] font-mono text-[#5c5f66] px-3 py-1.5 rounded-lg border border-[rgba(255,255,255,0.12)] bg-[#0a0a0a]">
          Shift+Enter
        </span>
      </div>
    </section>
  );
}
