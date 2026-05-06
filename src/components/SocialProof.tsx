import { Star, Users, Shield, Zap } from 'lucide-react';

const stats = [
  {
    icon: <Users size={28} className="text-[#0d3060]" />,
    value: '+8.000',
    label: 'Clientes Atendidos',
  },
  {
    icon: <Star size={28} className="text-[#f0b429]" />,
    value: '4.9 / 5',
    label: 'Nota de Avaliacao',
    stars: true,
  },
  {
    icon: <Zap size={28} className="text-[#25d366]" />,
    value: 'Ate 24h',
    label: 'Liberacao do Credito',
  },
  {
    icon: <Shield size={28} className="text-[#0d3060]" />,
    value: '100%',
    label: 'Seguro e Autorizado',
  },
];

export default function SocialProof() {
  return (
    <section className="bg-white py-14 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center gap-2">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shadow-sm">
                {s.icon}
              </div>
              <div className="text-2xl font-extrabold text-[#0a1f3c]">{s.value}</div>
              {s.stars && (
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#f0b429] fill-[#f0b429]" />
                  ))}
                </div>
              )}
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Partner banks */}
        <div className="mt-10 pt-8 border-t border-gray-100 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Bancos Parceiros
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {['BMG', 'Facta', 'C6 Bank', 'PAN', 'Bradesco', 'Itau'].map((bank) => (
              <span
                key={bank}
                className="bg-gray-50 border border-gray-200 text-gray-700 font-bold text-sm px-4 py-2 rounded-lg"
              >
                {bank}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
