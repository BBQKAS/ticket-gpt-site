import { useState } from 'react';

export default function ChatWidget() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const updatedHistory = [...history, { role: 'user', content: input }];
    setHistory(updatedHistory);
    setInput('');
    setLoading(true);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: input, history: updatedHistory }),
    });
    const data = await res.json();

    setHistory([...updatedHistory, { role: 'assistant', content: data.reply }]);
    setLoading(false);
  };

  return (
    <div className="fixed right-0 top-0 w-1/4 h-full bg-black/70 backdrop-blur-md border-l border-[#00f5d4] text-[#00f5d4] font-mono flex flex-col z-50">
      <div className="p-4 font-bold text-lg border-b border-[#00f5d4]">🤖 CyberGPT 客服</div>
      <div className="flex-1 p-4 overflow-y-auto space-y-2 text-sm">
        {history.map((msg, i) => (
          <div key={i}>
            <b>{msg.role === 'user' ? '你' : 'GPT'}：</b> {msg.content}
          </div>
        ))}
        {loading && <div className="italic text-gray-400">GPT 正在输入...</div>}
      </div>
      <div className="p-3 border-t border-[#00f5d4]">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          className="w-full bg-black text-[#00f5d4] border border-[#00f5d4] rounded-full px-4 py-2 placeholder-[#00f5d488] focus:outline-none"
          placeholder="请输入问题..."
        />
      </div>
    </div>
  );
}
