import { DocumentLayout } from '../components/DocumentLayout.jsx';
import { LegalSection } from '../components/LegalSection.jsx';

export function PrivacyPage() {
  return (
    <DocumentLayout
      title="Política de"
      accent="Privacidade"
      subtitle="Como o Bombeirinho SSFD utiliza informações necessárias às suas funcionalidades."
      notice="Antes da publicação, confirme prazos de retenção, procedimentos de exclusão, permissões de acesso, localização do armazenamento e papéis dos responsáveis pelo tratamento de dados."
    >
      <LegalSection title="1. Responsável e contato">
        <p>
          O aplicativo Bombeirinho SSFD é desenvolvido por <strong>Luiz Eduardo de Almeida Rodrigues</strong>. Para dúvidas e solicitações sobre dados pessoais, entre em contato pelo e-mail <a href="mailto:luizedu.btiufersa@gmail.com">luizedu.btiufersa@gmail.com</a>. A definição dos papéis de controlador e operador, quando aplicável, deverá considerar as decisões efetivas de tratamento tomadas pelo desenvolvedor e pela administração do SSFD.
        </p>
      </LegalSection>
      <LegalSection title="2. Categorias de dados">
        <p>
          Conforme as funcionalidades utilizadas, o bot pode tratar identificadores de conta do Discord, nomes de exibição e apelidos, cargos e permissões, informações fornecidas no cadastro da comunidade, dados de patentes e cursos, registros de entrada, pausas e encerramento de expedientes, vínculos de equipes, históricos administrativos e dados de estabelecimentos envolvidos em vistorias no contexto do servidor. Algumas informações podem ser referentes a personagens de roleplay.
        </p>
      </LegalSection>
      <LegalSection title="3. Finalidades">
        <p>
          Os dados são utilizados para identificar participantes, controlar o acesso a funções, administrar cadastros, organizar equipes, registrar expedientes e cursos, gerenciar vistorias, gerar consultas e manter registros necessários à operação e à segurança do sistema.
        </p>
      </LegalSection>
      <LegalSection title="4. Origem e compartilhamento">
        <p>
          As informações podem ser fornecidas pelos usuários, por administradores autorizados ou obtidas das interações e dos cargos disponíveis no servidor Discord. O bot utiliza serviços de infraestrutura, incluindo <strong>Oracle Cloud</strong> para hospedagem e <strong>Firebase Firestore</strong> para armazenamento. O Discord também processa dados conforme suas próprias políticas. Informações podem ser exibidas em canais ou mensagens privadas do servidor de acordo com a funcionalidade e as permissões configuradas.
        </p>
      </LegalSection>
      <LegalSection title="5. Segurança e acesso">
        <p>
          O acesso às funções administrativas deve ser limitado por permissões do Discord. Medidas técnicas e organizacionais adequadas devem ser mantidas para proteger credenciais e dados. Nenhum sistema oferece garantia absoluta contra incidentes.
        </p>
      </LegalSection>
      <LegalSection title="6. Retenção e exclusão">
        <p>
          Os registros são mantidos conforme a necessidade operacional e as obrigações aplicáveis. <strong>Antes de publicar esta política, o responsável deverá definir e inserir aqui os prazos ou critérios específicos de retenção para cadastros, expedientes, cursos, vistorias e logs, além de confirmar quais exclusões são tecnicamente suportadas.</strong> A saída do servidor ou a remoção de um cargo não implica necessariamente a exclusão automática de todos os registros históricos.
        </p>
      </LegalSection>
      <LegalSection title="7. Direitos e solicitações">
        <p>
          O titular pode solicitar informações sobre o tratamento de seus dados, acesso, correção e exclusão quando cabível, entre outros direitos previstos na legislação aplicável. As solicitações podem ser enviadas para <a href="mailto:luizedu.btiufersa@gmail.com">luizedu.btiufersa@gmail.com</a>. A resposta dependerá da verificação de identidade, da natureza dos dados e de eventuais obrigações de conservação.
        </p>
      </LegalSection>
      <LegalSection title="8. Atualizações">
        <p>
          Esta política poderá ser atualizada para refletir mudanças nas funcionalidades, infraestrutura ou práticas de tratamento. A versão publicada deverá indicar a data da última atualização.
        </p>
      </LegalSection>
    </DocumentLayout>
  );
}
