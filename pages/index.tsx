import ChatWidget from '../components/ChatWidget';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono">
      <main className="w-3/4 p-10 space-y-10">
        <h1 className="text-4xl font-extrabold text-[#8f00ff]">德国球票·GPT 客服</h1>
        <p>在这里你可以查询德甲、德国国家队比赛的票务信息。</p>
      </main>
      <ChatWidget />
    </div>
  );
}
