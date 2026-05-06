import { ClipboardList, Search, BadgeCheck, Wallet } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList size={28} />,
    step: '01',
    title: 'Solicite sua Simulacao',
    desc: 'Preencha o formulario ou fale com nosso consultor pelo WhatsApp. E rapido e sem compromisso.',
  },
  {
    icon: <Search size={28} />,
    step: '02',
    title: 'Analise Rapida',
    desc: 'Nossa equipe analisa seu perfil e encontra a melhor opcao de credito disponivel nos bancos parceiros.',
  },
  {
    icon: <BadgeCheck size={28} />,
    step: '03',
    title: 'Aprovacao',
    desc: 'Credito aprovado! Assinatura digital do contrato de forma simples, segura e sem burocracia.',
  },
  {
    icon: <Wallet size={28} />,
    step: '04',
    title: 'Dinheiro na Conta',
    desc: 'Valor liberado diretamente na sua conta bancaria em ate 24 horas uteis apos a aprovacao.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-[#f8fafc] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#0d3060]/10 text-[#0d3060] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Processo Simples
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3c] mb-4">
            Como <span className="text-[#f0b429]">funciona?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Da simulacao ao dinheiro na conta em apenas 4 passos simples.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#0d3060]/20 via-[#f0b429] to-[#0d3060]/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.step} className="flex flex-col items-center text-center gap-4">
                {/* Icon circle */}
                <div className="relative z-10 w-20 h-20 bg-white rounded-full shadow-lg border-2 border-[#f0b429]/30 flex items-center justify-center text-[#0d3060]">
                  {s.icon}
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#f0b429] rounded-full text-xs font-extrabold text-[#0a1f3c] flex items-center justify-center shadow">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-[#0a1f3c] text-lg">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
