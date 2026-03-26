import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<any[]>([]);

  const sendMessage = async () => {
    if (!msg) return;

    const res = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: msg }),
    });

    const data = await res.json();

    setChat([...chat, { user: msg, bot: data.reply }]);
    setMsg("");
  };

  return (
    <>
      {/* Floating Button */}
      <div
        className="fixed bottom-5 right-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition z-50"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </div>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-5 w-80 bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col z-50">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 font-semibold">
            AI Assistant 🤖
          </div>

          {/* Chat Area */}
          <div className="h-64 overflow-y-auto p-3 space-y-2 text-sm bg-gray-50">
            
            {/* Welcome Message */}
            {chat.length === 0 && (
              <div className="text-gray-500 text-center mt-10">
                👋 Hi! Ask me anything about Nitesh
              </div>
            )}

            {chat.map((c, i) => (
              <div key={i} className="flex flex-col gap-1">
                
                {/* User Message */}
                <div className="self-end bg-blue-500 text-white px-3 py-2 rounded-xl max-w-[75%]">
                  {c.user}
                </div>

                {/* Bot Message */}
                <div className="self-start bg-gray-200 text-black px-3 py-2 rounded-xl max-w-[75%]">
                  {c.bot}
                </div>

              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-2 border-t bg-white">
            <input
              type="text"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 px-3 py-2 rounded-lg border outline-none text-sm"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;