import { Landmark, Building2, HardHat, BarChart3, RefreshCw, ArrowRight } from 'lucide-react';

const WA_LINK = 'https://wa.me/5521976834322';

const services = [
  {
    icon: <Landmark size={32} />,
    color: 'bg-blue-50 text-blue-700',
    accent: 'border-blue-200',
    title: 'Credito Consignado INSS',
    desc: 'Para aposentados e pensionistas do INSS. Parcelas descontadas diretamente do beneficio, com as menores taxas do mercado.',
    badge: 'Mais Solicitado',
  },
  {
    icon: <Building2 size={32} />,
    color: 'bg-teal-50 text-teal-700',
    accent: 'border-teal-200',
    title: 'Consignado SIAPE',
    desc: 'Exclusivo para servidores publicos federais. Credito com margem consignavel e condicoes especiais.',
    badge: null,
  },
  {
    icon: <HardHat size={32} />,
    color: 'bg-orange-50 text-orange-700',
    accent: 'border-orange-200',
    title: 'Consignado CLT',
    desc: 'Para trabalhadores com carteira assinada. Desconto em folha de pagamento com aprovacao rapida.',
    badge: null,
  },
  {
    icon: <BarChart3 size={32} />,
    color: 'bg-green-50 text-green-700',
    accent: 'border-green-200',
    title: 'Antecipacao do FGTS',
    desc: 'Antecipe seu saldo do FGTS com taxas competitivas. Dinheiro na conta em ate 24 horas uteis.',
    badge: 'Sem Juros Mensais',
  },
  {
    icon: <RefreshCw size={32} />,
    color: 'bg-sky-50 text-sky-700',
    accent: 'border-sky-200',
    title: 'Portabilidade de Credito',
    desc: 'Transfira seu contrato para outro Banco parceiro e pague menos . Reduz suas parcelas e melhore suas condicoes de taxas de juros.',
    badge: null,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#0d3060]/10 text-[#0d3060] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Nossos Servicos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3c] mb-4">
            Encontre a solucao ideal{' '}
            <span className="text-[#f0b429]">para voce</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Trabalhamos com diversas modalidades de credito para atender todos os perfis.
            Escolha a opcao que melhor se encaixa na sua necessidade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`relative border ${s.accent} rounded-2xl p-6 flex flex-col gap-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group`}
            >
              {s.badge && (
                <span className="absolute top-4 right-4 bg-[#f0b429] text-[#0a1f3c] text-xs font-bold px-2.5 py-1 rounded-full">
                  {s.badge}
                </span>
              )}
              <div className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center`}>
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0a1f3c]">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{s.desc}</p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d3060] group-hover:text-[#f0b429] transition-colors"
              >
                Simular agora <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
