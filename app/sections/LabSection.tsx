'use client';

export default function LabSection() {
  return (
    <section id="ai" className="relative py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#5c5f66] mb-4 block">LAB</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-heading">不打字实验室</h2>
          <p className="text-[#8a8a8a] max-w-xl mx-auto">
            我们认真研究：到底还有哪些字，可以不由本人亲自打。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
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
              <h3 className="text-xl font-semibold text-[#f5f5f5] mb-2">自动补全片段</h3>
              <p className="text-[#8a8a8a] text-sm leading-relaxed mb-4">
                输入几个关键词，自动找到你可能想插入的片段。
              </p>
              <span className="inline-block text-xs font-mono text-[#8b5cf6] px-2 py-1 rounded border border-[#8b5cf6]/30">
                实验中
              </span>
            </div>
          </div>

          {/* Card 2 */}
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
              <h3 className="text-xl font-semibold text-[#f5f5f5] mb-2">上下文动作</h3>
              <p className="text-[#8a8a8a] text-sm leading-relaxed mb-4">
                根据当前输入场景，推荐回复、格式化、翻译或总结动作。
              </p>
              <span className="inline-block text-xs font-mono text-[#14e6d1] px-2 py-1 rounded border border-[#14e6d1]/30">
                想做
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative p-8 rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#0a0a0a] hover:border-[#f5f5f5]/30 transition-all overflow-hidden">
            <div
              className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(245,245,245,0.08) 0%, transparent 70%)' }}
            />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#f5f5f5]/10 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#f5f5f5] mb-2">个人话术库</h3>
              <p className="text-[#8a8a8a] text-sm leading-relaxed mb-4">
                把你常用的表达沉淀下来，形成自己的输入风格。
              </p>
              <span className="inline-block text-xs font-mono text-[#f5f5f5] px-2 py-1 rounded border border-[rgba(255,255,255,0.2)]">
                计划中
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
