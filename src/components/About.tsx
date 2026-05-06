import { CheckCircle2 } from 'lucide-react';

const points = [
  'Correspondente bancario autorizado pelo Banco Central',
  'Mais de 8 mil clientes satisfeitos em todo o Brasil',
  'Parcerias com os maiores bancos do pais',
  'Atendimento 100% online, rapido e sem burocracia',
];

export default function About() {
  return (
    <section id="sobre" className="bg-[#f8fafc] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/WhatsApp_Image_2026-05-04_at_11.52.32.jpeg"
                alt="CredHouse equipe"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#25d366]/10 rounded-full flex items-center justify-center">
                <CheckCircle2 size={22} className="text-[#25d366]" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#0a1f3c]">Credito Aprovado!</div>
                <div className="text-xs text-gray-500">Liberacao em ate 24h</div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="inline-block bg-[#0d3060]/10 text-[#0d3060] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Sobre a CREDHOUSE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3c] leading-tight mb-5">
              Solucoes financeiras com{' '}
              <span className="text-[#f0b429]">transparencia e agilidade</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A CREDHOUSE e uma empresa especializada em credito consignado, atuando como
              correspondente bancario autorizado, oferecendo solucoes financeiras com
              transparencia, agilidade e as melhores taxas do mercado. Nosso compromisso e
              encontrar a melhor opcao de credito para o seu perfil.
            </p>

            <ul className="space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#25d366] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
