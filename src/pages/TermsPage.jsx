import { DocumentLayout } from '../components/DocumentLayout.jsx';
import { LegalSection } from '../components/LegalSection.jsx';

export function TermsPage() {
  return (
    <DocumentLayout
      title="Termos de"
      accent="Uso"
      subtitle="Condições de utilização do bot Bombeirinho SSFD no Discord."
      notice="Confirme as práticas operacionais e administrativas antes de publicar este documento como versão definitiva."
    >
      <LegalSection title="1. Identificação">
        <p>
          O Bombeirinho SSFD é um aplicativo para Discord desenvolvido por <strong>Luiz Eduardo de Almeida Rodrigues</strong>, destinado a apoiar as atividades administrativas e operacionais da comunidade South State Fire Department (SSFD). Contato: <a href="mailto:luizedu.btiufersa@gmail.com">luizedu.btiufersa@gmail.com</a>.
        </p>
      </LegalSection>
      <LegalSection title="2. Aceitação e âmbito">
        <p>
          Ao utilizar os comandos, botões e painéis do Bombeirinho SSFD, o usuário concorda em observar estes termos e as regras aplicáveis do servidor Discord em que o aplicativo opera. O aplicativo é voltado à organização de uma comunidade de roleplay e não substitui serviços públicos de emergência.
        </p>
      </LegalSection>
      <LegalSection title="3. Funcionalidades">
        <p>
          O aplicativo pode disponibilizar cadastro e aprovação de membros, organização de patentes e equipes, registro e consulta de expedientes, cursos, controle de vistorias, avisos administrativos e outras funções relacionadas à gestão do SSFD. O acesso a determinadas ações depende dos cargos e permissões atribuídos no Discord.
        </p>
      </LegalSection>
      <LegalSection title="4. Uso adequado">
        <p>
          É proibido utilizar o aplicativo para falsificar registros, acessar informações sem autorização, explorar falhas de segurança, automatizar abusivamente interações ou prejudicar outros integrantes. Administradores devem utilizar as ferramentas somente para fins legítimos de gestão da comunidade.
        </p>
      </LegalSection>
      <LegalSection title="5. Registros e informações">
        <p>
          As ações realizadas pelo bot podem gerar registros necessários à execução de suas funções e à auditoria administrativa. O tratamento dessas informações é explicado na <a href="/politica-de-privacidade/">Política de Privacidade</a>.
        </p>
      </LegalSection>
      <LegalSection title="6. Disponibilidade e alterações">
        <p>
          O desenvolvedor poderá corrigir falhas, modificar recursos, suspender temporariamente o serviço ou atualizar estes termos. A disponibilidade contínua não é garantida, inclusive em situações de manutenção ou falhas de serviços externos.
        </p>
      </LegalSection>
      <LegalSection title="7. Responsabilidades">
        <p>
          O desenvolvedor é responsável pela manutenção técnica do aplicativo dentro de suas possibilidades. As decisões administrativas tomadas por membros autorizados do SSFD, como promoções, exonerações e atribuição de equipes, são de responsabilidade dos respectivos operadores, sem prejuízo das obrigações legais aplicáveis.
        </p>
      </LegalSection>
      <LegalSection title="8. Contato">
        <p>
          Dúvidas, relatos de falhas e solicitações relacionadas ao aplicativo podem ser encaminhadas a <a href="mailto:luizedu.btiufersa@gmail.com">luizedu.btiufersa@gmail.com</a>.
        </p>
      </LegalSection>
    </DocumentLayout>
  );
}
