import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria das Gracas S.',
    role: 'Aposentada INSS - Rio de Janeiro/RJ',
    text: 'Precisava de dinheiro urgente para uma cirurgia e a CREDHOUSE resolveu tudo em menos de 24 horas! Atendimento excelente, super atenciosos e taxa melhor que o banco onde tenho conta ha anos.',
    rating: 5,
    avatar: 'M',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Carlos Eduardo M.',
    role: 'Servidor Publico Federal - Brasilia/DF',
    text: 'Fiz a portabilidade do meu consignado para a CREDHOUSE e economiei mais de R$150 por mes na parcela. O processo foi todo online, simples e rapido. Recomendo para todos os servidores!',
    rating: 5,
    avatar: 'C',
    color: 'bg-green-100 text-green-700',
  },
  {
    name: 'Ana Paula R.',
    role: 'Trabalhadora CLT - Sao Paulo/SP',
    text: 'Antecipei meu FGTS com a CREDHOUSE para reformar minha casa. O consultor me explicou tudo direitinho, sem letras miudas. Dinheiro caiu na conta no dia seguinte! Servico de primeira!',
    rating: 5,
    avatar: 'A',
    color: 'bg-orange-100 text-orange-700',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#0d3060]/10 text-[#0d3060] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3c] mb-4">
            O que nossos clientes{' '}
            <span className="text-[#f0b429]">dizem</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Mais de 8 mil clientes ja realizaram seus planos com a CREDHOUSE. Veja alguns depoimentos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-all duration-300"
            >
              <Quote size={28} className="text-[#f0b429]/60" />
              <p className="text-gray-700 text-sm leading-relaxed flex-1">"{t.text}"</p>

              {/* Rating */}
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-[#f0b429] fill-[#f0b429]" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-[#0a1f3c] text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
