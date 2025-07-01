import React from 'react';

const researchData = [
  { system: 'ChatGPT / GPT-4', failure: 'Surface positivity, poor emotion regulation, mental health misguidance', sources: [1, 2, 3] },
  { system: 'Claude', failure: 'Pleaser-bot, low emotional trust', sources: [4, 5] },
  { system: 'Gemini, Copilot, etc.', failure: 'Benchmark gap between tests and real-world nuance', sources: [6] },
  { system: 'Replika', failure: 'Boundary violations, sexual content', sources: [7] },
  { system: 'Character.ai', failure: 'Self-harm promotion, addictive manipulation', sources: [8] },
  { system: 'Tay, Zo, Sydney', failure: 'Racism, over-filtering, erratic emotional outputs', sources: [9, 10, 11] },
  { system: 'General studies', failure: 'Customer anger, empathy gap, child risk', sources: [12, 13] },
];

const researchSources = [
  { id: 1, url: 'https://community.openai.com/t/emotional-intelligence-in-ai-rational-emotional-patterns-rem-and-ai-specific-perception-engine-as-a-balance-and-control-system/994060?utm_source=chatgpt.com' },
  { id: 2, url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11562005/?utm_source=chatgpt.com' },
  { id: 3, url: 'https://www.businessinsider.com/chatgpt-making-us-weird-artificial-intelligence-disrupting-work-social-life-2025-6?utm_source=chatgpt.com' },
  { id: 4, url: 'https://www.axios.com/2025/06/26/anthropic-claude-companion-therapist-coach?utm_source=chatgpt.com' },
  { id: 5, url: 'https://www.tomsguide.com/ai/turns-out-most-people-arent-using-ai-for-companionship-so-much-for-my-her-era?utm_source=chatgpt.com' },
  { id: 6, url: 'https://theeconomyofmeaning.com/2025/05/27/how-emotionally-intelligent-is-chatgpt-surprisingly-smart-new-research-finds/?utm_source=chatgpt.com' },
  { id: 7, url: 'https://arxiv.org/abs/2504.04299?utm_source=chatgpt.com' },
  { id: 8, url: 'https://arxiv.org/abs/2505.11649?utm_source=chatgpt.com' },
  { id: 9, url: 'https://en.wikipedia.org/wiki/Tay_%28chatbot%29?utm_source=chatgpt.com' },
  { id: 10, url: 'https://en.wikipedia.org/wiki/Zo_%28bot%29?utm_source=chatgpt.com' },
  { id: 11, url: 'https://en.wikipedia.org/wiki/Sydney_%28Microsoft_Prometheus%29?utm_source=chatgpt.com' },
  { id: 12, url: 'https://www.nature.com/articles/s41599-024-03879-5?utm_source=chatgpt.com' },
  { id: 13, url: 'https://www.cam.ac.uk/research/news/ai-chatbots-have-shown-they-have-an-empathy-gap-that-children-are-likely-to-miss?utm_source=chatgpt.com' },
];

const Research: React.FC = () => (
  <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-indigo-500/5 rounded-full blur-2xl"></div>
    </div>
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Our Research: Why Emotional AI Fails
        </h2>
        <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
          Despite rapid advances, leading AI platforms consistently fail at true emotional intelligence. Our research and industry studies reveal a pattern of surface-level empathy, reinforcement of harmful behaviors, and inability to handle cultural nuance or trauma sensitivity.
        </p>
      </div>
      <div className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {researchData.map((row, i) => (
            <div key={row.system} className="flex flex-col justify-between h-full bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg min-h-[220px]">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">{row.system}</h4>
                <p className="text-white/80 text-sm mb-4 min-h-[60px]">{row.failure}</p>
              </div>
              <div className="mt-auto">
                <span className="text-xs text-white/60">Sources: </span>
                {row.sources.map((id, j) => (
                  <a
                    key={id}
                    href={researchSources.find(s => s.id === id)?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-300 hover:text-blue-400 mr-1"
                  >
                    [{id}]{j < row.sources.length - 1 ? ',' : ''}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">How Evolance Solves the Emotional AI Gap</h3>
        <p className="text-lg font-light text-white/90 mb-10 text-center max-w-2xl mx-auto">
          Our research revealed a painful truth: Even the most advanced AI platforms — ChatGPT, Claude, Gemini, Replika — fail at emotional intelligence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col justify-between h-full bg-white/10 rounded-2xl p-6 border border-white/10 shadow-lg min-h-[140px]">
            <h4 className="text-xl font-semibold text-white mb-2">Emotional Reasoning by Design</h4>
            <p className="text-white/80 text-base">Architected around emotional reasoning, not retrofitted sentiment scores.</p>
          </div>
          <div className="flex flex-col justify-between h-full bg-white/10 rounded-2xl p-6 border border-white/10 shadow-lg min-h-[140px]">
            <h4 className="text-xl font-semibold text-white mb-2">Clinically Reinforced & Trauma-Aware</h4>
            <p className="text-white/80 text-base">Built with clinical input and trauma awareness at the core.</p>
          </div>
          <div className="flex flex-col justify-between h-full bg-white/10 rounded-2xl p-6 border border-white/10 shadow-lg min-h-[140px]">
            <h4 className="text-xl font-semibold text-white mb-2">Culturally & Identity Adaptive</h4>
            <p className="text-white/80 text-base">Adapts to every user's culture and identity for true inclusivity.</p>
          </div>
          <div className="flex flex-col justify-between h-full bg-white/10 rounded-2xl p-6 border border-white/10 shadow-lg min-h-[140px]">
            <h4 className="text-xl font-semibold text-white mb-2">Long-Term Emotional Growth</h4>
            <p className="text-white/80 text-base">Guides users into long-term emotional growth, not just short-term engagement.</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-lg font-semibold text-blue-300">
            "We're not trying to be everywhere in AI. We're building the one place where emotional safety, self-worth, and deep human feelings finally have a home."
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Research; 