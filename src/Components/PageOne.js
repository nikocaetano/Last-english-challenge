import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Header>
        <S.H1>FINAL ENGLISH CHALLENGE</S.H1>
      </S.Header>
      <S.Section>
        <S.H2>What "HTTPS" means?</S.H2>
        <S.P>R: HTTPS means Hyper Text Transfer Protocol Secure</S.P>
        <S.H2>Stateless is...?</S.H2>
        <S.P>
          R: Na aplicação Stateless nenhuma informação/memória é guardada. Ou
          seja, nenhum registro ou estado de todas as interações antigas na
          aplicação são armazenadas e cada interação é tratada conforme as
          informações disponiveis para a interação.
        </S.P>
        <S.H2>Subjective pronouns are used to indicate what?</S.H2>
        <S.P>
          R: These pronouns indicate who performs an action or who are described
          by the main verb
        </S.P>
        <S.H2>Could, Should and Would are know as...?</S.H2>
        <S.P>
          R: They are know as Modal Verbs, these verbs are auxiliary verbs used
          to complement or change the meaning of the main verbs in sentences
        </S.P>
        <S.H2>What Should means?</S.H2>
        <S.P>Should means Deveria</S.P>
        <S.H2>*EM PORTUGUÊS* - Construa essas seguintes frases em inglês:</S.H2>
      </S.Section>
      <S.Div>
        <S.Ul>
          <li>1 - Vamos falar coisas ótimas sobre você!</li>
          <li>'Let's talk great things about you'</li>
          <li>2 - Ele vai para a Bahia mês que vem</li>
          <li>'He goes to Bahia next week'</li>
          <li>3 - Ela estará ai amanhã</li>
          <li>'She will be there tomorrow'</li>
        </S.Ul>
      </S.Div>
      <S.Box>
        <S.H3>Who is the subject of the sentence?</S.H3>
        <S.P>They gime me all the power</S.P>
        <S.P>R: 'They' is the subject of the sentence</S.P>
        <S.H3>Conjugate the verb to be in the past tense (Em inglês)</S.H3>
        <S.Ul>
          <li>I was</li>
          <li>You were</li>
          <li>He was</li>
          <li>She was</li>
          <li>It was</li>
          <li>You were</li>
          <li>We were</li>
          <li>They were</li>
        </S.Ul>
        <S.H3>
          Build two sentences using "this" and "that", in the plural (Em inglês)
        </S.H3>
        <S.P>These clothes are mine</S.P>
        <S.P>Those are Simon's books</S.P>
      </S.Box>
    </S.Container>
  );
}
