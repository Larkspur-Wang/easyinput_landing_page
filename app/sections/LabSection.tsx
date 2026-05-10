'use client';

export default function LabSection() {
  return (
    <section id="ai" className="relative py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#5c5f66] mb-4 block">LAB</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-heading">AI 助手</h2>
          <p className="text-[#8a8a8a] max-w-xl mx-auto">
            长按快捷键启动 AI 会话，支持图片、截图、选中文字等多模态上下文。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* AI Polish Card */}
          <div className="group relative p-8 rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#0a0a0a] hover:border-[#8b5cf6]/50 transition-all overflow-hidden">
            <div
              className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)' }}
            />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v18" /><path d="M3 12h18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#f5f5f5] mb-2">AI 润色</h3>
              <p className="text-sm text-[#5c5f66] font-mono mb-3">智能文本优化</p>
              <p className="text-[#8a8a8a] text-sm leading-relaxed">
                每句话落地前都经过 AI 润色。支持设定阈值 — 短句保持原样，长句自动优化。
              </p>
            </div>
          </div>

          {/* AI Assistant Card */}
          <div className="group relative p-8 rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#0a0a0a] hover:border-[#14e6d1]/50 transition-all overflow-hidden">
            <div
              className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(20,230,209,0.15) 0%, transparent 70%)' }}
            />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#14e6d1]/10 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14e6d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 10h.01" /><path d="M15 10h.01" /><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#f5f5f5] mb-2">AI 助手</h3>
              <p className="text-sm text-[#5c5f66] font-mono mb-3">多模态上下文</p>
              <p className="text-[#8a8a8a] text-sm leading-relaxed">
                长按快捷键启动 AI 会话，自动获取剪贴板图片、自动截图或选中文字作为上下文。
              </p>
            </div>
          </div>
        </div>

        {/* AI Flow */}
        <div className="reveal rounded-xl border border-[rgba(255,255,255,0.12)] bg-[#0a0a0a] p-6">
          <p className="text-[#5c5f66] text-xs font-mono mb-4">// AI 工作流</p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center text-[#8b5cf6] text-xs font-bold">1</div>
              <span className="text-[#8a8a8a]">获取上下文</span>
            </div>
            <div className="text-[#5c5f66]">→</div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center text-[#8b5cf6] text-xs font-bold">2</div>
              <span className="text-[#8a8a8a]">录音发送</span>
            </div>
            <div className="text-[#5c5f66]">→</div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center text-[#8b5cf6] text-xs font-bold">3</div>
              <span className="text-[#8a8a8a]">AI 回复</span>
            </div>
            <div className="text-[#5c5f66]">→</div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#14e6d1]/20 flex items-center justify-center text-[#14e6d1] text-xs font-bold">4</div>
              <span className="text-[#f5f5f5] font-medium">确认插入</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
