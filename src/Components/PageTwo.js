import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Section>
        <S.H2>How many tenses does the verb "do" have?</S.H2>
        <S.P>
          Basically there are 3 tenses, past, present and future. And each of
          them has four forms: simple, continuous, perfect and perfect
          continuous{" "}
        </S.P>
        <S.H2>What does the verb "Have" indicate as a main position?</S.H2>
        <S.P>
          Como verbo principal ele indica seu significado literal de posse
        </S.P>
        <S.H2>
          Create two sentences with cognate words for "joy" and "sadness"
        </S.H2>
        <S.P>Comedy movies bring a lot of joy to people</S.P>
        <S.P>Dance keeps the sadness away</S.P>
        <S.H2>
          What is the difference between the verb "will" and "going to"?
        </S.H2>
        <S.P>
          A principal diferença entre will e going to é que utilizamos o going
          to para ações futuras que indicam certeza ou que foram planejadas,
          enquanto o will indica incerteza.
        </S.P>
        <S.H2>Name four interrogative pronouns (Em inglês)</S.H2>
        <S.Ul>
          <li>Where</li>
          <li>Who</li>
          <li>When</li>
          <li>What</li>
        </S.Ul>
        <S.H2>How many types of adverbs are there in English?</S.H2>
        <S.P>
          There are 9 types, but the main ones are Manner, Place, Time,
          Frequency and Intensifier
        </S.P>
      </S.Section>
      <S.Box>
        <S.H3>Create a sentence for an adverb of time (Em inglês)</S.H3>
        <S.P>Today is my last day working.</S.P>
        <S.H3>Create a mnemonic phrase (Em inglês)</S.H3>
        <S.P>
          "Simon and Sally like Flowers and Wine" utilizei as iniciais para
          lembrar das quatro estações.
        </S.P>
      </S.Box>
    </S.Container>
  );
}
