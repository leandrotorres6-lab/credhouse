import { Phone, Mail, MapPin, Shield } from 'lucide-react';

const WA_LINK = 'https://wa.me/5521976834322';

export default function Footer() {
  return (
    <footer className="bg-[#060f1e] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/Gemini_Generated_Image_iwx9leiwx9leiwx9.png"
              alt="CredHouse"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-sm">
              A CREDHOUSE e uma empresa especializada em credito consignado, atuando como
              correspondente bancario autorizado com transparencia e agilidade.
            </p>
            <div className="flex items-start gap-2 text-sm text-white/50">
              <Shield size={16} className="text-[#f0b429] mt-0.5 flex-shrink-0" />
              <span>
                <strong className="text-white/80">CNPJ:</strong> 58.194.926/0001-45
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Servicos</h4>
            <ul className="space-y-2">
              {[
                'Credito Consignado INSS',
                'Consignado SIAPE',
                'Consignado CLT',
                'Antecipacao do FGTS',
                'Portabilidade de Credito',
                'Refinanciamento',
              ].map((s) => (
                <li key={s}>
                  <a href="#servicos" className="text-white/50 hover:text-[#f0b429] text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-[#25d366] transition-colors"
                >
                  <Phone size={15} />
                  (21) 97683-4322
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@credhouse.com.br"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-[#f0b429] transition-colors"
                >
                  <Mail size={15} />
                  contato@credhouse.com.br
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                Rio de Janeiro, RJ
              </li>
            </ul>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-[#25d366] hover:bg-[#1ebe5c] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10 bg-[#030a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-white/40 text-xs leading-relaxed mb-3 text-center">
            A CREDHOUSE atua como correspondente bancario, nos termos da Resolucao n deg 3.954 do
            Banco Central do Brasil. As condicoes de credito sao definidas pelas instituicoes
            financeiras parceiras. Credito sujeito a analise e aprovacao. Taxas e condicoes podem
            variar conforme o perfil do cliente e a instituicao financeira.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <span>© {new Date().getFullYear()} CREDHOUSE. Todos os direitos reservados.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white/60 transition-colors">
                Politica de Privacidade
              </a>
              <a href="#" className="hover:text-white/60 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
