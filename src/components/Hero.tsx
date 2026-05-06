import { ArrowRight, MessageCircle } from 'lucide-react';

const WA_LINK = 'https://wa.me/5521976834322';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a1f3c 0%, #0d3060 50%, #0a4a2f 100%)',
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/WhatsApp_Image_2026-05-04_at_11.52.32.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f3c]/90 via-[#0a1f3c]/70 to-transparent" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#f0b429]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#25d366]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f0b429]/20 border border-[#f0b429]/40 text-[#f0b429] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Correspondente Bancário Autorizado
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Realize seus planos com{' '}
            <span className="text-[#f0b429]">crédito fácil</span> e seguro
          </h1>

          <p className="text-lg sm:text-xl text-white/75 mb-8 leading-relaxed">
            Na CREDHOUSE você encontra as melhores taxas do mercado com aprovação rápida.
            Trabalhamos com BMG, Facta, C6 e outros bancos parceiros.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-[#f0b429] hover:bg-[#d9a020] text-[#0a1f3c] font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Simular Agora
              <ArrowRight size={18} />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1ebe5c] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { value: '+8 mil', label: 'Clientes Atendidos' },
              { value: '4.9', label: 'Avaliacao Media' },
              { value: '24h', label: 'Liberacao Rapida' },
            ].map((b) => (
              <div key={b.label} className="text-center">
                <div className="text-2xl font-extrabold text-[#f0b429]">{b.value}</div>
                <div className="text-xs text-white/60 mt-0.5">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20V60Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
