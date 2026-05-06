import { CheckCircle2, Clock, Wifi, TrendingDown, UserCheck, Banknote } from 'lucide-react';

const items = [
  {
    icon: <CheckCircle2 size={24} className="text-[#25d366]" />,
    title: 'Aprovacao Facilitada',
    desc: 'Processo simples, sem burocracia. Credito aprovado mesmo para negativados em algumas modalidades.',
  },
  {
    icon: <TrendingDown size={24} className="text-[#25d366]" />,
    title: 'Taxas Reduzidas',
    desc: 'As menores taxas do mercado, negociadas diretamente com nossos bancos parceiros.',
  },
  {
    icon: <UserCheck size={24} className="text-[#25d366]" />,
    title: 'Atendimento Personalizado',
    desc: 'Consultores especializados para encontrar a melhor opcao de credito para o seu perfil.',
  },
  {
    icon: <Clock size={24} className="text-[#25d366]" />,
    title: 'Liberacao Rapida (ate 24h)',
    desc: 'Da simulacao ao deposito em conta em ate 24 horas uteis. Rapido quando voce mais precisa.',
  },
  {
    icon: <Wifi size={24} className="text-[#25d366]" />,
    title: '100% Online',
    desc: 'Todo o processo de forma digital, sem sair de casa. Pratico, seguro e sem filas.',
  },
  {
    icon: <Banknote size={24} className="text-[#25d366]" />,
    title: 'Multiplos Bancos Parceiros',
    desc: 'Trabalhamos com BMG, Facta, C6 e outros bancos para garantir a melhor proposta.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-[#0a1f3c] py-20 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f0b429]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#25d366]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#f0b429]/20 text-[#f0b429] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Por que nos escolher?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Nossos <span className="text-[#f0b429]">diferenciais</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Mais do que credito, oferecemos uma experiencia completa e transparente para voce realizar seus planos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-11 h-11 bg-[#25d366]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
