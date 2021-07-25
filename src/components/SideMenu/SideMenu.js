import React from 'react';
import { useHistory } from 'react-router-dom'
import * as S from './styled-menu';

export default function SideMenu () {
    const history = useHistory();
    return (
        <S.MainBar>
            <S.Title>Menu</S.Title>
            <S.MenuOptions>
                <S.Option onClick={() => history.push("/")}>
                    <S.Icon className="icon" src="./img/home_icon.png" alt="Home Icon" />
                    <span className="label">Home</span>
                </S.Option>
                <S.Option onClick={() => history.push("/produtos")}>
                    <S.Icon className="icon" src="./img/product_icon.png" alt="Product Icon" />
                    <span className="label">Produtos</span>
                </S.Option>
                <S.Option onClick={() => history.push("/clientes")}>
                    <S.Icon className="icon" src="./img/customer_icon.png" alt="Customer Icon" />
                    <span className="label">Clientes</span>
                </S.Option>
                <S.Option onClick={() => history.push('/config')}>
                    <S.Icon className="icon" src="./img/settings_icon.png" alt="Settings Icon" />
                    <span className="label">Configurações</span>
                </S.Option>
            </S.MenuOptions>
        </S.MainBar>
    );
}