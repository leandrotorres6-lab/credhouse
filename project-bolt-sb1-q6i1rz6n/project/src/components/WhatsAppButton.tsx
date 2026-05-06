import { MessageCircle } from 'lucide-react';

const WA_LINK = 'https://wa.me/5521976834322';

export default function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5c] text-white font-bold pl-4 pr-5 py-3.5 rounded-full shadow-2xl hover:shadow-green-400/40 transition-all duration-300 hover:-translate-y-1 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={22} className="flex-shrink-0" />
      <span className="text-sm hidden sm:inline">Falar no WhatsApp</span>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-30 animate-ping pointer-events-none" />
    </a>
  );
}
