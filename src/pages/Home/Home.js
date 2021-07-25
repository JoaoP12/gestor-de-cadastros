import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from '../../styled/Home/styled-home';

function Home() {
  const history = useHistory();

  return (
    <S.Main>
      <S.InnerContent>
        <S.LogoContainer>
          <S.LogoTitle>SJ</S.LogoTitle>
        </S.LogoContainer>
        <S.Content>
          <S.Slogan>Gestão de estoque e clientes facilitada</S.Slogan>
          <S.Acesse>Acesse</S.Acesse>
          <S.Buttons>
            <S.Button onClick={() => history.push('/produtos')}>Produtos</S.Button>
            <S.Button onClick={() => history.push('/clientes')}>Clientes</S.Button>
          </S.Buttons>
        </S.Content>
      </S.InnerContent>
    </S.Main>
  );
}

export default Home;
