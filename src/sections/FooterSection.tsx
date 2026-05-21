import { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Modal } from '../components/ui/Modal';
import { SITE_CONFIG } from '../constants';
import { TERMS_OF_USE, PRIVACY_POLICY } from '../constants/legal';

const footerLinks = {
  produto: {
    label: 'Produto',
    links: [
      { text: 'Guia da Caneta', href: '#hero' },
      { text: 'Conteúdo', href: '#aprender' },
      { text: 'Bônus', href: '#recebe' },
      { text: 'FAQ', href: '#faq' },
    ],
  },
  legal: {
    label: 'Legal',
    links: [
      { text: 'Termos de Uso', href: '#termos', modal: 'termos' as const },
      { text: 'Política de Privacidade', href: '#privacidade', modal: 'privacidade' as const },
    ],
  },
  suporte: {
    label: 'Suporte',
    links: [
      { text: 'Fale Conosco', href: 'mailto:contato@ellevo.marketing' },
      { text: 'FAQ', href: '#faq' },
    ],
  },
};

export function FooterSection() {
  const [modalOpen, setModalOpen] = useState<'termos' | 'privacidade' | null>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, modal?: 'termos' | 'privacidade') => {
    if (modal) {
      e.preventDefault();
      setModalOpen(modal);
    }
  };

  return (
    <>
      <footer id="footer" className="py-12 sm:py-16 border-t border-border relative">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-black text-foreground mb-3">
                {SITE_CONFIG.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Material educativo completo para quem deseja começar o tratamento
                com canetas de emagrecimento com informação de qualidade.
              </p>
            </div>

            {/* Links */}
            {Object.values(footerLinks).map((group) => (
              <div key={group.label}>
                <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
                  {group.label}
                </h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, 'modal' in link ? link.modal : undefined)}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-4 sm:p-6 mb-6">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Disclaimer médico:</strong>{' '}
                Este material possui caráter exclusivamente educativo e não
                substitui acompanhamento médico. Todo tratamento com medicamentos
                GLP-1 deve ser prescrito e acompanhado por um médico
                especialista. As informações aqui contidas não constituem
                diagnóstico, prescrição ou recomendação de tratamento. Consulte
                sempre um profissional de saúde qualificado.
              </p>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os
              direitos reservados.
            </p>
          </div>
        </Container>
      </footer>

      {/* Modals */}
      <Modal
        open={modalOpen === 'termos'}
        onClose={() => setModalOpen(null)}
        title={TERMS_OF_USE.title}
      >
        {TERMS_OF_USE.sections.map((section) => (
          <div key={section.heading}>
            <h3 className="font-semibold text-foreground mb-1">
              {section.heading}
            </h3>
            <p>{section.content}</p>
          </div>
        ))}
      </Modal>

      <Modal
        open={modalOpen === 'privacidade'}
        onClose={() => setModalOpen(null)}
        title={PRIVACY_POLICY.title}
      >
        {PRIVACY_POLICY.sections.map((section) => (
          <div key={section.heading}>
            <h3 className="font-semibold text-foreground mb-1">
              {section.heading}
            </h3>
            <p>{section.content}</p>
          </div>
        ))}
      </Modal>
    </>
  );
}
