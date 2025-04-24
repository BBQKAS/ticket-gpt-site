import ChatWidget from '../components/ChatWidget';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-mono">
      <div className="w-3/4 p-10 space-y-10">
        <h1 className="text-5xl font-extrabold text-[#00f5d4] drop-shadow-lg">德国球票 · GPT 客服</h1>
        <p className="text-lg text-gray-300">欢迎查询德甲/德国国家队球票信息</p>
        <div className="mt-10">
          <button className="bg-[#00f5d4] text-black font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">立即购票</button>
        </div>
      </div>
      <ChatWidget />
    </div>
  );
}
