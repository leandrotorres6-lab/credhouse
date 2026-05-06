import { useState } from 'react';
import { Send, MessageCircle, CheckCircle2 } from 'lucide-react';

const WA_LINK = 'https://wa.me/5521976834322';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', service: '' });
  const [sent, setSent] = useState(false);

  const services = [
    'Credito Consignado INSS',
    'Consignado SIAPE',
    'Consignado CLT',
    'Antecipacao do FGTS',
    'Portabilidade de Credito',
    'Refinanciamento',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    const msg = encodeURIComponent(
      `Ola! Meu nome e ${form.name}. Tenho interesse em: ${form.service || 'Credito Consignado'}. Meu telefone e ${form.phone}.`
    );
    window.open(`https://wa.me/5521976834322?text=${msg}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contato" className="bg-gradient-to-br from-[#0a1f3c] to-[#0d3060] py-20 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#f0b429]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#25d366]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            <span className="inline-block bg-[#f0b429]/20 text-[#f0b429] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Fale Conosco
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Precisa de dinheiro{' '}
              <span className="text-[#f0b429]">rapido e seguro?</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Preencha o formulario ou entre em contato pelo WhatsApp. Um de nossos consultores
              retornara em instantes com a melhor proposta para voce.
            </p>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25d366] hover:bg-[#1ebe5c] text-white font-bold px-6 py-4 rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp agora
            </a>

            <div className="mt-6 text-white/50 text-sm">
              Ou ligue: <span className="text-white font-semibold">(21) 97683-4322</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
                <CheckCircle2 size={52} className="text-[#25d366]" />
                <h3 className="text-xl font-bold text-[#0a1f3c]">Solicitacao enviada!</h3>
                <p className="text-gray-600 text-sm">
                  Abrimos o WhatsApp para voce. Nosso consultor retornara em instantes!
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-[#0a1f3c] mb-6">Solicitar Simulacao</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0d3060]/30 focus:border-[#0d3060] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(21) 99999-9999"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0d3060]/30 focus:border-[#0d3060] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Tipo de credito
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0d3060]/30 focus:border-[#0d3060] transition-all bg-white"
                    >
                      <option value="">Selecione uma opcao</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#0d3060] hover:bg-[#0a1f3c] text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl mt-2"
                  >
                    <Send size={16} />
                    Simular pelo WhatsApp
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    Seus dados estao seguros. Sem spam.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
