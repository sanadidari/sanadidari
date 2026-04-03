"use client";

import { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, X, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePremium } from "@/context/PremiumContext";

type Message = {
  role: "user" | "bot";
  content: string;
};

export default function Chatbot() {
  const { lang, theme } = usePremium();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatbotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    setMessages([
      { role: "bot", content: lang === "ar" ? "مرحبا ! كيف يمكنني مساعدتك اليوم ؟" : lang === "fr" ? "Bonjour ! Comment puis-je vous aider aujourd'hui ?" : "Hello! How can I help you today?" }
    ]);
  }, [lang]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, lang }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: lang === "ar" ? "عذرا، حدث خطأ. يرجى المحاولة لاحقا." : lang === "fr" ? "Désolé, une erreur est survenue. Veuillez réessayer plus tard." : "Sorry, an error occurred. Please try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      ref={chatbotRef}
      className={`fixed bottom-6 z-[9999] flex flex-col items-end gap-4 font-cairo ${lang === 'ar' ? 'left-6' : 'right-6'}`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className={`w-[350px] h-[500px] max-h-[calc(100vh-120px)] backdrop-blur-lg border shadow-2xl rounded-2xl flex flex-col overflow-hidden ${theme === 'dark'
              ? 'bg-black/90 border-white/10'
              : 'bg-white/90 border-white/20'
              }`}
          >
            {/* Header */}
            <div className={`p-4 flex justify-between items-center text-white shadow-md ${theme === 'dark'
              ? 'bg-gradient-to-r from-[#D4AF37] to-[#b49023]'
              : 'bg-gradient-to-r from-[#82503E] to-[#6a4233]'
              }`}>
              <div className="w-7"></div>
              <div className="flex flex-col items-center">
                <h3 className="font-bold text-lg">{lang === 'ar' ? 'مساعد سند' : lang === 'fr' ? 'Sanad Assistant' : 'Sanad Assistant'}</h3>
                <span className="text-xs opacity-90">{lang === 'ar' ? 'متصل' : lang === 'fr' ? 'En ligne' : 'Online'}</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Fermer le chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${theme === 'dark' ? 'bg-black/50' : 'bg-gray-50/50'}`}>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-none shadow-sm text-sm ${msg.role === "user"
                      ? (theme === 'dark' ? "bg-[#D4AF37] text-white" : "bg-[#82503E] text-white")
                      : (theme === 'dark' ? "bg-[#1a1a1a] text-gray-200 border border-white/10" : "bg-white text-gray-800 border border-gray-100")
                      }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className={`p-3 rounded-none border shadow-sm flex items-center gap-2 ${theme === 'dark'
                    ? 'bg-[#1a1a1a] border-white/10'
                    : 'bg-white border-gray-100'
                    }`}>
                    <Loader2 size={16} className={`animate-spin ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#82503E]'}`} />
                    <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {lang === 'ar' ? 'سند يكتب...' : lang === 'fr' ? 'Sanad écrit...' : 'Sanad is typing...'}
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className={`p-3 border-t flex gap-2 ${theme === 'dark'
              ? 'bg-black/90 border-white/10'
              : 'bg-white border-gray-100'
              }`}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={lang === 'ar' ? 'اكتب رسالتك...' : lang === 'fr' ? 'Écrivez votre message...' : 'Write your message...'}
                className={`flex-1 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 transition-all text-sm ${theme === 'dark'
                  ? 'bg-[#1a1a1a] text-white focus:ring-[#D4AF37]/50 placeholder-gray-500'
                  : 'bg-gray-100 text-gray-800 focus:ring-[#82503E]/50'
                  }`}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className={`p-2 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm cursor-pointer ${theme === 'dark'
                  ? 'bg-[#D4AF37] hover:bg-[#b49023]'
                  : 'bg-[#82503E] hover:bg-[#6a4233]'
                  }`}
                aria-label="Envoyer"
              >
                <Send size={18} className={lang === 'ar' ? 'rotate-180' : ''} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 text-white rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-all border-2 border-white/20 ${theme === 'dark'
          ? 'bg-gradient-to-br from-[#D4AF37] to-[#b49023]'
          : 'bg-gradient-to-br from-[#82503E] to-[#6a4233]'
          }`}
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} className={lang === 'ar' ? 'scale-x-[-1]' : ''} />}
      </motion.button>
    </div>
  );
}
